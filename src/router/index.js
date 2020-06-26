import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/game",
    name: "Game",
    component: () => import("@/views/Game.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    props: true,
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () => import("@/views/Profil.vue"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.authToken) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
