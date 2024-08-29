const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MediaQueryPlugin = require('media-query-plugin');
const Dotenv = require('dotenv-webpack');
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
// const isDevelopment = process.env.NODE_ENV !== 'production'


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
      new Dotenv(),
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
   //  new DefinePlugin({
   //    'process.env.PORT': JSON.stringify(process.env.PORT),
   //    'process.env.MONGO_URI': JSON.stringify(process.env.MONGO_URI),
   //    'process.env.API_URL': JSON.stringify(process.env.API_URL)
   //  })
   ]
   // plugins: [
   //    new webpack.DefinePlugin({
   //      'process.env': JSON.stringify(dotenv.parsed),
   //      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
   //    }),
   //  ].filter(Boolean)

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