// キャラ操作アプリ
// 要件１: 
// キャラクター要素を上下左右に動かせるようにしましょう。
// ヒント：キャラクターは、「座標」を使うとx軸とy軸の値を指定して配置のスタイルを変更できます。

// 要件２：
// keyCode、イベント、テンプレートリテラル、引数を必ず使用します。

// 座標x軸とy軸の初期値

let x = 0;
let y = 0;

function charaCommand(e) {

  const element = document.querySelector('#fairly');
  console.log(element);

  if (e.keyCode === 38) {
    y += 50;
    // 前置インクリメントは、今の反映結果だと不規則にtopが追加されていますので、y = y + px数; とすると指定したpxの数通りにスタイルが付与されます
    // 上記の記述でも良いですが、上記の記述は y =- px数値; と省略できます
    // topは上に詰め物をするので、キャラクター要素を下に移動させます。つまり上下の配置移動ということで、y軸を使うという意味で変数yを使用した方が良いです    x + `${++x}px`;
  } else if (e.keyCode === 39) {
    x += 50;
  } else if (e.keyCode === 40) {
    y -= 50;
  } else if (e.keyCode === 37) {
    x -= 50;
  } else {
    console.log(e.keyCode);
  }
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;

  // ↑キー: キー番号38
  // →キー: キー番号39
  // ↓キー: キー番号40
  // ←キー: キー番号37

  // 条件に応じたpositionスタイル付与で、キャラクターを移動させます。positionスタイルの値は「数値px」です。この表記のアウトプットに工夫をしましょう。
  // DOMElement.style.top = x + 'px';
  // 上記に一緒に書いていますが、if文はpx数の指定、if文を抜けたこの箇所では、上記で決まったpx数を利用して移動をさせるように、タスクを分散すると良いです


}
window.addEventListener('keydown',charaCommand);




