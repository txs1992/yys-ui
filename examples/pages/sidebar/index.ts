import { Vue, Component } from "vue-property-decorator";
import YysSidebar from "../../../dist/yys-ui";

@Component({
  components: {
    YysSidebar
  }
})
export default class App extends Vue {
  name: string = "Sidebar Page";
  visible: boolean = true;
}
