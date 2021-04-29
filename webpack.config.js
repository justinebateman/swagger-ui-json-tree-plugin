const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    "swagger-ui-json-tree-plugin": "./src/index.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js?$/,
        oneOf: [
          {
            exclude: /node_modules/,
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "[name].js",
    library: "jsonTreePlugin",
  },
  devServer: {
    contentBase: "./demo",
  },
};
