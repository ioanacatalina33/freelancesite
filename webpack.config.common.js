const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      title: "Minimum-Viable",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".js", ".jsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader", "eslint-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: ["ts-loader", "babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ["ts-loader", "babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name]-[hash].[ext]",
          },
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.(jpe?g|gif|png)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 20000,
              name: "img/[name]-[hash].[ext]",
              //   esModule: false  // fix for require(...)
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: false, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: "file-loader",
          options: {
            name: "img/svg/[name]-[hash].[ext]",
          },
        },
      },
    ],
  },
};
