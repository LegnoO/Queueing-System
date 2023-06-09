/** @format */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // webpack
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false,
    }),
  ],
  devtool: "hidden-source-map",
};
