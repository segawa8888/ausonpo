/*----------------------------------------------------------
Pocket.Inc コンポーネントの読み込み管理 - 2023-11-4
・全てのコードの最後に読み込む
・初期表示時のレイアウト崩れ対応処理含む
----------------------------------------------------------*/

//ナビゲーションコンポーネント一覧
const navComponents = {
  "/corporate/": "/common_2024/component/layout/nav-corporate.html",
  "/keiyakusya/bycle/": "/common_2024/component/layout/nav-keiyakusya-bycle.html",
  "/keiyakusya/pet/": "/common_2024/component/layout/nav-keiyakusya-pet.html",
  "/keiyakusya/kaigai/": "/common_2024/component/layout/nav-keiyakusya-kaigai.html",
  "/keiyakusya/kokunai/": "/common_2024/component/layout/nav-keiyakusya-kokunai.html",
  "/keiyakusya/sports/": "/common_2024/component/layout/nav-keiyakusya-sports.html",
  "/keiyakusya/golf/": "/common_2024/component/layout/nav-keiyakusya-golf.html",
  "/pc/bycle": "/common_2024/component/layout/nav-bicycle.html",
  "/pc/pet-dog": "/common_2024/component/layout/nav-pet-dog.html",
  "/pc/pet-cat": "/common_2024/component/layout/nav-pet-cat.html",
};

// 対応するコンポーネントを決定する関数
function determineNavComponent(url) {
  for (const pattern in navComponents) {
    if (url.includes(pattern)) {
      console.log(navComponents[pattern]);
      return navComponents[pattern];
    }
  }
  return "/common_2024/component/blank.html"; // 該当無しの場合はblank
}

// 全てのコンポーネントの読み込みを管理
Promise.all([
  //コンポーネントの読み込み処理
  loadComponent("/common_2024/component/head/meta.html", "head", "afterbegin"),
  loadComponent("/common_2024/component/head/ogp.html", "head", "beforeend"),
  loadComponent("/common_2024/component/layout/footer.html", ".l-main", "afterend"),
  loadComponent("/common_2024/component/layout/header.html", "body", "afterbegin").then(() => {
    return loadComponent(determineNavComponent(currentUrl), ".l-header", "beforeend");
  }),
])
  .then(() => {
    // data-component属性を持つ要素をすべて取得
    const dataComponentElements = document.querySelectorAll("[data-component]");
    // 各要素に対してコンポーネントを読み込む
    dataComponentElements.forEach((elm) => {
      const componentName = elm.getAttribute("data-component");
      const componentPath = `/common_2024/component/${componentName}.html`;
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
    const cssPath = "/common_2024/css/style.css";

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
