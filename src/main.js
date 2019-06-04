import Vue from "vue";
import VModal from "vue-js-modal";
import Popover from "vue-js-popover";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";

Vue.use(VueScrollTo);
Vue.use(Popover);
Vue.use(VModal);
Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  duration: 750,
  easing: "linear"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
