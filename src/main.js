import Vue from "vue";
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

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
