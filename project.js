let c1 = document.querySelector('img#EG');
c1.addEventListener('click', eziputo);

let c2 = document.querySelector('img#RU');
c2.addEventListener('click', rosia);

let c3 = document.querySelector('img#ZA');
c3.addEventListener('click', minamiahurika);

let c4 = document.querySelector('img#CN');
c4.addEventListener('click', tyuugoku);

let c5 = document.querySelector('img#JP');
c5.addEventListener('click', nihonn);

let c6 = document.querySelector('img#SG');
c6.addEventListener('click', sinngaporu);

let c7 = document.querySelector('img#AU');
c7.addEventListener('click', osutoraria);

let c8 = document.querySelector('img#GB');
c8.addEventListener('click', igirisu);

let c9 = document.querySelector('img#IT');
c9.addEventListener('click', itaria);

let c10 = document.querySelector('img#BR');
c10.addEventListener('click', buraziru);

let c11 = document.querySelector('img#NY');
c11.addEventListener('click', nyuyoku);

let c12 = document.querySelector('img#LA');
c12.addEventListener('click', rosannzerusu);


let kuniid;


function eziputo(event) {
    kuniid = 360630;
    sendRequest();
}
function rosia(event) {
    kuniid = 524901;
    sendRequest();
}    
function minamiahurika(event) {
    kuniid = 993800;
    sendRequest();
}    
function tyuugoku(event) {
    kuniid = 1816670;
    sendRequest();
}    
function nihonn(event) {
    kuniid = 1850147;
    sendRequest();
}    
function sinngaporu(event) {
    kuniid = 1880252;
    sendRequest();
}    
function osutoraria(event) {
    kuniid = 2147714;
    sendRequest();
}    
function igirisu(event) {
    kuniid = 2643743;
    sendRequest();
}    
function itaria(event) {
    kuniid = 2968815;
    sendRequest();
}    
function buraziru(event) {
    kuniid = 3451189;
    sendRequest();
}    
function nyuyoku(event) {
    kuniid = 5128581;
    sendRequest();
}    
function rosannzerusu(event) {
    kuniid = 5368361;
    sendRequest();
}    


// 通信を開始する処理
function sendRequest() {
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + kuniid + '.json';



    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    let X = document.querySelector("p#TENKI");
    X.textContent = data.weather.description;

    let Y = document.querySelector("p#MAX");
    Y.textContent = data.main.temp_max;

    let Z = document.querySelector("p#MIN");
    Z.textContent = data.main.temp_min;

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}