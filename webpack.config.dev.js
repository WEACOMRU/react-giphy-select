const { resolve } = require('path');
const webpack = require('webpack');

const docsDir = resolve(__dirname, 'docs');

module.exports = {
  context: docsDir,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: docsDir,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: docsDir,
    publicPath: '/',
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
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]___[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
        }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
