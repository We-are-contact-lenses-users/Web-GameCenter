import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./firebase.js";

Vue.config.productionTip = false;
Vue.directive("button", function (el) {
  el.style.background = "black";
  el.style.color = "white";
  el.style.borderRadius = "5px";
  el.style.padding = "10px 40px";
  el.style.border = "none";
  el.style.boxShadow = "0 3px 3px rgba(0,0,0,0.7)";
  el.style.margin = "70px 20px";
  el.style.cursor = "pointer";
  el.style.width = "250px"
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
