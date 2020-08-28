<template>
    <div class="pageFullScreen" id="xxxFullScreen">
        <div class="checkbutton" :class="{active:isChecked}"></div>
    </div>
</template>
<script>
export default {
    name:"CheckButton",
   data() {
      return {
        //   isChecked:true
      }
   },
   props:{
       isChecked:{
           type:Boolean,
           default(){
               return false
           }
       }
   },
   activated() {
   }
}
</script>
<style scoped>
.checkbutton{
    width: 12px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #bbb;
}
.active{
    background-color: red;
}
</style>
