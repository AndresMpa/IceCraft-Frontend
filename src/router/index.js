import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [

  // Login

  {
    //Vista
    path: "/login",
    name: "Login",
    component: () => import("../components/auth/TheLogin.vue"),
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
        path: "/main",
        name: "HelloWorld",
        // Lazy loader
        component: () => import("../components/HelloWorld.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ],
  },

  //Administration

  {
    path: '/administration',
    name: 'Administration',
    component: () => import('../views/Administration.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: '/administracion',
        name: 'AdministrationMainContent',
        component: () => import('../components/AdministrationMainContent.vue'),
      },
      //{
        //path: '/<Ruta de enlace>',
        //name: '<El mismo nombre con la primera letra en mayuscula>',
        //component: () => import('../components/<Ruta del componente>'),
      //},
      {
        path: '/categoria',
        name: 'Category',
        component: () => import('../components/CRUDCategory.vue'),
      },
      {
        path: '/articulo',
        name: 'Product',
        /** Modificar el CRUD al de articulos */
        component: () => import('../components/CRUDProduct.vue'),
      },
      {
        path: '/venta',
        name: 'Sell',
        /** Modificar el CRUD al de ventas */
        component: () => import('../components/CRUDSell.vue'),
      },
      {
        path: '/cliente',
        name: 'Client',
        /** Modificar el CRUD al de ventas */
        component: () => import('../components/CRUDClient.vue'),
      },
      {
        path: '/usuario',
        name: 'User',
        /** Modificar el CRUD al de ventas */
        component: () => import('../components/CRUDUser.vue'),
      },
    ]
  }
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
