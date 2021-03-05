import Vue from "vue";
import axios from 'axios';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
const base = axios.create({
  baseURL: "https://<Tellez-y-la-bd-?>/api"
})
Vue.prototype.$http = base;
axios.defaults.baseURL = 'https://<Tellez-y-la-bd-?>/api/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
