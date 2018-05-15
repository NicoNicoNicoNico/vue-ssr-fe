const path = require('path');
const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/entry-client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'client-bundle.[chunkhash].js'
  },
  resolve: {
    extensions: [".js",".ts"],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/, exclude: /favicon\.png$/, use: ['url-loader'] }
    ]
  },
  devServer: {
    contentBase: "/",//本地服务器所加载的页面所在的目录
    // historyApiFallback: true,//不跳转
    historyApiFallback: {
      disableDotRule: true
    },
    inline: true//实时刷新
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './webpack.tmpl.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new CleanWebpackPlugin('dist/client-bundle.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new VueSSRClientPlugin()
  ]
};
