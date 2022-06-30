let eu = document.querySelector('li#EU');
eu.remove();

let ul = document.querySelector('ul');
let li;

li = document.createElement('li');
li.textContent = 'アジア大陸';
ul.insertAdjacentElement('beforeend', li);

li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);

let h2sevenOcean = document.querySelector('h2#sevenOcean');

let oceans = [
    '北極海',
    '北大西洋',
    '南大西洋',
    'インド洋',
    '北太平洋',
    '南太平洋',
    '南極海'
  ]

ul =document.createElement('ul');

h2sevenOcean.insertAdjacentElement('afterend', ul);

for (let o of oceans) {
    li = document.createElement('li');
    li.textContent = o;
    ul.insertAdjacentElement('beforeend', li);
}

// すべての h2 要素を検索する（次の行を完成させる）
let h2s = document.querySelectorAll('h2');

// h2 要素に対して繰り返す
for (let h2 of h2s) {
  // h2 の背景色を 'palegreen' に変更する
  //   (次の行を書く)
  h2.style.backgroundColor = 'palegreen';
}

let ls = document.querySelectorAll('li');
for (let li of ls) {
    li.classList.add('orangeUnderline');
}