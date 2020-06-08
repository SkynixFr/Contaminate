import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
    beforeEnter(to, from, next) {
      if(store.state.isConnected) return next(); else next("/login");
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login.vue"),
    beforeRouteEnter(to, from, next) {
      if(store.state.isConnected) return next("/"); else next();
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/Register.vue"),
    beforeRouteEnter(to, from, next) {
      if(store.state.isConnected) return next("/"); else next("/register");
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
