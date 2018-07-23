const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const SassLintPlugin = require('sass-lint-webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    products: './src/products.js',
    themes: './src/themes.js',
    teams: './src/teams.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: './[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      // {
      //     test: /\.scss$/,
      //     use: [
      //       'style-loader',
      //       'css-loader',
      //       'sass-loader'
      //     ]

      // },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template:'./src/index.html'
    // }),
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
      chunks: ['index'],
      filename: './index.html' //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      template: './src/views/products.html',
      chunks: ['products'],
      filename: './products.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/views/themes.html',
      chunks: ['themes'],
      filename: './themes.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/views/teams.html',
      chunks: ['teams'],
      filename: './teams.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
    // ,
    // new SassLintPlugin({
    //   configFile: '.sass-lint.yml',
    //   context: ['inherits from webpack'],
    //   ignoreFiles: [],
    //   ignorePlugins: [],
    //   glob: '**/*.s?(a|c)ss',
    //   quiet: false,
    //   failOnWarning: false,
    //   failOnError: false,
    //   testing: false
    // })
  ]

};
