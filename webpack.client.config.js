const path = require('path');
const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || '/';
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
      { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract({ fallback: "vue-style-loader", use: 'css-loader!sass-loader' }) },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: "vue-style-loader", use: 'css-loader' }) },
      { test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            })
          }
        } 
      },
      { test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/, 
        exclude: /favicon\.png$/, 
        loader: 'url-loader',
        query: {
          limit: 20000,
          name: 'assets/[name]-[hash:5].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style-[hash:5].css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
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
