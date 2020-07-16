// キャラ操作アプリ
// 要件１: 
// キャラクター要素を上下左右に動かせるようにしましょう。
// ヒント：キャラクターは、「座標」を使うとx軸とy軸の値を指定して配置のスタイルを変更できます。

// 要件２：
// keyCode、イベント、テンプレートリテラル、引数を必ず使用します。

// 座標x軸とy軸の初期値

let x = 0;
let y = 0;

// DOMElement.style.top = x + 'px';


function charaCommand(e) {

  const element = document.querySelector('#fairly');
  console.log(element);

  if (e.keyCode === 38) {

    element.style.top = x + `${++x}px`;

  } else if (e.keyCode === 39) {

    element.style.left = y + `${++y}px`;
    
  } else if (e.keyCode === 40) {
  
    element.style.top = x + `${--x}px`;

  } else if (e.keyCode === 37) {
 
    element.style.left = y + `${--y}px`;

  } else {
    console.log(e.keyCode);
  }

  // ↑キー: キー番号38
  // →キー: キー番号39
  // ↓キー: キー番号40
  // ←キー: キー番号37

  // 条件に応じたpositionスタイル付与で、キャラクターを移動させます。positionスタイルの値は「数値px」です。この表記のアウトプットに工夫をしましょう。
}
window.addEventListener('keydown',charaCommand);




