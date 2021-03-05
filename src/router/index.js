import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    // Vista
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      public: true,
    },
    // Componentes
    children: [
      {
        path: "/main",
        name: "HelloWorld",
        // Lazy loader
        component: () => import("../components/HelloWorld.vue"),
        meta: {
          public: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.public)) {
    next();
  } else if (store.state.user) {
    if (to.matched.some((record) => record.meta.auth)) {
      console.log(store.state.user);
      next();
    }
  } else {
    next({ name: "Administration" });
  }
});

export default router;
