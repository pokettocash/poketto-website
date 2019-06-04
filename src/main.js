import Vue from "vue";
import VModal from "vue-js-modal";
import Popover from "vue-js-popover";
import VueClipboards from "vue-clipboards";
import vueSmoothScroll from "vue2-smooth-scroll";
import VueScrollReveal from "vue-scroll-reveal";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";

Vue.use(VueScrollReveal);
Vue.use(vueSmoothScroll);
Vue.use(VueClipboards);
Vue.use(Popover);
Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
