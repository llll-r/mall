<template>
  <div id="detail_bottom_bar">
    <div class="left">
      <span>店铺</span>
      <span>客服</span>
      <span>收藏</span>
    </div>
    <div class="right">
      <div class="add_cart" @click="cart">加入购物车</div>
      <div class="go_buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    cart() {
      // console.log("......");
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
#detail_bottom_bar {
    width: 100%;
    height: 49px;
    background-color: pink;
    position: relative;
    z-index: 99999;
    bottom: 0;
    display: flex;
}
.left {
  flex: 1;
  background-color: #fff;
  /* padding-top: 10px; */
}
.left span {
  margin-top: 10px;
}
.right {
  flex: 1;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 49px;
  /* vertical-align: middle; */
  text-align: center;
}
.add_cart {
  flex: 1;
  background-color: red;
}
.go_buy {
  flex: 1;
  background-color: yellow;
}
</style>