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
    webp.src = "/assets/img/common/header_logo.webp";
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
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
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

  document.querySelectorAll(".js-accordion-toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains("js-accordion-toggle-content")) {
        slideToggle(adjacentElement, this);
      }
    });
  });
});

/*----------------------------------------------------------
Pocket.Inc グローバルナビのスクロールアイコンのフェードアウト処理 - 2023-11-2
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  // 対象となる要素を取得
  const headerNav = document.querySelector(".l-header-nav");
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
});

/*----------------------------------------------------------
Pocket.Inc グローバルナビのスクロールアイコンのフェードアウト処理 - 2023-11-2
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  // 対象となる要素を取得
  const pickupSlider = document.querySelector(".js-pickup-slider");
  if (pickupSlider) {
    new Splide(pickupSlider, {
      type: "loop",
      perPage: 1,
      arrows: false,
    }).mount();
  }
});

/*----------------------------------------------------------
Pocket.Inc コンポーネントの読み込み管理 - 2023-11-4
・全てのコードの最後に読み込む
・初期表示時のレイアウト崩れ対応処理含む
----------------------------------------------------------*/
// 全てのコンポーネントの読み込みを管理
Promise.all([
  //コンポーネントの読み込み処理
  loadComponent("/component/meta.html", "head", "afterbegin"),
  loadComponent("/component/ogp.html", "head", "beforeend"),
  loadComponent("/component/header.html", "body", "afterbegin"),
  loadComponent("/component/footer.html", ".l-main", "afterend"),
])
  .then(() => {
    // 全てのコンポーネントが読み込まれたことを示すイベントをディスパッチ
    document.dispatchEvent(componentsLoaded);

    // meta name="description"のcontentを取得し、meta property="og:description"に設定
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (descriptionMeta && ogDescriptionMeta) {
      ogDescriptionMeta.content = descriptionMeta.content;
    }
    // 現在のページのURLをmeta property="og:url"に設定
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.content = window.location.href;
    }

    /*初期表示時のレイアウト崩れ対応処理*/
    // CSSファイルのパス
    const cssPath = "/assets/css/style.css";

    // CSSを読み込むための<link>要素を生成
    const elmCssLink = document.createElement("link");
    elmCssLink.href = cssPath;
    elmCssLink.rel = "stylesheet";
    elmCssLink.type = "text/css";

    // CSSの読み込み完了時に実行する関数
    elmCssLink.onload = function () {
      // bodyのvisibilityをvisibleに変更
      document.body.style.visibility = "visible";
    };

    // <head>に<link>要素を追加
    document.head.appendChild(elmCssLink);
  })
  .catch((error) => {
    console.error("Error loading components:", error);
  });
