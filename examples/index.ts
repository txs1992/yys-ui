import Vue from "vue";
import App from "./app.vue";
import router from "./router";
// import YysUi from "@packages/yys-ui/index.ts";
import Sidebar from "@packages/sidebar/index.ts";

console.log(Sidebar)
Vue.use(Sidebar);

export default new Vue({
  el: "#app",
  router,
  render: (h: any) => h(App)
});
