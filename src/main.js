import Vue from "vue";
import axios from 'axios';
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
const base = axios.create({
  //Esto sale de heroku
  //baseURL: "https://<Tellez-y-la-bd-?>/api"
  baseURL: "http://localhost:3000"
})
Vue.prototype.$http = base;
//Esto sale de heroku
//axios.defaults.baseURL = 'https://<Tellez-y-la-bd-?>/api/';
axios.defaults.baseURL = "http://localhost:3000";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
