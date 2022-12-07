"use strict";

const path = require("path");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

module.exports = () => {
  console.log("Webpack is running", { test: process.env });
  return {
    mode: "development",
    devServer: {
      hot: true,
      port: parseInt(process.env.PORT) || 3004,
      historyApiFallback: true,
      compress: true,
      allowedHosts: [".localhost"],
      static: {
        directory: path.resolve(__dirname, "static"),
      },
    },
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    resolve: {
      modules: [path.join(__dirname, "src"), "node_modules"],
      alias: {
        react: path.join(__dirname, "node_modules", "react"),
      },
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: [
              require.resolve("react-refresh/babel"), // only for dev
            ].filter(Boolean),
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        inject: true,
        template: path.resolve(__dirname, "public/index.html"),
      }),
      new Dotenv({ systemvars: true }),
      new ReactRefreshWebpackPlugin(), // only for dev
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "static/favicons/*.svg"),
            to: path.resolve(__dirname, "build"),
            context: "static/favicons",
          },
          {
            from: path.resolve(__dirname, "static/favicons/*.png"),
            to: path.resolve(__dirname, "build"),
            context: "static/favicons",
          },
          {
            from: path.resolve(__dirname, "public/*.json"),
            to: path.resolve(__dirname, "build"),
            context: "public",
          },
          {
            from: path.resolve(__dirname, "public/*.ico"),
            to: path.resolve(__dirname, "build"),
            context: "public",
          },
        ],
      }),
    ],
  };
};
