const webpack = require('webpack')

const PROD = JSON.parse(process.env.PROD_ENV || '0')

module.exports = {
  entry: './src/app.ts',
  output: {
    path: './dist/',
    filename: 'bundle.js',
    publicPath: ''
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
}
