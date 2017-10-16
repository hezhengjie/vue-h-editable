var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    'build': ['./demo/main.js']
  },
  output: {
    path: path.resolve(__dirname, './demo'),
    publicPath: './',
    chunkFilename: '[name].[chunkhash].js',
    filename: 'build.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader')
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'url-loader?limit=10240&name=images/[name].[hash:4].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css", {
        disable: true,
        allChunks: true
    })
  ],
  devServer: {
    historyApiFallback: false,
    noInfo: true,
    hot: true,
    contentBase: './demo/',
    publicPath: '/',
    stats:{
      colors: true
    }
  },
  devtool: '#source-map'
}
