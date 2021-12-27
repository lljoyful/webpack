console.log('index.js文件呗加载了');

// import { mul } from './test';

document.getElementById('btn').onclick = () => {
  //预加载webpackPrefetch
  import(/* webpackChunkName:'test',webpackPrefetch:true */ './test')
    .then(({ mul }) => {
      console.log(mul(4, 5));
    })
    .catch((e) => {
      console.log(e);
    });
};
