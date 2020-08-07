<template>
   <div id="goods-params">
       <table class="table-sizes">
      <tbody class="params-sizes">
         <tr v-for="item in goodsParam.sizes[0]" :key="item.key">
            <td v-for="items in item" :key="items">{{items}}</td>
         </tr>
      </tbody> 
   </table>
   <table class="table-info">
      <tbody class="params-info">
         <tr v-for="item in goodsParam.infos" :key="item.key">
            <td>{{item.key}}</td>
            <td class="info-td">{{item.value}}</td>
         </tr>
      </tbody>
   </table>
  
   </div>
</template>
<script>
export default {
   name:"GoodsParams",
   data() {
      return {
      }
   },
   activated() {
   },
   props:{
      goodsParam:{
         type:Object,
         default(){
            return {}
         }
      }
   }
}
</script>
<style scoped>
#goods-item{
   background-color: #fff;
}
.table-info, .table-sizes{
   border-top: 3px solid #ddd ;
   font-size: 14px;
}
.table-info{
    border-bottom: 3px solid #ddd ;
    border-collapse: collapse;
}
.table-sizes{
   width: 100%;
   margin-bottom: 10px;
  
}

.info-td{
   color: pink;
   /* padding-left: 15px; */
}
.params-sizes td, .params-info td{
   padding: 10px 15px;
   
}
.table-sizes tr, .params-info tr{
   height: 42px;
}
.table-sizes tr td, .params-info td{
   border-bottom: 1px solid pink;
}
</style>
