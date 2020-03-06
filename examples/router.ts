import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("./pages/sidebar/index.vue") }
];

export default new VueRouter({
  routes
});
