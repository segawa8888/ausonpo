/*----------------------------------------------------------
Pocket.Inc グローバルナビのスクロールアイコンのフェードアウト処理 - 2023-11-2
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  // 対象となる要素を取得
  const headerNav = document.querySelector(".l-header-nav");
  if (headerNav) {
    const headerNavScroll = document.querySelector(".l-header-nav__scroll");
    // 初回スクロールのフラグ
    let isFirstScroll = true;
    // スクロールイベントのリスナーを追加
    headerNav.addEventListener("scroll", function () {
      // 初回スクロール時にのみクラスを追加する
      if (isFirstScroll) {
        headerNavScroll.classList.add("is-scrolled");
        // 初回のスクロールを検知した後はフラグをfalseにしてイベントが再発火しないようにする
        isFirstScroll = false;
      }
    });
  }
});
