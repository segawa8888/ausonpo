/*----------------------------------------------------------
Pocket.Inc ドロワーメニュー - 2023-05-16
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  /* 初期設定 */
  const drawer = document.querySelector(".js-drawer"); //メニュー要素
  const headerNavBtn = document.querySelector(".js-header-menu"); //メニューボタン
  const headerNavBtnText = document.querySelector(".js-header-menu-text"); //メニューテキスト

  if (drawer) {
    headerNavBtn.addEventListener("click", toggleDrawerMenu);
    headerNavBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        toggleDrawerMenu();
      }
    });
    //ドロワーメニューの最後のリンクでtabを押下時にメニューを閉じる処理
    const focusableElm = drawer.querySelectorAll("a, button, input, select, textarea");
    const lastFocusableElm = focusableElm[focusableElm.length - 1];
    lastFocusableElm.addEventListener("keydown", function (e) {
      if (e.key === "Tab" && !e.shiftKey) {
        // 例えば、フォーカスをドロワーメニューの最初の要素に戻す
        e.preventDefault(); // デフォルトのTabキーの挙動を防止
        document.querySelector(".l-header__logo a").focus();
        toggleDrawerMenu();
      }
    });
  }

  //ドロワーメニューの表示
  function toggleDrawerMenu() {
    const isActive = headerNavBtn.classList.toggle("is-active");

    setScrollbarWidth(); // スクロールバーの幅を取得
    body.style.paddingRight = isActive ? scrollBarWidth : "";
    // headerNavBtn.style.marginRight = isActive ? scrollBarWidth : "";

    html.classList.toggle("is-drawer-open", isActive);
    bodyScrollPrevent(isActive); // 背景スクロールの制御
    headerNavBtnText.textContent = isActive ? "閉じる" : "メニュー";

    // ドロワーメニューの状態に基づいて tabindex を制御
    if (isActive) {
      disableTabOutsideDrawer();
    } else {
      enableTabOutsideDrawer();
    }
  }

  // ドロワーメニュー表示時にtabでのセレクトを無効にする
  function disableTabOutsideDrawer() {
    const focusableElm = document.querySelectorAll("a, button, input, select, textarea");
    focusableElm.forEach((elm) => {
      if (!elm.closest(".js-drawer")) {
        // ドロワーメニュー内の要素を除外
        elm.setAttribute("tabindex", "-1");
      }
    });
  }

  // ドロワーメニュー非表示時にtabでのセレクトを有効化
  function enableTabOutsideDrawer() {
    const focusableElm = document.querySelectorAll("a, button, input, select, textarea");
    focusableElm.forEach((elm) => {
      elm.removeAttribute("tabindex");
    });
  }
});
