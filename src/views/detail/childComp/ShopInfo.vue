<template>
  <div id="shop-info">
    <div class="title">
      <img :src="shop.logo" alt />
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="left-num">
          <span>{{shop.sells}}</span>
          <span>{{shop.goodsCount}}</span>
        </div>
        <div class="left-word">
          <span>总销量</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <table>
          <tbody>
            <tr v-for="(item,index) in shop.score" :key="index" class="score-item">
              <td>{{item.name}}</td>
              <td :class="{colorword:item.isBetter}">{{item.score}}</td>
              <td :class="{color:item.isBetter}">高</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="go-shop"><a href="#">进店逛逛</a></div>
    
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
        
    };
  },
  activated() {},
  computed: {},
};
</script>
<style scoped>
#shop-info {
  margin-left: 15px;
  border-bottom: 1px solid #ddd;
}

.title img {
  width: 45px;
}
.name {
  display: inline-block;
  margin-left: 20px;
}
.content {
  display: flex;
}
.left,
.right {
  flex: 1;
}
.left {
  /* height: 50px;
    background-color: pink; */
  border-right: 1px solid #ddd;
  margin-left: 15px;
  margin-top: 15px;
}
.left-num span {
  padding-right: 25px;
}
.left-word span {
  padding-right: 20px;
  font-size: 13px;
}
.score-item td{
    padding-right: 15px;
}
.right {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 13px;
  /* height: 50px;
    background-color: blue; */
}
.color {
  background-color: red;
}
.colorword{
    color: red;
}
.go-shop {
  width: 150px;
  line-height: 30px;
  background-color: rgb(240, 240, 240);
  border-radius: 5px;
  margin: 15px 32%;
  
  text-align: center;
  vertical-align: middle;
}
.go-shop a{
    text-decoration: none;
    color: black;
    font-size: 14px;
}
</style>
