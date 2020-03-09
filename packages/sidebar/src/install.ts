import { Vue } from "vue-property-decorator";
import YysSidebar from "./index.vue";

export default class {
  install() {
    Vue.component(YysSidebar.name, YysSidebar);
  }
}
