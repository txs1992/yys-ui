import { Vue, Component } from "vue-property-decorator";
// import YysSidebar from "@packages/sidebar/src/index.vue";
// import YysUi from "@packages/yys-ui/index.ts";

import YysUi from "../../../dist/yys-ui.js";

// import YysSidebar from "../../../dist/sidebar.js";
console.log(YysUi)
Vue.use(YysUi);
// console.log(Vue.use(YysSidebar));
// console.log(new YysSidebar());
@Component({
  // components: {
  //   "YysUi": YysUi
  // }
})
export default class PageSidebar extends Vue {
  name: string = "Sidebar Page";
  visible: boolean = true;

  mounted() {
    console.log(this)
  }
}
