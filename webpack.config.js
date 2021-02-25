const currentTask = process.env.npm_lifecycle_event
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let target = "web"

let config = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
}

if (currentTask == "start") {
  config.devServer = {
    contentBase: "./dist",
    hot: true,
  }
  config.mode = "development"
  config.target = "web"
}

if (currentTask == "build") {
  config.mode = "production"
  config.target = "browserslist"
}

if (currentTask == "build-dev") {
  config.mode = ""
}

module.exports = config
