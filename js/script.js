/*----------------------------------------------------------
Pocket.Inc Common Script - 2023-10-15
・ユーザーエージェントの取得
・画面サイズの取得
・モーダル表示時の背景固定処理
----------------------------------------------------------*/
const ua = window.navigator.userAgent.toLowerCase();
const isiOS = ["iphone", "ipad", "macintosh"].some((device) => ua.includes(device) && "ontouchend" in document); //iOS(iPad含む)の判定
const isMobile = ["iphone", "ipad", "macintosh", "android"].some((device) => ua.includes(device) && "ontouchend" in document); //Mobile判定

const resizeTimerCmn = null; //resizeイベント用タイマー
let ww; //window width
let wh; //window height

const html = document.querySelector("html"); //html要素
const body = document.querySelector("body"); //body要素
const header = document.querySelector(".js-header"); //header要素

let scrollBarWidth = window.innerWidth - body.clientWidth; //スクロールバーの幅

//1.スクロールバーを除いたブラウザサイズの取得
const setWindowSize = () => {
  ww = document.documentElement.clientWidth;
  wh = document.documentElement.clientHeight;
};

//2.スクロールバーのサイズの取得
const setScrollbarWidth = () => {
  scrollBarWidth = window.innerWidth - body.clientWidth;
};

//3.loadイベント(読み込み完了時の処理)
window.addEventListener("load", setWindowSize);

//4.resizeイベント
//resizeイベントが発生しないようにする処理(回転時のみ)
//200ミリ秒ごとにイベントを走らせ重複を避ける
const resizeHandlerCmn = () => {
  if (resizeTimerCmn) {
    clearTimeout(resizeTimerCmn);
  }
  resizeTimerCmn = setTimeout(setWindowSize, 200);
};

if (isMobile) {
  window.addEventListener("orientationchange", resizeHandlerCmn);
} else {
  window.addEventListener("resize", resizeHandlerCmn);
}

/*------------------------------------
モーダル表示時の背景固定処理
bodyScrollPrevent(true); //スクロール禁止
bodyScrollPrevent(false, modalArea); //スクロール解除
------------------------------------*/

// transitionendイベントを一回だけ呼び出すための関数
const addEventListenerOnce = (node, event, callback) => {
  const handler = (e) => {
    callback.call(node, e);
    node.removeEventListener(event, handler);
  };
  node.addEventListener(event, handler);
};

// モーダル表示時の背景固定処理
const bodyScrollPrevent = (flag, modal) => {
  let scrollPosition;

  // スクロールバーの幅を取得
  setScrollbarWidth();

  if (flag) {
    body.style.paddingRight = `${scrollBarWidth}px`;
    header.style.paddingRight = `${scrollBarWidth}px`;

    if (isiOS) {
      scrollPosition = -window.pageYOffset;
      Object.assign(body.style, {
        position: "fixed",
        width: "100%",
        top: `${scrollPosition}px`,
      });
    } else {
      body.style.overflow = "hidden";
    }
  } else {
    body.style.paddingRight = "";
    header.style.paddingRight = "";

    if (isiOS) {
      scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g, ""), 10);
      Object.assign(body.style, {
        position: "",
        width: "",
        top: "",
      });
      window.scrollTo(0, scrollPosition);
    } else {
      body.style.overflow = "";
    }
  }
};

/*------------------------------------
jQUeryのslideUp/slideDown/slideToggleの
Vanilla JSでの再現
ex.slideDown(element);slideUp(element);slideToggle(element);
------------------------------------*/
const slideDown = (element, duration = 400) => {
  element.style.display = "block";
  const displayHeight = element.offsetHeight;
  element.style.height = "0px";
  element.style.overflow = "hidden";
  element.style.transitionProperty = "height";
  element.style.transitionDuration = `${duration}ms`;

  setTimeout(() => {
    element.style.height = `${displayHeight}px`;
  }, 0);

  setTimeout(() => {
    element.style.overflow = "";
    element.style.height = "";
    element.style.transitionDuration = "";
  }, duration);
};

const slideUp = (element, duration = 400) => {
  element.style.height = `${element.offsetHeight}px`;
  element.style.overflow = "hidden";
  element.style.transitionProperty = "height";
  element.style.transitionDuration = `${duration}ms`;

  setTimeout(() => {
    element.style.height = "0px";
  }, 0);

  setTimeout(() => {
    element.style.display = "none";
    element.style.overflow = "";
    element.style.height = "";
    element.style.transitionDuration = "";
  }, duration);
};

const slideToggle = (element, triggerButton, duration = 400) => {
  if (window.getComputedStyle(element).display === "none") {
    slideDown(element, duration);
    triggerButton.classList.add("is-active");
  } else {
    slideUp(element, duration);
    triggerButton.classList.remove("is-active");
  }
};


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
  // ボタンのクリックイベントのリスナーを設定
  document.querySelectorAll(".js-drawer-toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains("js-drawer-toggle-content")) {
        slideToggle(adjacentElement, this);
      }
    });
  });
});
