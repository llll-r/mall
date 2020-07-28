<template>
    <div class="back-top" id="xxxFullScreen">
        <img src="../../../assets/img/common/top.png" alt="">
    </div>
</template>
<script>
export default {
    name:"BackTop",
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>
<style>
/* pageFullScreen在index.css */
.back-top{
    position: fixed;
    right: 0;
    bottom: 49px;
    /* height:  85px; */
}
.back-top img{
    width: 43px;
}
</style>
