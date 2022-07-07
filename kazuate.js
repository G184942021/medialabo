// 答え
let answer = Math.floor(Math.random() * 10) + 1;
console.log('答え(デバッグ用): ' + answer);      // デバッグ用
// 入力回数（予想回数）
let kaisu = 0;

// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let c1 = document.querySelector('button#botan');
c1.addEventListener('click', hantei);



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei(event) {
    let i = document.querySelector('input[name="suuzi"]');
    let yoso = Number(i.value); 
      // ユーザが記入した文字列
           // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    kaisu++;
    let Count = document.querySelector('span#Count');
    Count.textContent = kaisu + "回目の予想:";
    let A = document.querySelector('span#yoso');
    A.textContent = yoso;

    let kotae = document.querySelector('p#result');

    if (3 > kaisu) {
        if (answer === yoso) {
            kotae.textContent = ("正解です．おめでとう!");
        } else if (answer > yoso) {
            kotae.textContent = ("まちがい．答えはもっと大きいですよ");
        } else {
            kotae.textContent =("まちがい．答えはもっと小さいですよ");
        }
    } else if (3 === kaisu) {
        if (answer === yoso) {
            kotae.textContent =("正解です．おめでとう!");
        } else {
            kotae.textContent =("まちがい．残念でした答えは " + answer + " です。");
        }
    } else {
            kotae.textContent =("答えは " + answer + " でした。すでにゲームは終わっています");
    }
}