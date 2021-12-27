const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        //Rule.type设置类型用于匹配模块。它防止了 defaultRules 和它们的默认导入行为发生
        type: 'asset/resource',
        generator: {
          //Rule.generator.publicPath对指定的资源模式指定 publicPath
          // publicPath: 'imgs/',
          //Rule.generator.filename盖了 output.assetModuleFilename 选项并且仅与 asset 和 asset/resource 模块类型一同起作用。
          filename: 'imgs/[hash:10][ext]',
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启hmr功能
    hot: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
};
