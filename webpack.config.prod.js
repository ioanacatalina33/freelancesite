const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(common, {
   plugins: [
      new webpack.DefinePlugin({
         "process.env": {
            NODE_ENV: JSON.stringify("production"),
         },
      }),
      new UglifyJSPlugin(),
   ],
   mode: "production",
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
});
