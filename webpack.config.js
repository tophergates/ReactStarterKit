const webpack           = require('webpack');
const { resolve }       = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-promise'
];

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    bundle: './index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/[name].[hash].js',
    chunkFilename: './js/[name].chunk.js'
  },
  module: {
    rules: [
      { use: 'babel-loader', exclude: /node_modules/, test: /\.js$/ },
      { use: 'file-loader', test: /\.(woff2?|ttf|eot|svg)$/ },
      //{ use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], test: /\.(css|scss|sass)$/ },

      /* Uncomment the line above and comment out the line below if you'd rather
         not output only one css file. You will also need to comment/remove the
         ExtractTextPlugin in the plugins section, the constant ExtractTextPlugin
         at the top of the webpack configuration file, and if you do not plan to
         use the extract-text-webpack-plugin then you can also:

         npm uninstall -D extract-text-webpack-plugin to remove the dependency.
      */

      {use: ExtractTextPlugin.extract({ use: ['css-loader', 'postcss-loader', 'sass-loader'] }), test: /\.(css|scss|sass)$/ },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './templates/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('./css/style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
};
