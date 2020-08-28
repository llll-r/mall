import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  cartList:[]
  },
  mutations: {
    addCounter(State, payload) {
      payload.count++;
    },
    addCart(state, payload) {
      payload.checked =true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)
        if (oldProduct) {
          // let oldProduct = state.cartList[index]
          context.commit("addCounter", oldProduct)
          resolve("当前的数量加1")
        } else {
          payload.count = 1
          // context.cartList.push(payload)
          context.commit("addCart", payload)
          resolve("添加了新的商品")
        }
        })
    }
  },
  modules: {
  }
})
export default store