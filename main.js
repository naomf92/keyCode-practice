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

  const element = document.querySelector(`#fairly[data-key="${e.keyCode}"]`);
  console.log(element);

  // ↑キー: キー番号38
  // →キー: キー番号39
  // ↓キー: キー番号40
  // ←キー: キー番号37

  // 条件に応じたpositionスタイル付与で、キャラクターを移動させます。positionスタイルの値は「数値px」です。この表記のアウトプットに工夫をしましょう。
}
window.addEventListener('keydown',charaCommand);

// element.getBoundingClientRect();



