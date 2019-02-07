const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  output: {
    // We need to set the globalObject to "this" in order to let webpack dev server's hot reload
    // work with worker-loader. Somehow, it throws a "window is not defined error" that is solved
    // by setting globalObject to "this". https://github.com/webpack/webpack/issues/6642
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // Tried to use eslint-loader, but somehow it throws errors on the redwood.worker.js script
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.worker\.js$/,
        use: [{ loader: "worker-loader" }]
      }
    ]
  },
  plugins: [htmlPlugin]
};
