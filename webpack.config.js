var status = process.env.NODE_ENV || 'development'; //taken from script so we don't have to flip mode when using development/production
var path = require('path');
const ExtractCSS = new (require('extract-text-webpack-plugin'))('style.css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  // devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.jsx'],
  },
  mode: status,

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by babel-loader
      { test: /.js?$/, exclude: /node-modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ExtractCSS.extract('css-loader') },
      // { test: /.tsx?$/, exclude: /node-modules/, use: 'babel-loader' },
      // { test: /.jsx?$/, exclude: /node-modules/, use: 'babel-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: 'pre', test: /.js$/, exclude: /node-modules/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    ExtractCSS,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
