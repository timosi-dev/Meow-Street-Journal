const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
   mode:'development',
   entry: { 
      index: './src/index.js'
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
   },
   devServer: {
      static: {
         directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open:true,
      hot: true,
      compress: true,
      historyApiFallback: true,
   },
   module: {
      rules: [
         {
            test: /\.html$/,
            use: {
              loader: "html-loader"
            }
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 
                  'css-loader',
                  MediaQueryPlugin.loader,
            ],

         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin ({
         title: 'Webpack App',
         filename: 'index.html',
         template: './src/index.html',
         // inject: true,
         // chunks: ['index']
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
         patterns: [
           { from: "img", to: "img" }
         ],
       }),
       new MediaQueryPlugin({
         include: [
             'style'
         ],
         queries: {
             'print, screen and (min-width: 768px)': 'desktop'
         }
     }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
     // inject: true,
      chunks: ['index'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article.html',
     // inject: true,
      chunks: ['index'],
      filename: 'article.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/blog.html',
     // inject: true,
      chunks: ['index'],
      filename: 'blog.html'
    })
   ],
   // resolve: {
   //    symlinks: false,
   //    extensions:['.js','.jsx','.html','.css'],
   //    fallback: { 
   //          "url": false,
   //          "path" : false,
   //          "stream": false,
   //          "buffer": false,
   //          "util": false,
   //          "querystring": false,
   //          "http": false,
   //          "crypto": false,
   //          "zlib": false,
   //          "buffer": false,
   //          "fs" : false,
   //          "net" : false,
   //          "async_hooks": false
   //       }
   //     }
}