const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.common.js");
module.exports = merge(common, {
   devtool: "inline-source-map",
   mode: "development",
   devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 8888,
   },
});
