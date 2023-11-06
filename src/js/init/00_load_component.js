/*----------------------------------------------------------
Pocket.Inc Common Script - 2023-11-04
・Fetch APIでコンポーネントを読み込む
・読み込み完了を検知するカスタムイベントの作成
----------------------------------------------------------*/

// カスタムイベントの作成
const componentsLoaded = new CustomEvent("componentsLoaded");

function loadComponent(url, location, position) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector(location).insertAdjacentHTML(position, html);
    });
}
