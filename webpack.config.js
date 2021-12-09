const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = function (env, argv) {
  return {
    context: __dirname,
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      fallback: {
        vm: false,
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "",
      chunkFilename: "main.js",
    },
    devServer: {
      host: "localhost",
      port: "3000",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CleanWebpackPlugin(),
      new FaviconsWebpackPlugin({
        logo: "favicon.ico",
        favicons: {
          appName: "my-app",
          appDescription: "My awesome App",
          icons: {
            coast: false,
            yandex: false,
          },
        },
      }),
    ],
  };
};
