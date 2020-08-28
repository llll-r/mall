<template>
  <!-- <h2>购物车</h2> -->
  <div class="cart">
    <nav-bar class="cart_nav">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list :cartList="$store.state.cartList"></cart-list>
    <!-- 底部汇总 -->
    <all-check></all-check>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
// import Scroll from "../../components/common/scroll/Scroll";
import CartList from "./childComp/CartList";
import AllCheck from "./childComp/AllCheck"
export default {
  name: "Cart",
  components: {
    NavBar,
    // Scroll,
    CartList,
    AllCheck,
  },
  activated() {
    // console.log("ddd");
   
  },
};
</script>

<style scoped>
.cart_nav {
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0; */
  background-color: pink;
  color: white;
  z-index: 999;
}

/* .cart_list {
  height: calc(100vh - 44px - 49px);
}
.content {
  height: 100%;
  overflow: hidden;
} */
</style>
