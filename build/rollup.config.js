import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
// import json from '@rollup/plugin-json';
// import { nodeResolve } from '@rollup/plugin-node-resolve'; // Includes external dependencies
export default {
  input: 'src/wrapper.js', // Path relative to package.json
  output: {
    name: 'AletsTestComponent',
    exports: 'named',
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    // json(),
    // nodeResolve(),
    buble({ transforms: { asyncAwait: false } }), // Transpile to ES5
  ],
  external: [ 'axios']
};
