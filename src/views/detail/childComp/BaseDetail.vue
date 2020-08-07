<template>
  <div id="base-detail">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="price">
      <span class="new-price">{{goodsInfo.newPrice}}</span>
      <span class="old-price">{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="columns"> 
    <div class="columns-item"  v-for="item in goodsInfo.columns" :key="item">
        <!-- <div>{{item}}</div> -->{{item}}
        </div>
      </div>
    <div class="services">
        <ul class="services-ul"> 
            <li v-for="item in goodsInfo.services" :key="item.name">
               <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
     
  </div>
 
</template>
<script>
export default {
  name: "BaseDetail",
  data() {
    return {
      //   goodsInfo :{}
    };
  },
  activated() {},
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.base-detail{
    /* margin-left: 10px; */
}
.title {
  font-size: 16px;
  margin: 10px;
}
.new-price {
  color: rgb(221, 100, 120);
  padding-left: 10px;
}
.old-price {
  text-decoration-line: line-through;
  font-size: 13px;
  padding: 0 5px;
}
.price {
  position: relative;
}
.discount {
  /* display: inline-block; */
  /* width: 50px; */
  /* height: 15px; */
  background-color: pink;
  border-radius: 5px;
  font-size: 12px;
  position: absolute;
  left: 35%;
  bottom: 10%;
  text-align: center;
  /* margin-bottom: 10px; */
}
.columns {
  width: 95%;
  display: flex;
  /* justify-content: center; */
  font-size: 12px;
  margin-top: 10px;
  margin-left: 5px;
  color: rgb(151, 151, 151);
  padding-bottom: 3px;
  border-bottom: 1px solid #ccc;
 
}
.columns-item {
    /* justify-content: space-evenly; */
  flex: 1;
}
.services{
    border-bottom: 3px solid rgb(207, 205, 205);
}
.services-ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    justify-content:space-between;
    align-content: space-between;
    padding-left: 0;
}
.services-ul li{
    /* width: 15px; */
    flex: 1;
}
.services-ul li img{
    width: 10px;
}
.services-ul li span{
    font-size: 10px;
}
</style>
