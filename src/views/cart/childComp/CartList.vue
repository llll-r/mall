<template>
  <div class="cart_list">
    <scroll class="content" ref="scroll">
      <ul>
        <li v-for="(item,index) in cartList" :key="index" class="item_li">
          <div class="check_button">
            <check-button :isChecked="item.checked" @click.native="changeCheck(index)"></check-button>
            <!-- <input type="checkbox" name="" id="" checked> -->
          </div>
          <div class="pro_message">
            <img :src="item.image" alt />
            X{{item.count}} ---- {{item.price}}
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import Scroll from "../../../components/common/scroll/Scroll";
import CheckButton from "./CheckButton";
export default {
  name: "CartList",
  data() {
    return {};
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
    CheckButton,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    changeCheck(index) {
  
      this.cartList[index].checked = !this.cartList[index].checked;
      
    },
  },
};
</script>
<style scoped>
.content {
  height: 100%;
  overflow: hidden;
}
.cart_list {
  height: calc(100vh - 44px - 49px - 30px);
}
ul {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
.item_li {
  display: flex;
}
.checkbox {
  width: 15px;
}
.check_button {
  margin-right: 10px;
}
.pro_message {
  flex: 1;
}
img {
  width: 70px;
}
</style>
