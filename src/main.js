import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueWow from "vue-wow";
import "./assets/styles/variables.scss";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueWow);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
