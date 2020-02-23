 const path = require('path');
 const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const Copy = require('copy-webpack-plugin')


 module.exports = {
   entry: {
     app: path.resolve(__dirname, '../src/main.js')
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'ezdo.js',
       filename: 'index.html',
       template: path.resolve(__dirname, '../public/index.html'),
       minify: { 
        removeComments: true, 
        collapseWhitespace: true, 
        minifyCSS: true
      }
     }),
     new Copy([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
        ignore: ['index.html']
      }
    ])
   ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, '../dist')
   },
   module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
 };