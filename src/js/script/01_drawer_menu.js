/*----------------------------------------------------------
Pocket.Inc ドロワーメニュー - 2023-05-16
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  /* 初期設定 */
  const drawer = document.querySelector(".js-drawer"); //メニュー要素
  const headerNavBtn = document.querySelector(".js-header-menu"); //メニューボタン
  const headerNavBtnText = document.querySelector(".js-header-menu-text"); //メニューテキスト

  headerNavBtn.addEventListener("click", () => {
    const isActive = headerNavBtn.classList.toggle("is-active");

    setScrollbarWidth(); //スクロールバーの幅を取得
    body.style.paddingRight = isActive ? scrollBarWidth : "";
    //headerNavBtn.style.marginRight = isActive ? scrollBarWidth : "";

    html.classList.toggle("is-drawer-open", isActive);
    bodyScrollPrevent(isActive); //背景スクロールの制御
    headerNavBtnText.textContent = isActive ? "閉じる" : "メニュー";
  });
});
