/*----------------------------------------------------------
Pocket.Inc Common Script - 2023-11-04
・Fetch APIでコンポーネントを読み込む
・読み込み完了を検知するカスタムイベントの作成
----------------------------------------------------------*/

// カスタムイベントの作成
const componentsLoaded = new CustomEvent("componentsLoaded");

function loadComponent(url, location, position) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector(location).insertAdjacentHTML(position, html);
    });
}

/*----------------------------------------------------------
Pocket.Inc Common Script - 2023-10-15
・ユーザーエージェントの取得
・画面サイズの取得
・モーダル表示時の背景固定処理
----------------------------------------------------------*/
const ua = window.navigator.userAgent.toLowerCase();
const isiOS = ["iphone", "ipad", "macintosh"].some((device) => ua.includes(device) && "ontouchend" in document); //iOS(iPad含む)の判定
const isMobile = ["iphone", "ipad", "macintosh", "android"].some((device) => ua.includes(device) && "ontouchend" in document); //Mobile判定
const currentUrl = window.location.href; //URLの取得
const currentPath = window.location.pathname; //パス

const html = document.querySelector("html"); //html要素
const body = document.querySelector("body"); //body要素
let main; //main要素
let header; //header要素
let scrollBarWidth = window.innerWidth - body.clientWidth; //スクロールバーの幅

//2.スクロールバーのサイズの取得
const setScrollbarWidth = () => {
  scrollBarWidth = window.innerWidth - body.clientWidth;
};

document.addEventListener("componentsLoaded", () => {
  main = document.querySelector(".js-main"); //main要素
  header = document.querySelector(".js-header"); //header要素
});

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
const slideDown = (element, triggerButton, duration = 400) => {
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

  triggerButton.classList.add("is-active");
};

const slideUp = (element, triggerButton, duration = 400) => {
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

  triggerButton.classList.remove("is-active");
};

const slideToggle = (element, triggerButton, duration = 400) => {
  if (window.getComputedStyle(element).display === "none") {
    slideDown(element, triggerButton, duration);
  } else {
    slideUp(element, triggerButton, duration);
  }
};
