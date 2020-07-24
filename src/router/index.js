import Vue from 'vue'
import VueRouter from 'vue-router'
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Home = () => import("../views/home/Home.vue")
const Cart = ()=>import( "../views/cart/Cart.vue")
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}
  const routes = [
  {
    path: '',
    redirect:"/home"
    },
    {
    path: '/home',
    component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path: '/category',
      component: Category
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
