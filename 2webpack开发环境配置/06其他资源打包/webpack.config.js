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
      //   {
      //     //排除资源
      //     exclude: /\.(css|less|js|html|jpg|png|gif)$/i,
      //     loader: 'file-loader',
      //   },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
