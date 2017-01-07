var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
    test: /\.js$/,
    loaders: ['babel'], //get babel to work with webpack
    include: path.join(__dirname, 'src')
  }]
  }
};