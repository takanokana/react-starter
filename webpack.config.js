const webpack = require('webpack');
const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')

module.exports = (env, options)  => ({
  devtool: (options.mode === 'development' ? 'source-map' : false),
  devServer: {
    contentBase: (options.mode === 'development' ? './dist' : './build'),
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: 'index.html' },
      ],
    },
    disableHostCheck: true,
  },

  mode: 'development',
  entry: {
    user: [`${path.join(__dirname, 'src')}/jsx/user.jsx`],
  },
  output: {
    path: `${__dirname}/${options.mode === 'development' ? 'dist' : 'build'}/`,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: options.mode === 'production' ? { pretty: true } : {},
        },
      },
    ]
  },
  resolve: {
    modules: [`${__dirname}/src`, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackplugin({
      template: './src/pug/index.pug',
      favicon: './src/img/common/favicon.png',
    }),
  ]
})
