import { Vue, Component } from "vue-property-decorator";
import YysSidebar from "@packages/sidebar/src/index.vue";

// import YysSidebar from "../../../dist/yys-ui.min.js";

console.log(YysSidebar)
@Component({
  components: {
    YysSidebar
  }
})
export default class PageSidebar extends Vue {
  name: string = "Sidebar Page";
  visible: boolean = true;
}
