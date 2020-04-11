const CopyWebpackPlugin = require("copy-webpack-plugin");
const glob = require("glob");

module.exports = {
  target: "web",
  entry: glob.sync("./src/**/*.tsx"),
  output: {
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    https: false,
    port: 4000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.html$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [new CopyWebpackPlugin([{ from: "**/*.html", context: "src" }])]
};