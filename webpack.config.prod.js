const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: './index.js',
  externals: {
    react: {
      global: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  output: {
    filename: 'index.js',
    library: 'GiphySelect',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          }, {
            loader: 'postcss-loader',
          }],
        }),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
