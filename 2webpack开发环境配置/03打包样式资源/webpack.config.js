//resolve用来拼接绝对路径的方法
const { resolve } = require('path');
module.exports = {
  //webpack配置
  //入口
  entry: './src/index.js',
  //输出
  output: {
    //输出文件名
    filename: 'built.js',
    // 输出路径
    //__dirname代表当前文件的目录的绝对路径
    path: resolve(__dirname, 'build'),
  },
  //loader配置
  module: {
    rules: [
      //详细的loader配置
      //不同的资源配置不同的loader
      {
        //匹配哪些文件
        test: /\.css$/,
        //使用哪些loader进行处理
        use: [
          //use数组loader执行顺序：从右到左，从下到上依次执行
          //创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          //将css文件编程commonjs模块加载js中，里边内容是样式字符串
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  //plugins的配置
  plugins: [],
  //模式
  mode: 'development',
  // mode:'production'
};
