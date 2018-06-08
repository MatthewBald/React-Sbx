const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const uglifyJsPlugin = new UglifyJsPlugin({
  test: /\.(js|jsx)$/,
  sourceMap: true,
});

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    uglifyJsPlugin,
    definePlugin
  ]
});
