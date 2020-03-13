const rollup = require("rollup");
const vue = require("rollup-plugin-vue");
const babel = require("rollup-plugin-babel");
const postcss = require("rollup-plugin-postcss");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const typescript = require("rollup-plugin-typescript");
const terser = require("rollup-plugin-terser").terser;

const buildPlugins = [
  vue(),
  resolve({
    browser: true
  }),
  babel({
    babelrc: true,
    exclude: "node_modules/**"
  }),
  commonjs(),
  typescript(),
  postcss({
    extensions: [".css", ".scss"]
  }),
  terser()
];

const inputFileList = [
  {
    path: "packages/sidebar/index.ts",
    name: "YysSidebar",
    bundleNmae: "sidebar"
  },
  {
    path: "packages/yys-ui/index.ts",
    name: "YysUI",
    bundleNmae: "yys-ui"
  }
];

async function build(inputOptions, outputOptions) {
  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);
}

inputFileList.forEach(item => {
  const inputOptions = {
    input: item.path,
    external: ["vue"],
    plugins: buildPlugins.slice(0, 6)
  };

  const outputOptions = {
    name: item.name,
    file: `dist/${item.bundleNmae}.js`,
    format: "umd"
  };

  const minInputOptions = { ...inputOptions, plugins: buildPlugins };
  const minOutputOptions = {
    ...outputOptions,
    file: `dist/${item.bundleNmae}.min.js`
  };

  build(inputOptions, outputOptions);
  build(minInputOptions, minOutputOptions);
});
