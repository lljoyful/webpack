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
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   // 使用一个loader
      //   loader: 'url-loader',

      //   options: {
      //     // 图片大小小于8kb，就会被base64处理
      //     // 优点: 减少请求数量（减轻服务器压力）
      //     // 缺点：图片体积会更大（文件请求速度更慢）
      //     limit: 8 * 1024,
      //   },
      //   type: 'javascript/auto',
      // },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
