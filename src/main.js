import Vue from "vue";
import './plugins/bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import './axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faBars,
  faEnvelope,
  faPhoneSquareAlt,
  faMapMarkerAlt,
  faUsers,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faBars,
  faEnvelope,
  faPhoneSquareAlt,
  faMapMarkerAlt,
  faUsers,
  faFilePdf
);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
