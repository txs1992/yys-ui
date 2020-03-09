import Vue from "vue";
import Sidebar from "@yys-ui/sidebar";

const components: any[] = [Sidebar];

function install() {
  components.forEach(cpt => cpt.install(Vue));
}

export class YysUi extends Vue {
  install: any = install;
}
