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
let scrollBarWidth = window.innerWidth - body.clientWidth; //スクロールバーの幅

//1.スクロールバーを除いたブラウザサイズの取得
const setWindowSize = () => {
  ww = document.documentElement.clientWidth;
  wh = document.documentElement.clientHeight;
};
setWindowSize();

//2.スクロールバーのサイズの取得
const setScrollbarWidth = () => {
  scrollBarWidth = window.innerWidth - body.clientWidth;
};

//3.loadイベント(読み込み完了時の処理)
window.addEventListener("load", setWindowSize);

document.addEventListener("componentsLoaded", () => {
  const header = document.querySelector(".js-header"); //header要素
  const main = document.querySelector(".js-main"); //main要素
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
});
