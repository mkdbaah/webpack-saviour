const currentTask = process.env.npm_lifecycle_event

let config = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
}

if (currentTask == "dev") {
  config.devServer = {
    contentBase: "./dist",
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
