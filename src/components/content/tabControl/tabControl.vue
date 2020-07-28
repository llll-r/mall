<template>
  <div class="tab-control">
      <div v-for="( item,index) in title" :key="item" class="tab-control-item"
      :class="{active:index==currentIndex}" @click="activeItem(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex :0
        }
    },
    methods:{                                                                                 
        activeItem(index){
            this.currentIndex=index
            this.$emit("tabClick", index)
        }
    }
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
}   
.tab-control-item{
    flex: 1;
      /* padding-bottom: 5px; */
}
.tab-control-item span{
    padding-bottom: 3px;
}
.active{
    color: rgb(235, 166, 159);
  
}
.active span{
    border-bottom:  3px solid rgb(235, 166, 159);
}
</style>