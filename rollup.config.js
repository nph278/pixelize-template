import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  entry: "src/index.js",
  dest: "public/build/main.js",
  format: "iife",
  sourceMap: "inline",
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
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
  ],
};
