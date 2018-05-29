//require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var env = process.env.NODE_ENV || 'development';

var config = {
  devtool:env === 'development' ? 'eval' : 'nosources-source-map',
  entry: {
    bundle: ['babel-polyfill', path.resolve(__dirname, 'sources', 'index.js')],    
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
     
    }), 
    new UglifyJSPlugin({
      sourceMap: false,
      minimize: false,
     compress: false,
     debug: true
     })

  ],
  resolve: {
    modules: [
      path.join(__dirname, 'sources'),
      'node_modules',
    ]
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,       
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')()
              ]
            }
          }
        ],
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')()
              ]
            }
          }
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
            name: 'styles/resources/[name].[ext]',
        }
    }
    
    ]
  }
};



module.exports = config;
