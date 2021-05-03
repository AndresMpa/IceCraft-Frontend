import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // Login
  {
    //Vista
    path: "/",
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
    path: "/home",
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
        component: () => import("../components/LayoutMain.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/noticias",
        name: "News",
        // Lazy loader
        component: () => import("../components/LayoutNew.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/libros",
        name: "Book",
        // Lazy loader
        component: () => import("../components/LayoutBook.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/reservas",
        name: "Reserve",
        // Lazy loader
        component: () => import("../components/LayoutReserve.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/amigos",
        name: "Friend",
        // Lazy loader
        component: () => import("../components/LayoutFriend.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/chats",
        name: "Chat",
        // Lazy loader
        component: () => import("../components/LayoutChat.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/administrar-perfil",
        name: "Profile",
        // Lazy loader
        component: () => import("../components/LayoutUser.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/historial-de-compras",
        name: "Purchase",
        // Lazy loader
        component: () => import("../components/LayoutPurchase.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/creadores",
        name: "Creator",
        // Lazy loader
        component: () => import("../components/LayoutCreator.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/informacion-de-contacto",
        name: "Info",
        // Lazy loader
        component: () => import("../components/LayoutInfo.vue"),
        meta: {
          public: true,
        },
      },
    ],
  },

  //Administration
  {
    path: "/administracion",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: {
      //auth: true,
      public: true,
    },
    children: [
      {
        path: "/principal",
        name: "AdminMain",
        component: () => import("../components/AdminMain.vue"),
      },
      {
        path: "/stock",
        name: "Stock",
        component: () => import("../components/CRUDStock.vue"),
      },
      {
        path: "/articulo",
        name: "Product",
        component: () => import("../components/CRUDProduct.vue"),
      },
      {
        path: "/categorias",
        name: "Category",
        component: () => import("../components/CRUDCategory.vue"),
      },
      {
        path: "/venta",
        name: "Sell",
        component: () => import("../components/CRUDSell.vue"),
      },
      {
        path: "/cliente",
        name: "Client",
        component: () => import("../components/CRUDClient.vue"),
      },
      {
        path: "/usuario",
        name: "User",
        component: () => import("../components/CRUDUser.vue"),
      },
      {
        path: "/",
        name: "Root",
        component: () => import("../components/CRUDRoot.vue")
      }
    ],
  },
];

// URL del router
const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: "history",
  routes,
});

// Permisos
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
