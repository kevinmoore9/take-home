var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./root.js",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js",

  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015","react"]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
}
