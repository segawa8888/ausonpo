/*----------------------------------------------------------
Pocket.Inc グローバルナビのスクロールアイコンのフェードアウト処理 - 2023-11-2
----------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // 対象となる要素を取得
  const headerNav = document.querySelector(".l-header-nav");
  // 初回スクロールのフラグ
  let isFirstScroll = true;
  // スクロールイベントのリスナーを追加
  headerNav.addEventListener("scroll", function () {
    // 初回スクロール時にのみクラスを追加する
    if (isFirstScroll) {
      this.classList.add("is-scrolled");
      // 初回のスクロールを検知した後はフラグをfalseにしてイベントが再発火しないようにする
      isFirstScroll = false;
    }
  });
});
