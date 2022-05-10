const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LeaderBoard',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
     clean: true,
     publicPath: '/',
  },
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
     {
       test: /\.(csv|tsv)$/i,
       use: ['csv-loader'],
     },
     {
       test: /\.xml$/i,
       use: ['xml-loader'],
     },
    ],
  },
};