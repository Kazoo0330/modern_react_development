module.exports = {
  entry: {
    app: "./src/index.jsx"
  },
  output: {
    path: __dirname + '/dist/js',
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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