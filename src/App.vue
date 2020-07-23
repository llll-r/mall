<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>
<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar"
export default {
  name:"APP",
  components:{
    MainTabBar
  }
}
</script>
<style lang="scss">
@import url("./assets/css/base.css");
</style>
