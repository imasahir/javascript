/**
 * 変数
 */

let unko = 'Hello world!';
// unko = 'Hello world2';

/**
 * 定数
 */
const bigUnko = 'He..Hell...Hello world!'

// bigUnko = 'hello'
//  ↑定数の書き換えは不可

/**
 * 配列
 */

 let inoki = ['いーち','にー','さーん','ダー'];
// console.log(inoki[3]);\
// ↑配列の一つを取り出すときはこんな感じ。

/**
 * ループ文
 */
let index = 0;
// while(index < inoki.length){ //=4
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

/**
 * if else文
 */
// if (inoki.length > 5 ){
//   console.log('ボンバイエ!');
// }
// else {
//   console.log('ボンバ...')
// }

/**
 * 関数 ※同じ命令を何度も書くとき or 任意の条件で実行させたいとき
 */

// test = function(){} みたいな書き方もある。
// ()の中身はarg(引数)

const test = (arg) => {
  // ここに実行したい命令を書く　
  if (inoki.length > arg ){
    console.log('ボンバイエ!');
  }
  else {
    console.log('ボンバ...')
  }
};

/**
 * オブジェクト ※データの塊　連想配列みたいなもの
 */
const unko2 = {
  color: 'pink',
  size:'large',
  purfume:'mint',
  goToilet: () =>{
    console.log('Hello world!');
  } // 関数も入れられる
};
console.log(unko2.goToilet());

// デフォルトのオブジェクト

// window.alert('Hi');
  // ブラウザの表示内容
console.log(document.addEventListener);
  // ↑このHTMLソースそのもの
  document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    //　命令を書く
    window.alert('Hello World');
  })