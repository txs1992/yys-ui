import YysSidebar from "@yys-ui/sidebar";

const components = [YysSidebar];

const install = (Vue: any, opts = {}) => {
  components.forEach((component: any) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { YysSidebar, install };

export default {
  YysSidebar,
  install
};
