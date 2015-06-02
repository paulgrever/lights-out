module.exports = {
  entry: "./lights-out.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    loaders: [
      // { test: /\.(handlebars|hbs)$$/, loader: 'handlebars-loader' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
};