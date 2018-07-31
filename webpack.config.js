module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: __dirname + '/dist/js',
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist',
    port: 8080,
    publicPath: '/js/'
  }
}