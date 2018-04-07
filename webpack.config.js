const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/render.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
  },
  externals: {
    vue: 'vue',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ]
  }
};

module.exports = config;