import Vue from "vue";
import { YysUIComponent } from "./component";

import { YysSidebar } from "./sidebar";

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

export function install (vue: typeof Vue, options: InstallationOptions): void

/** YysUI component common definition */
export type Component = YysUIComponent

export class Sidebar extends YysSidebar {}
