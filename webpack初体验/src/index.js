/* 
1.开发环境
  webpack ./src/index.js -o ./build/built --mode=development
  webpack以./src/index.js为入口打包文件，把打包好的文件输出到./build/built/,整体打包时开发环境
2.开发环境
  webpack ./src/index.js -o ./build/built --mode=production
*/
// import './index.css';
import data from './data.json';
console.log(data);
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
