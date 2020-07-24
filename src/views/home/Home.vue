<template>
<div id="home">
<nav-bar class="home-nav"><div slot="center" class="center">购物街</div></nav-bar>
 <div class="swipe"><home-swiper :banner="banner"></home-swiper></div>
 <recommend-view :recommend="recommend"></recommend-view>
 <feature-view></feature-view>
   <tab-control :title="['流行','新款','精选']" class="tab-control"></tab-control>
   <goods-list :goods="goods"></goods-list>
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
import {getHomeMultidata, getHomeGoods} from "../../network/home"

import NavBar from "../../components/common/navbar/NavBar"
import TabControl from "../../components/content/tabControl/tabControl"
import GoodsList from "../../components/content/goods/GoodsList"

import HomeSwiper from "./childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"
export default {
  name: 'Home',
  data(){
    return{
      // result:null,
      dkeyword:[],
      banner:[],
      keywords:[],
      recommend:[],
      goods:{
        "pop": {page:0, list:[]},
        "news":{page:0, list:[]},
        "sell":{page:0, list:[]}
      }
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  created(){
    // let _this = this
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods:{
  getHomeMultidata(){
    getHomeMultidata().then(res=>{
      console.log(res)
      this.banner = res.data.banner.list;
      // this.dkeyword = res.data.dkeyword;
      this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;
      // this.result = res
    });
},
  getHomeGoods(type){
    const page = this.goods[type].page + 1;
    getHomeGoods(type, page).then(res=>{
        this.goods[type].push(...res.data.list[type])
      })
}
  }
}
</script>
<style  scoped>

.home-nav{
  background-color: rgb(243, 149, 212);
  position: fixed;
  right: 0;
  left: 0;
  z-index: 9;
  /* margin-bottom: 55px; */

}
.center{
 
  color: white;
}
.swipe{
  padding-top: 44px;
}
.tab-control{
  background-color: #fff;
  position: sticky;
  top: 43px;
  z-index: 9;
}

</style>