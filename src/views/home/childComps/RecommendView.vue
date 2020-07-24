<template>
  <div class="recommend">
     <div v-for="item in recommend" :key="item.image" class="recommend-item">
        <a :href="item.link">
        <img :src="item.image" alt="">
         </a>
          <p>{{item.title}}</p>
    </div>
       
    </div>
   
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommend:{
            type:Array,
            default(){
                return [] 
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    /* height: 100px; */
    flex-wrap: wrap;
    text-align: center;
    padding: 10px 0 10px;
    font-size: 13px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex:1;
}
.recommend-item img{

    width: 80px;
    
}
</style>