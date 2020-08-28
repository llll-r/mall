<template>
  <div class="all_check" id="xxxFullScreen">
    <input type="checkbox" name="" id="" @click="choseAll" :checked="isAllChecked">全选
   
    <span>当前总价：{{totalPrice}} </span>
    <span class="go_pay">去结算{{goPay}}</span>
  </div>
</template>
<script>
export default {
  name: "AllCheck",
  data() {
    return {};
  },
  activated() {

  },
  methods:{
      choseAll(){
        if(this.isAllChecked){
            this.$store.state.cartList.forEach(element => {
                element.checked = false                
            });
        }else{
            this.$store.state.cartList.forEach(element=>{
                element.checked = true
            })
        }


        //   this.$emit("choseAll");
        // for (const item of this.$store.state.cartList) {
        //     item.checked = !item.checked
        // }
      }
  },
  computed:{
      totalPrice(){
          return this.$store.state.cartList.filter(item=>{
              return  item.checked
          }).reduce((prevalue, item)=>{
              return item.count*item.price+prevalue
          }, 0).toFixed(2)
      },
      goPay(){
          return this.$store.state.cartList.filter(item=>{
              return  item.checked
          }).length
      },
      isAllChecked(){
          if(this.$store.state.cartList.length==0)
          return false
          for(let item of this.$store.state.cartList){
              if(!item.checked){
                  return false
              }
          }
          return true



        //   for (const item of this.$store.state.cartList) {
        //       if(item.checked==false){
        //           return false;
        //         break;
        //       }
        //       else{
        //           return true
        //       }
        //   }
      }
  }
};
</script>
<style>
.all_check{
    height: 30px;
    width: 100%;
    background-color: #ddd;
    position: absolute;
    bottom: 49px;
    left: 0;
    line-height: 30px;
}
input{
    margin-left: 10px;
}
.go_pay{
    width: 70px;
    height: 30px;
    background-color: rgb(228, 68, 95);
    color: white;
    float: right;
    text-align:center;
}
</style>
