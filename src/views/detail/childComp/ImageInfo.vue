<template>
    <div id="image-info">
        <div class="image-info-key">{{imageInfo.detailImage[0].key}}</div>
        <div v-for="(item) in imageInfo.detailImage[0].list" :key="item">
            <img :src="item" alt="" class="image-item" @load="imageLoad">
        </div>
    </div>
</template>
<script>
export default {
    name:"ImageInfo",
    props:{
        imageInfo:{
            type:Object,
            default(){
                return {}
            }
        }
      
    },
   data() {
      return {
          counter:0,
          imagesLength:0
      }
   },
   activated() {
   },
   methods:{
       imageLoad(){
           if(++this.counter == this.imagesLength){
               this.$emit("imageLoad")
           }
       }
   },
   watch:{
       detailInfo(){
           this.imagesLength = this.imagelInfo.detailImage[0].list.length
       }
   }
}
</script>
<style>

.image-info-key{
    margin-top: 15px;
}
.image-item{
    width: 100%;
    margin-bottom: 3px;
}
</style>
