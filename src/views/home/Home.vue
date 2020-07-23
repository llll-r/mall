<template>
  <div class="home">
<nav-bar class="home-nav">
  <div slot="center" class="center">购物街</div>
</nav-bar>
   
  </div>
</template>
home-nav
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from "../../components/common/navbar/NavBar"
import {getHomeMultidata} from "../../network/home"
export default {
  name: 'Home',
  data(){
    return{
      result:null,
      dkeyword:[],
      banner:[],
      keywords:[],
      recommend:[],
    }
  },
  components:{
    NavBar
  },
  created(){
    // let _this = this
    getHomeMultidata().then(res=>{
      console.log(res)
      this.banner = res.data.banner
      this.dkeyword = res.dkeyword
      this.keywords = res.keywords
      this.recommend = res.recommend
      // this.result = res
    })
  }
 
}
</script>
<style  scoped>
.home-nav{
  background-color: rgb(243, 149, 212);
}
.center{
 
  color: white;
}
</style>