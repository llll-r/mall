<template>
  <div class="goodsList">
      <goods-list-item v-for="item in goods" :key="item.image" :goods-item="item" class="goods-list-item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem  from "./GoodsListItem";
    
export default {
  name:"GoodsList",
   props:{
       goods:{
           type:Array,
           default(){
               return []
           }
       }
   },
   components:{
     GoodsListItem
   }
}
</script>

<style>
.goodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
/* .goods-list-item{
  width: 50%;
  flex: 1;
} */
</style>