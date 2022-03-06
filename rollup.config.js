import ts from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import path from "path";
import json from "@rollup/plugin-json";
import { uglify } from "rollup-plugin-uglify";
const packageJson = require("./package.json");

module.exports = [
    {
        input: path.resolve(__dirname, "src/index.ts"),
        output: {
            file: path.resolve(__dirname, "dist/index.js"),
            format: "cjs",
        },
        plugins: [
            resolve(),
            commonjs({
                include: "node_modules/**",
            }),
            babel({
                babelrc: true,
                exclude: "node_modules/**",
            }),
            ts({
                tsconfig: path.resolve(__dirname, "./tsconfig.json"),
                extensions: [".ts"],
            }),
            json(),
            uglify(),
        ],
        external: Object.keys(packageJson.dependencies || {}),
    },
    {
        input: path.resolve(__dirname, "src/babel-plugin-dynamic-import.js"),
        output: {
            file: path.resolve(__dirname, "dist/babel-plugin-dynamic-import.js"),
            format: "cjs",
        },
        plugins: [
            resolve(),
            commonjs({
                include: "node_modules/**",
            }),
            babel({
                babelrc: true,
                exclude: "node_modules/**",
            }),
            json(),
            uglify(),
        ],
    },
];
