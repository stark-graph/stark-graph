var status = process.env.NODE_ENV; //taken from script so we don't have to flip mode when using development/production
var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  // devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
  },
  mode: status,

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by babel-loader
      { test: /.tsx?$/, exclude: /node-modules/, use: 'babel-loader' },
      { test: /.jsx?$/, exclude: /node-modules/, use: 'babel-loader' },
      { test: /.js?$/, exclude: /node-modules/, use: 'babel-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: 'pre', test: /.js$/, exclude: /node-modules/, loader: 'source-map-loader' },
    ],
  },
};
