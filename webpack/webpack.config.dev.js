const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { appPath, distPath, publicPath, appHtml, stylesPath } = require('./paths');

const devServerPort = 3000;

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?/',
    'webpack/hot/only-dev-server',
    appPath
  ],
  output: {
    path: distPath,
    filename: 'js/bundle.js',
    publicPath
  },
  devServer: {
    hot: true,
    contentBase: distPath,
    compress: true,
    port: devServerPort,
    stats: 'errors-only',
    publicPath,
    overlay: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'postcss-loader?config=webpack/postcss.config.js']
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: appHtml
    }),
    new ExtractTextPlugin(stylesPath)
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  performance: {
    hints: false
  }
};
