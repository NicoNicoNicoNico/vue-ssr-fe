const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
  target: 'node',
  entry: './src/entry-server.js',
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [".js",".ts"],
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
};
