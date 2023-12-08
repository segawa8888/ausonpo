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
