<template>
  <div id="detail">
    <nav-bar class="detail-nav" @titleClick="titleClick" ref="navbar"></nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <base-detail :goodsInfo="goodsInfo"></base-detail>
      <div class="shop-info">
        <shop-info :shop="shop"></shop-info>
      </div>
      <image-info :imageInfo="imageInfo" @imageLoad="imageLoad"></image-info>
      <goods-params :goodsParam="goodsParam" ref="params"></goods-params>
      <comment-info :commentinfo="commentinfo" ref="comment"></comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
   <div class="back-top">
      <back-top @click.native="backClick" v-show="isShow"></back-top>
    </div>
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>
<script>
import NavBar from "./childComp/NavBar";
import DetailSwiper from "./childComp/DetailSwiper";
import BaseDetail from "./childComp/BaseDetail";
import shopInfo from "./childComp/ShopInfo";
import ImageInfo from "./childComp/ImageInfo";
import GoodsParams from "./childComp/GoodsParam";
import CommentInfo from "./childComp/CommentInfo";
import DetailBottomBar from "./childComp/DetailBottomBar"
// import RecommendInfo from "./childComp/RecommendInfo"

import Scroll from "../../components/common/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backTop/BackTop";
import {
  getDetail,
  goodsInfo,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";
import { debounce } from "../../common/utils";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailImages: [],
      imageInfo: {},
      goodsParam: {},
      commentinfo: {},
      recommend: [],
      detailItemListener: null,
      themeTopYs: [],
      currentIndex:null,
      isShow:false
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      this.goodsInfo = new goodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.imageInfo = data.detailInfo;
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      console.log(this.goodsInfo);
      if (data.rate.cRate !== 0) {
        this.commentinfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      console.log(res);
      this.recommend = res.data.list;
    });
  },
  components: {
    NavBar,
    DetailSwiper,
    BaseDetail,
    shopInfo,
    Scroll,
    ImageInfo,
    GoodsParams,
    CommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  methods: {
    backClick() {
      // console.log("dd");
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE)
      console.log(this.themeTopYs);
    },
    titleClick(index) {
      // console.log(this.themeTopYs[index]);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position){
      // console.log(position);
      const positionY = -position.y;
      this.isShow = Math.abs(position.y) > 1000;
      let length = this.themeTopYs.length;
      for (let i=0;i<length;i++){ 
        //方法一
      // if(((this.currentIndex!=i)&&(i<length-1)&&positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])||i==(length-1)&&positionY>this.themeTopYs[length-1])
      // {
      //   this.currentIndex = i;
      //   console.log(this.currentIndex);
      //   this.$refs.navbar.currentIndex = this.currentIndex;
      
      // }

      //方法二
      if((this.currentIndex!=i&&positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1]))
      {
        this.currentIndex = i;
        console.log(this.currentIndex);
        this.$refs.navbar.currentIndex = this.currentIndex;
      
      }
      }

  },
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.detailItemListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.detailItemListener);
  },
  updated() {
    this.themeTopYs = [];
    this.themeTopYs.push(0);
    this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    this.themeTopYs.push(Number.MAX_VALUE)
    console.log(this.themeTopYs);
  },
  deactivated() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.detailItemListener);
  },
}
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
.shop-info {
  margin-top: 25px;
}
 

</style>
