<template>
    <div id="detail">
      <nav-bar class="detail-nav"></nav-bar>
     <scroll class="content" ref="scroll">
        <detail-swiper :topImages="topImages"></detail-swiper>
      <base-detail :goodsInfo="goodsInfo"></base-detail>
      <div class="shop-info"><shop-info :shop="shop"></shop-info></div>
      <image-info :imageInfo="imageInfo" @imageLoad="imageLoad"></image-info>
      <goods-params :goodsParam="goodsParam"></goods-params>
      <comment-info :commentinfo="commentinfo"></comment-info>
      <goods-list :goods="recommend"></goods-list>
     </scroll>
    </div>
</template>
<script>
import NavBar from "./childComp/NavBar";
import DetailSwiper from "./childComp/DetailSwiper"
import BaseDetail from "./childComp/BaseDetail"
import shopInfo from "./childComp/ShopInfo"
import ImageInfo from "./childComp/ImageInfo"
import GoodsParams from "./childComp/GoodsParam"
import CommentInfo from "./childComp/CommentInfo"
// import RecommendInfo from "./childComp/RecommendInfo"



import Scroll from "../../components/common/scroll/Scroll"
import GoodsList from "../../components/content/goods/GoodsList"


import {getDetail, goodsInfo, Shop, GoodsParam, getRecommend} from "../../network/detail";

export default {
    
  name:"Detail",
   data() {
      return {
          iid:null,
          topImages:[], 
          goodsInfo:{},
          shop:{},
          detailImages:[],
          imageInfo:{}, 
          goodsParam:{},
         commentinfo:{},
         recommend:[]
      }
   },
   created(){
       this.iid = this.$route.params.iid
         getDetail(this.iid).then(res=>{
            console.log(res);
            const data = res.result
            this.topImages = data.itemInfo.topImages
            
            this.goodsInfo = new goodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
            this.imageInfo = data.detailInfo
            this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
           console.log(this.goodsInfo);
           if(data.rate.cRate!== 0){
             this.commentinfo = data.rate.list[0]

           }
        })
        getRecommend().then(res=>{
          console.log(res);
          this.recommend = res.data.list
        })
   },
   components:{
       NavBar,
       DetailSwiper,
       BaseDetail,
       shopInfo,
       Scroll,
       ImageInfo,
       GoodsParams,
       CommentInfo,
      GoodsList
   },
   methods:{
     imageLoad(){
       this.$refs.scroll.refresh()
     }
   }
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px);
}
.shop-info{
  margin-top: 25px;
}
 

</style>
