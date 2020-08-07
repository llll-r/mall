<template>
   <div>
       <swiper>
           <swiper-item v-for="item in topImages" :key="item" class="detail-item" > 
               <img :src="item" alt="">
           </swiper-item>
       </swiper>
   </div>
</template>
<script>
import {Swiper, SwiperItem} from "../../../components/common/swiper"
export default {
    name:"DetailSwiper",
   data() {
      return {
      }
   },
   props:{
       topImages:{
           type:Array,
           default(){
               return []
           }
       }
   },
   activated() {
   },
   components:{
       Swiper, 
       SwiperItem
   }
}
</script>
<style scoped>
/* pageFullScreen在index.css */
.detail-item{
    height: 300px;
    /* overflow: hidden; */
}

</style>
