const path = require("path");
const uglifyJsPlugIn = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    inline: true,
    port: 8888,
  },
  plugins: [new uglifyJsPlugIn()],
});
