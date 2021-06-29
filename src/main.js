import Vue from "vue";
import axios from 'axios';
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
const base = axios.create({
  //Esto sale de heroku
  //baseURL: "https://blooming-fjord-22200.herokuapp.com/api"


  //Esta URL solo será usado mientras corremos las pruebas
  //es necesario hacer deploy a heroku
  baseURL: "http://localhost:3000/api"

})

Vue.prototype.$http = base;
//Esto sale de heroku
axios.defaults.baseURL = "http://localhost:3000/api";

//Esta URL solo será usado mientras corremos las pruebas
//es necesario hacer deploy a heroku
//axios.defaults.baseURL = "https://blooming-fjord-22200.herokuapp.com/api";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
