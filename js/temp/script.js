/*----------------------------------------------------------
Pocket.Inc ドロワーメニュー - 2023-05-16
----------------------------------------------------------*/
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
  /* 以下アニメーションを書く */
});

/*----------------------------------------------------------
Pocket.Inc WebP対応チェッカ - 2023-10-31
----------------------------------------------------------*/
async function supportsWebP() {
  return new Promise((resolve) => {
    const webp = new Image();
    webp.onload = () => {
      // 画像のロードが成功すればWebPがサポートされていると判断
      resolve(true);
    };
    webp.onerror = () => {
      // 画像のロードが失敗すればWebPがサポートされていないと判断
      resolve(false);
    };
    // 実際のWebPファイルのパスを指定
    webp.src = "img/common/header_logo.webp";
  });
}
(async () => {
  if (await supportsWebP()) {
    document.body.classList.add("webp-support");
  } else {
    document.body.classList.add("no-webp-support");
  }
})();

/*----------------------------------------------------------
Pocket.Inc トグルメニュー - 2023-11-2
----------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-drawer-toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains("js-drawer-toggle-content")) {
        slideToggle(adjacentElement, this);
      }
    });
  });

  document.querySelectorAll(".js-footer-toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains("js-footer-toggle-content") && ww <= 520) {
        slideToggle(adjacentElement, this);
      }
    });
  });
});
