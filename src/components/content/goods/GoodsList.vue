<template>
  <div class="goodsList">
<!-- <h2>我是Goods List</h2> -->
  </div>
</template>

<script>
export default {
    name:"GoodsList",
   props:{
       goods:{
           type:Array,
           default(){
               return []
           }
       }
   }
}
</script>

<style>

</style>