/*----------------------------------------------------------
Pocket.Inc PCでの電話リンクの無効化処理 - 2023-11-13
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  if (!isMobile) {
    // ページ内のすべてのリンクを取得
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      // href属性が'tel:'で始まる場合、クリックイベントを無効にする
      if (link.href.startsWith("tel:")) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
        });
      }
    }
  }
});
