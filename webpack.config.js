const currentTask = process.env.npm_lifecycle_event
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let config = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
}

if (currentTask == "build") {
  config.mode = "production"
}

if (currentTask == "build-dev") {
  config.mode = ""
}

module.exports = config
