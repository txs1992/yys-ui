import { Vue, Component } from "vue-property-decorator";

@Component
export default class PageSidebar extends Vue {
  name: string = "Sidebar Page";
  visible: boolean = true;

  mounted() {}
}
