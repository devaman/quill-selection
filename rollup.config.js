import localResolve from "rollup-plugin-local-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "src/quill.selection.js",
    output: [
      {
        file: "docs/quill.selection.js",
        format: "iife",
        name: "quillSelection",
        plugins: [], //[terser()]
        globals: {
          quill: "Quill"
        }
      },
      {
        file: "dist/quill.selection.js",
        format: "iife",
        name: "quillSelection",
        plugins: [], //[terser()]
        globals: {
          quill: "Quill"
        }
      }
    ],
    external: ["quill"],
    plugins: [
      localResolve(),
      babel({
        exclude: ["node_modules/**"]
      }),
      postcss({
        extract: true,
        minimize: true
      })
    ]
  },
  {
    input: "src/quill.selection.js",
    output: [
      {
        file: pkg.main,
        format: "cjs"
      },
      {
        file: pkg.module,
        format: "es"
      }
    ],
    external: ["quill"],
    plugins: [
      localResolve(),
      babel({
        exclude: ["node_modules/**"]
      }),
      postcss({
        extract: "quill.selection.css"
      })
    ]
  }
];
