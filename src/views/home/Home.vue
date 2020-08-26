<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" class="center">购物街</div>
    </nav-bar>
    <tab-control
      :title="['流行','新款','精选']"
      class="tabcontrol1"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="tabControlFix"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <div class="swipe">
        <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad"></home-swiper>
      </div>
      <!-- 推荐部分 -->
      <recommend-view :recommend="recommend"></recommend-view>
      <!-- 流行趋势，一张大图片 -->
      <feature-view></feature-view>
      <!-- 按钮控制跳转 -->
      <tab-control :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods" @click="gooss-list-click"></goods-list>
    </scroll>
    <div class="back-top">
      <back-top @click.native="backClick" v-show="isShow"></back-top>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import {debounce}from "../../common/utils"
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/tabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  name: "Home",
  data() {
    return {
      // result:null,
      dkeyword: [],
      banner: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      tabControlFix: false,
      saveY: 0,
      homeItemListener:null,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // let _this = this
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.homeItemListener = ()=>{
           refresh();
    }
    this.$bus.$on("itemImageLoad", this.homeItemListener);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    swiperImgLoad() {
      // console.log("---");
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
   
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    backClick() {
      // console.log("dd");
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scroll(position) {
      this.isShow = Math.abs(position.y) > 1000;
      this.tabControlFix = Math.abs(position.y) > this.tabOffsetTop;
      //  console.log(position.y);
    },
    loadMore() {
      this.getHomeGoods(this.currentType);

      console.log("加载更多"); //上拉已加载
      // this.$refs.scroll.refresh()
    },
    //网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res)
        this.banner = res.data.banner.list;
        // this.dkeyword = res.data.dkeyword;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
        // this.result = res
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  destroyed() {
    // console.log("desrtory");
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scrollY();
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
    this.$bus.$off('itemImageLoad', this.homeItemListener)
  },
};
</script>
<style  scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: rgb(243, 149, 212);
  position: fixed;
  right: 0;
  left: 0;
  z-index: 9;
  /* margin-bottom: 55px; 
  position: fixed;
  z-index: 9;*/
}
.wrapper {
  height: 100vh;
}
.center {
  color: white;
}
.swipe {
  padding-top: 44px;
  /* position: absolute; */
}
/* .tab-control {
  background-color: #fff;

  z-index: 9;
} */
.content {
  height: calc(100% - 93px);
  /* position: absolute; */
  /* overflow: hidden; */
  /* top: 44px; */
}
.tabcontrol1 {
  /* position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
  top:44px */
  background-color: #fff;
  position: relative;
  left: 0;
  top: 44px;
  z-index: 9;
}
/* .fix{
  position: relative;
  margin-top: 44px;
} */
</style>