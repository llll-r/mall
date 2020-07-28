<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" class="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3"
     @scroll="scroll" :pull-up-load="true" @pullingUp="loadMore">
      <div class="swipe">
        <home-swiper :banner="banner"></home-swiper>
      </div>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods" @click="gooss-list-click"></goods-list>
    </scroll>
    <div class="back-top">
      <back-top @click.native="backClick" v-show="isShow"></back-top>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { getHomeMultidata, getHomeGoods } from "../../network/home";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/tabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
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
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
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
    },

    backClick() {
      // console.log("dd");
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scroll(position) {
      // console.log(position);
      this.isShow = Math.abs(position.y) > 2000;
    },
    loadMore(){
      console.log("加载更多");
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp() //上拉已加载
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
      });
      
    },
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
  /* margin-bottom: 55px; */
}
.center {
  color: white;
}
.swipe {
  padding-top: 44px;
}
.tab-control {
  background-color: #fff;

  z-index: 9;
}
.content {
  height: calc(100% - 93px);
  /* overflow: hidden; */
}
</style>