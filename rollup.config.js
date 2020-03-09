import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript";
// import { terser } from "rollup-plugin-terser";
// packages/yys-ui/src/index.ts
export default {
  input: "packages/sidebar/src/index.vue",
  output: {
    file: "dist/yys-ui.js",
    format: "umd",
    name: "YysUI"
  },
  plugins: [vue(), typescript()]
};
