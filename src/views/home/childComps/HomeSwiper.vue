<template>
  <div>
    <swiper>
   <swiper-item v-for="item in banner" :key="item.image" >
     <a :href="item.link">
       <img :src="item.image" alt="" @load="imgLoad">
     </a>
   </swiper-item>
   </swiper>
  </div>
</template>

<script>
import{Swiper,SwiperItem} from "../../../components/common/swiper/index"
export default {
    name:"HomeSwiper",
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
     imgLoad(){
       if(!this.isLoad)
        {
          this.$emit("swiperImgLoad")
          this.isLoad = true
        }
     }   
      },
    components:{
        Swiper,
        SwiperItem
  }
}
</script>

<style>

</style>