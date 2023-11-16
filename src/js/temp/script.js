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
  document.querySelectorAll(".js-footer-toggle-btn").forEach((button, index) => {
    button.addEventListener("click", function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains("js-footer-toggle-content") && ww <= 520) {
        slideToggle(adjacentElement, this);
      }
    });
    if (currentUrl.includes("/keiyakusya/") && index === 1) {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = button.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains("js-footer-toggle-content") && ww <= 520) {
        slideDown(adjacentElement, button);
      }
    }
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

/*----------------------------------------------------------
Pocket.Inc グローバルナビのスクロールアイコンのフェードアウト処理 - 2023-11-2
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  const pickupSlider = document.querySelector(".js-pickup-slider"); // 対象となる要素を取得
  if (pickupSlider) {
    new Splide(pickupSlider, {
      type: "loop",
      perPage: 1,
      arrows: false,
    }).mount();
  }
  const postCardSlider = document.querySelector(".js-post-card-slider"); // 対象となる要素を取得
  if (postCardSlider) {
    new Splide(postCardSlider, {
      perPage: 3,
      arrows: false,
      gap: "0.5rem",
      breakpoints: {
        520: {
          type: "loop",
          perPage: 1,
          padding: "2.5rem",
        },
      },
    }).mount();
  }

  // p-keiyakusya slide
  const keiyakusyaSlider = document.querySelector(".splide01");
  if (keiyakusyaSlider) {
    new Splide(keiyakusyaSlider, {
      autoplay: false, // 自動再生
      arrows: false,
      speed: 2000, // スライダーの移動時間
      destroy: true, // スライダーを破棄
      perPage: 2,
      perMove: 1,
      flickMaxPages: 1,
      pagination: true,
      breakpoints: {
        768: {
          destroy: false,
        },
      },
    }).mount();
  }

  // p-keiyakusya-point slide
  const keiyakusyaSlider2 = document.querySelector(".splide02");
  if (keiyakusyaSlider2) {
    new Splide(keiyakusyaSlider2, {
      autoplay: false, // 自動再生
      arrows: false,
      speed: 2000, // スライダーの移動時間
      destroy: true, // スライダーを破棄
      perPage: 1,
      flickMaxPages: 1,
      pagination: true,
      breakpoints: {
        768: {
          destroy: false,
        },
      },
    }).mount();
  }
});

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

/*----------------------------------------------------------
Pocket.Inc PCでの電話リンクの無効化処理 - 2023-11-13
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  // 現在のパスがルート（/）の場合index.htmlを追加
  let modifiedCurrentPath = currentPath;
  if (currentPath.endsWith("/")) {
    modifiedCurrentPath += "index.html";
  }
  const navItems = document.querySelectorAll(".l-header-nav__item");
  // 各要素をループして処理
  navItems.forEach((item) => {
    // 要素内のaタグを探す
    const link = item.querySelector("a");
    // aタグのhref属性を取得
    let linkHref = link.getAttribute("href");
    // href属性の末尾が '/' の場合、'index.html' を追加
    if (linkHref.endsWith("/")) {
      linkHref += "index.html";
    }
    // aタグのhref属性が現在のパスと一致するか確認
    if (linkHref === modifiedCurrentPath) {
      // 一致する場合、.-currentクラスを追加
      item.classList.add("-current");
    }
  });
});

/*----------------------------------------------------------
Yoshiaki Numajiri ペット保険/補償内容のタブ切り替え
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  document.querySelectorAll(".js-pet-info").forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      // すべてのタブから is-active クラスを削除
      document.querySelectorAll(".js-pet-info").forEach((t) => {
        t.classList.remove("is-active");
        // 親要素からも is-active クラスを削除
        t.parentNode.classList.remove("is-active");
      });

      // クリックされたタブとその親要素に is-active クラスを追加
      this.classList.add("is-active");
      this.parentNode.classList.add("is-active");

      // すべてのコンテンツから is-active クラスを取り除く
      document.querySelectorAll("[id^='pet-cont']").forEach((content) => {
        content.classList.remove("is-active");
      });

      // 対応するコンテンツに is-active クラスを追加
      const id = this.dataset.id;
      document.getElementById(id).classList.add("is-active");
    });
  });
});

/*----------------------------------------------------------
Yoshiaki Numajiri ペットの保険 スライダー - 2023-11-14
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  //mvスライダー
  const mvSlider = document.querySelector(".js-mv-slider"); // 対象となる要素を取得
  if (mvSlider) {
    var splide = new Splide(mvSlider, {
      autoplay: true,
      type: "loop",
      perMove: 1,
      arrows: false,
      gap: "-1.8rem",
      focus: 0,
      padding: "9.625rem",
      updateOnMove: true,
      autoScroll: {
        speed: 0.3,
        pauseOnHover: false,
      },
      classes: {
        pagination: "splide__pagination p-pet-column-pagination",
        page: "splide__pagination__page p-pet-column-page",
      },
      breakpoints: {
        520: {
          perPage: 1,
          gap: "0.78rem",
          padding: "2.099rem",
        },
      },
    }).mount();
  }

  //ワンちゃんとの暮らしに役立つコラムのスライダー
  const petSlider = document.querySelector(".js-column-slider"); // 対象となる要素を取得
  if (petSlider) {
    var splide = new Splide(petSlider, {
      autoplay: true,
      type: "loop",
      perPage: 3,
      perMove: 1,
      arrows: false,
      gap: "3.125rem",
      focus: 0,
      padding: "3.125rem",
      autoScroll: {
        speed: 0.5,
        pauseOnHover: false,
      },
      classes: {
        pagination: "splide__pagination p-pet-column-pagination",
        page: "splide__pagination__page p-pet-column-page",
      },
      breakpoints: {
        520: {
          type: "loop",
          perPage: 1,
          gap: ".625rem",
          padding: "1.875rem",
        },
      },
    }).mount();
  }
});

/*----------------------------------------------------------
Haruto Segawa 保険 フローティングボタン- 2023-11-14
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  const floatingElement = document.querySelector(".p-hoken-floating");
  if (floatingElement) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 800) {
        // スクロールが100ピクセルを超えた場合、要素を表示
        floatingElement.classList.add("visible");
      } else {
        // そうでない場合は非表示に
        floatingElement.classList.remove("visible");
      }
    });
  }
});

/*----------------------------------------------------------
Pocket.Inc コンポーネントの読み込み管理 - 2023-11-4
・全てのコードの最後に読み込む
・初期表示時のレイアウト崩れ対応処理含む
----------------------------------------------------------*/

