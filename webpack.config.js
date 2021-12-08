const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: '',
    filename: "bundle.js"
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html'
  })]
};