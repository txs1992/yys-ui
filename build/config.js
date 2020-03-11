import babel from "rollup-plugin-babel";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "packages/sidebar/src/index.vue",
  // input: "test.js",
  output: {
    file: "dist/yys-ui.min.js",
    // file: "bundle.js",
    format: "iife",
    name: "YysUI"
  },
  external: ["vue"],
  plugins: [
    resolve({
      browser: true
    }),
    babel({
      babelrc: true,
      exclude: "node_modules/**"
    }),
    commonjs(),
    typescript(),
    vue(),
    // terser(),
    postcss({
      extensions: [".css", ".scss"]
    })
  ]
};
