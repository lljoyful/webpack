const { resolve } = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //打包其他资源
      // {
      //   //排除资源
      //   // exclude: /\.(css|less|js|html|jpg|png|gif)$/i,
      //   exclude: /\.(html|css|js|less|img|png|gif)$/,
      //   loader: 'file-loader',
      // },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
  //开发服务器devServer
  devServer: {
    static: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
  },
};
