import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    typescript(),
    babel({
      extensions: [".js"],
      exclude: ["node_modules/@babel/**"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "> 0.25%, not dead",
          },
        ],
      ],
    }),
    production && terser(),
  ],
};
