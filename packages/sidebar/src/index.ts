import { Vue, Component, Prop, Watch } from "vue-property-decorator";

export declare class YysSidebar extends Vue {
  // Determine whether to expand
  visible: boolean;

  // width
  width: string;

  // Unfolding direction
  placement: string;
}

const NAME = "yys-sidebar";
const DEFAULT_ICON = "triangle-";
@Component({
  name: NAME
})
export default class Sidebar extends Vue {
  @Prop(Boolean) readonly visible!: boolean;
  @Prop({ type: String, default: "300px" }) readonly width!: boolean;
  @Prop({ type: String, default: "left" }) readonly placement!: boolean;

  contentEL: any = null;
  parentPosition: string = "";

  get sidebarVisible() {
    return this.visible;
  }

  set sidebarVisible(value: any) {
    this.$emit("update:visible", value);
  }

  get iconClass() {
    return this.sidebarVisible ? `${DEFAULT_ICON}left` : `${DEFAULT_ICON}right`;
  }

  get fadeClass() {
    return this.sidebarVisible ? "show" : "hide";
  }

  @Watch("sidebarVisible")
  handleSidebarVisibleChange(visible: boolean) {
    if (this.contentEL) {
      if (visible) {
        this.contentEL.style.width = this.width;
      } else {
        this.contentEL.style.width = 0;
      }
    }
  }

  mounted() {
    const el: any = this.$el.querySelector(".content-wrapper");
    const parentEl: any = this.$el.parentElement;
    if (parentEl) {
      this.parentPosition = parentEl.style.position;
      parentEl.style.position = "relative";
    }
    const content = el.querySelector(".content");
    if (el && content) {
      this.contentEL = el;
      el.style.width = this.width;
      content.style.width = this.width;
    }
  }

  beforeDestory() {
    const parentEl: any = this.$el.parentElement;
    parentEl.style.position = this.parentPosition;
  }

  install(Vue: any) {
    Vue.Component(Sidebar.name, Sidebar);
  }
}
