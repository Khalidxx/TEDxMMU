const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: paths.JS + '/index.js',
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  // specifiy plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    //new ExtractTextPlugin('style.bundle.css'),
    new webpack.HotModuleReplacementPlugin(), // hot loading plugin
  ],
  // Loaders configuration
  // use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     use: 'css-loader',
      //   }),
      // }
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            }, 
            {
                loader: "css-loader",
                options: {
                    modules: true
                }
            }, 
            // {
            //     loader: "postcss-loader"
            // }
        ]
      },
      {
        test: /antd.*\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader" 
        }, {
            loader: "less-loader",
            options: { javascriptEnabled: true }
        },
        //"postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their extenstion (.js or .jsx etc)
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    port: "8000",
    historyApiFallback: true, 
    inline: true,  
    hot: true
},

  // Dev server configuration 
  // devServer: {
  //   contentBase: paths.SRC,
  // },
};