//ナビゲーションコンポーネント一覧
const navComponents = {
  "/corporate/": "/component/layout/nav-corporate.html",
  "/keiyakusya/bycle/": "/component/layout/nav-keiyakusya-bycle.html",
  "/keiyakusya/pet/": "/component/layout/nav-keiyakusya-pet.html",
  "/keiyakusya/kaigai/": "/component/layout/nav-keiyakusya-kaigai.html",
  "/keiyakusya/kokunai/": "/component/layout/nav-keiyakusya-kokunai.html",
  "/keiyakusya/sports/": "/component/layout/nav-keiyakusya-sports.html",
  "/keiyakusya/golf/": "/component/layout/nav-keiyakusya-golf.html",
  "/pc/bycle": "/component/layout/nav-bicycle.html",
  "/pc/pet-dog": "/component/layout/nav-pet-dog.html",
  "/pc/pet-cat": "/component/layout/nav-pet-cat.html",
};

// 対応するコンポーネントを決定する関数
function determineNavComponent(url) {
  for (const pattern in navComponents) {
    if (url.includes(pattern)) {
      console.log(navComponents[pattern]);
      return navComponents[pattern];
    }
  }
  return "/component/blank.html"; // 該当無しの場合はblank
}

// 全てのコンポーネントの読み込みを管理
Promise.all([
  //コンポーネントの読み込み処理
  loadComponent("/component/head/meta.html", "head", "afterbegin"),
  loadComponent("/component/head/ogp.html", "head", "beforeend"),
  loadComponent("/component/layout/footer.html", ".l-main", "afterend"),
  loadComponent("/component/layout/header.html", "body", "afterbegin").then(() => {
    return loadComponent(determineNavComponent(currentUrl), ".l-header", "beforeend");
  }),
])
  .then(() => {
    // data-component属性を持つ要素をすべて取得
    const dataComponentElements = document.querySelectorAll("[data-component]");
    // 各要素に対してコンポーネントを読み込む
    dataComponentElements.forEach((elm) => {
      const componentName = elm.getAttribute("data-component");
      const componentPath = `/component/${componentName}.html`;
      loadComponent(componentPath, `[data-component="${componentName}"]`, "afterbegin");
    });
  })
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
