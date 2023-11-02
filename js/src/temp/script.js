/*----------------------------------------------------------
Pocket.Inc 基本スクリプト - 2022-05-16
・主にプラグインを使用したスクリプト
・ローディング中のスクロールロック
・スクロール時のアニメーション(ScrollTrigger.js)の設定
----------------------------------------------------------*/
/* 初期設定 */
const loaderEndSec = 5000; //ローディングの強制終了(ミリ秒)
const loaderFinishDurationTime = 1000; // ローダーの終了アニメーションの処理時間(ミリ秒) ※完了後にスクロール禁止などの処理を解除する
bodyScrollPrevent(true); //ローディング中、全てのスクロールを禁止にする
let isLoaded = false; //loading完了フラグ
//const scrollTrigger = new ScrollTrigger.default(); //ScrollTrigger.js

$(function() {
  //ハンバーガーメニュー
  const drawer = document.querySelector('.l-header-nav__list');
  const headerNavBtn = $('.js-header-hamburger');
  headerNavBtn.on('click', function() {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $(html).removeClass("is-drawer-open");
      bodyScrollPrevent(false); //全てのスクロール禁止の解除
      $(body).css("padding-right", "");
      headerNavBtn.css("margin-right", "");
    } else {
      setScrollbarWidth(); //スクロールバーの幅を取得
      $(body).css("padding-right", scrollBarWidth); //レイアウト崩れを防ぐ為、スクロールバーの幅をbodyに追加
      headerNavBtn.css("margin-right", scrollBarWidth);
      $(this).addClass("is-active");
      $(html).addClass("is-drawer-open");
      bodyScrollPrevent(true); //背景スクロール禁止
    }
  });
});
//End $(function())

//4.loadイベント(読み込み完了時の処理)
$(window).on('load', function() {
  ContentLoaded();
});

//ローディング画面の一定時間経過後の強制終了処理
setTimeout(function() {
  if (!isLoaded) { //ローディングが完了していた場合は処理しない
    ContentLoaded();
  }
}, loaderEndSec);

//loading完了時の処理
function ContentLoaded() {
  isLoaded = true;
  $(body).addClass("is-loaded"); //<body>にローディング完了classを追加

  setTimeout(() => {
    $(".js-loaded").addClass("is-visible"); // .js-loaded要素にに.is-visibleを付与
    //setScrollTriger(); //スクロールトリガーを遅延させてセット
    //scrollTrigger.kill();
    //scrollTrigger.listen();
    bodyScrollPrevent(false, loader); //全てのスクロール禁止の解除
  }, loaderFinishDurationTime);

  gsap
    .timeline({
      defaults: {
        duration: 1,
        ease: "elastic",
      },
      repeat: -1,
      repeatDelay: 1,
    })
    .to(".box", { y: 100, scale: 0.5, duration: 2 })
    .to(".box", { x: 100, borderRadius: "50%" })
    .to(".box", { y: 0, scale: 1, borderRadius: "16px" })
    .to(".box", { x: 0, borderRadius: "", duration: 0.5 });
}

/*----------------------------------------------------------
スクロールをトリガーにアニメーションさせる
.js-scroll要素が表示領域に入ると .is-visible/.is-invisible を付与
.js-scroll-alwaysで表示領域に入る度にアニメーション
・pJaxする場合は都度、関数の読み込みが必要
https://terwanerik.github.io/ScrollTrigger/
----------------------------------------------------------*/
function setScrollTriger() {
/*  scrollTrigger.add('.js-scroll', {
    once: true,
    toggle: {
      class: {
        in: 'is-visible',
        out: 'is-invisible'
      }
    },
    offset: {
      element: {
        x: 0,
        y: (trigger, rect, direction) => {
          return 0.2
        }
      }
    }
  });
  scrollTrigger.add('.js-scroll-always', {
    once: false,
    toggle: {
      class: {
        in: 'is-visible',
        out: 'is-invisible'
      }
    },
    offset: {
      element: {
        x: 0,
        y: (trigger, rect, direction) => {
          return 0.2
        }
      }
    }
  });
  scrollTrigger.query('.js-scroll');*/
}
