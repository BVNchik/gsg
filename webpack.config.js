/* eslint-disable @typescript-eslint/no-var-requires */
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

module.exports = () => {
  console.log("Webpack is running");
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
        components: path.resolve(__dirname, "src/components/"),
        pages: path.resolve(__dirname, "src/pages/"),
        Graphql: path.resolve(__dirname, "src/graphql/"),
        lib: path.resolve(__dirname, "src/lib/"),
        utils: path.resolve(__dirname, "src/utils/"),
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
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "static/media/[name].[contenthash].[ext]",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: "removeViewBox",
                      active: false,
                    },
                  ],
                },
              },
            },
            {
              loader: "file-loader",
              options: {
                name: "static/media/[name].[hash:8].[ext]",
              },
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
