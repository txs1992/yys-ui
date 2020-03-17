import Vue from "vue";

import { YysSidebar } from "./sidebar";

/** The version of element-ui */
export const version: string;

export interface InstallationOptions {
  locale: any;
  i18n: any;
  size: string;
}

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void;

export { YysSidebar };
