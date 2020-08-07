<template>
  <div id="detailNav">
    <nav-bar>
      <div slot="left" class="nav-left" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="nav-center">
        <div
          v-for="( item, index) in titles"
          :key="item"
          @click="clickItem(index)"
          :class="{active:index==currentIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar";



export default {
  data() {
    return {
      titles: ["商品", "参数", "详情", "推荐"],
      currentIndex: 0,
    };
  },
  created(){

  },
  activated() {},
  components: {
    NavBar,
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
    },
    backClick(){
        this.$router.back()
    }
  },
};
</script>
<style>
.nav-center {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.active {
  color: salmon;
  /* border-bottom: 3px solid salmon; */
}
.nav-left {
  width: 45px;
  margin-top: 5px;
  margin-left: 10px;
}
</style>
