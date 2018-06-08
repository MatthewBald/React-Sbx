const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'React Seed',
  template: './src/index.html',
});

const providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default'],
});

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: {
    main: './src/index.jsx'
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: true,
            minimize: true,
          },
        }],
      },
    ],
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    providePlugin,
  ],
};
