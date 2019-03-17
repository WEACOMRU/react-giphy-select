const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const reactHotLoader = require('react-hot-loader/babel');

const docsDir = resolve(__dirname, 'docs');
const docsDistDir = resolve(__dirname, 'docs-dist');

const common = {
  context: docsDir,
  entry: [
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { modules: false }],
              'stage-0',
              'react',
            ],
            plugins: [reactHotLoader],
            babelrc: false,
          },
        }],
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
            localIdentName: '[path][name]__[local]___[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
        }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    alias: {
      GiphySelect: resolve(__dirname, 'src'),
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(common, {
    output: {
      path: docsDistDir,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyPlugin([
        {
          from: resolve(docsDir, 'index.html'),
          to: resolve(docsDistDir, 'index.html')
        }
      ]),
    ],
  });
} else {
  module.exports = merge(common, {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],
    output: {
      path: docsDir,
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      contentBase: docsDir,
      publicPath: '/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}
