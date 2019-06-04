import Vue from "vue";
import VModal from "vue-js-modal";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";

Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
