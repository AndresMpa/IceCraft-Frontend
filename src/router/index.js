import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // Login
  {
    //Vista
    path: "/acceso",
    name: "Login",
    component: () => import("../components/auth/TheLogin.vue"),
    meta: {
      public: true,
    },
  },

  // Account
  {
    //Vista
    path: "/cuenta",
    name: "Account",
    component: () => import("../components/auth/TheAccount.vue"),
    meta: {
      public: true,
    },
  },

  // Home
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
        path: "/principal",
        name: "Main",
        // Lazy loader
        component: () => import("../components/LayoutHome.vue"),
        meta: {
          public: true,
        },
      },
    ],
  },

  //Administration
  {
    path: "/administracion",
    name: "Administration",
    component: () => import("../views/Administration.vue"),
    meta: {
      auth: true,
    },
    children: [
      //{
      //path: '/<Ruta de enlace>',
      //name: '<El mismo nombre con la primera letra en mayuscula>',
      //component: () => import('../components/<Ruta del componente>'),
      //},
      {
        path: "/principal",
        name: "AdministrationMainContent",
        component: () => import("../components/AdministrationMainContent.vue"),
      },
      {
        path: "/articulo",
        name: "Product",
        /** Modificar el CRUD al de articulos */
        component: () => import("../components/CRUDProduct.vue"),
      },
      {
        path: "/venta",
        name: "Sell",
        /** Modificar el CRUD al de ventas */
        component: () => import("../components/CRUDSell.vue"),
      },
     // {
        //path: "/cliente",
        //name: "Client",
        //[>* Modificar el CRUD al de ventas <]
        //component: () => import("../components/CRUDClient.vue"),
      //},
      {
        path: "/usuario",
        name: "User",
        /** Modificar el CRUD al de ventas */
        component: () => import("../components/CRUDUser.vue"),
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