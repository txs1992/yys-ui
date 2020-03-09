import { Vue, Component } from "vue-property-decorator";
import YysSidebar from "@packages/sidebar/src/index.vue";

@Component({
  components: {
    YysSidebar
  }
})
export default class App extends Vue {
  name: string = "Sidebar Page";
  visible: boolean = true;
}
