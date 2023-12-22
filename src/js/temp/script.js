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
    webp.src = "/common_2024/img/header_logo.webp";
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
      toggleDrawerAccordion(this);
    });
    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        toggleDrawerAccordion(this);
      }
    });
  });
  function toggleDrawerAccordion(button) {
    // このボタンの隣接要素にslideToggleを適用
    const adjacentElement = button.nextElementSibling;
    if (adjacentElement && adjacentElement.classList.contains("js-drawer-toggle-content")) {
      slideToggle(adjacentElement, button);
    }
  }
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
      //speed: 2000, // スライダーの移動時間
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

  //ペットの保険 mvスライダー
  const mvSlider = document.querySelector(".js-mv-slider"); // 対象となる要素を取得
  if (mvSlider) {
    new Splide(mvSlider, {
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
    new Splide(petSlider, {
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
  //自転車TOPのお客様の声のスライダー
  const bikevoiceSlider = document.querySelector(".js-bikevoice-slider"); // 対象となる要素を取得
  if (bikevoiceSlider) {
    new Splide(bikevoiceSlider, {
      perPage: 3,
      arrows: false,
      gap: "2.5rem",
      pagination: true,
      breakpoints: {
        520: {
          perPage: 1,
        },
      },
    }).mount();
  }
  //バイクルのお客様の声のスライダー
  const byclebvoiceSlider = document.querySelector(".js-voice-slider"); // 対象となる要素を取得
  if (byclebvoiceSlider) {
    new Splide(byclebvoiceSlider, {
      perPage: 3,
      arrows: false,
      gap: "2.5rem",
      pagination: true,
      breakpoints: {
        520: {
          perPage: 1,
        },
      },
    }).mount();
  }
  //バイクルのケースのスライダー
  const SPbyclebcaseSlider = document.querySelector(".js-byclecase-slider"); // 対象となる要素を取得
  if (SPbyclebcaseSlider) {
    new Splide(SPbyclebcaseSlider, {
      perPage: 3,
      arrows: false,
      breakpoints: {
        520: {
          perPage: 1,
        },
      },
    }).mount();
  }

  //猫の保険特長のスライダー
  const catFeatureSlider = document.querySelector(".js-cat-feature-slider"); // 対象となる要素を取得
  if (catFeatureSlider) {
    new Splide(catFeatureSlider, {
      destroy: true,
      breakpoints: {
        519: {
          destroy: false,
          arrows: false,
          perPage: 1,
          gap: "0.857142857rem",
          type: "loop",
        },
      },
    }).mount();
  }

  //バイクルコラム ピックアップスライダー
  const byclePickupSlider = document.querySelector(".js-pickup-slider"); // 対象となる要素を取得
  if (byclePickupSlider) {
    new Splide(mvSlider, {
      autoplay: true,
      type: "loop",
      perMove: 1,
      arrows: false,
      focus: 0,
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
        },
      },
    }).mount();
  }

  // p-recruit-office slide
  const recruitSliderOffice = document.querySelector(".splide-office-1");
  if (recruitSliderOffice) {
    new Splide(recruitSliderOffice, {
      autoplay: false, // 自動再生
      arrows: false,
      //speed: 2000, // スライダーの移動時間
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

  const recruitSliderOffice2 = document.querySelector(".splide-office-2");
  if (recruitSliderOffice2) {
    new Splide(recruitSliderOffice2, {
      autoplay: false, // 自動再生
      arrows: false,
      //speed: 2000, // スライダーの移動時間
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

  const recruitSliderOffice3 = document.querySelector(".splide-office-3");
  if (recruitSliderOffice3) {
    new Splide(recruitSliderOffice3, {
      autoplay: false, // 自動再生
      arrows: false,
      //speed: 2000, // スライダーの移動時間
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

  const recruitSliderOffice4 = document.querySelector(".splide-office-4");
  if (recruitSliderOffice4) {
    new Splide(recruitSliderOffice4, {
      autoplay: false, // 自動再生
      arrows: false,
      //speed: 2000, // スライダーの移動時間
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
  // パスのパターンと対応する変更後のパスを定義
  const pathPatterns = [
    { pattern: /^\/pc\/bycle-best\/(compensation|premium|roadservice)\.html$/, newPath: "/pc/bycle-best/index.html" },
    { pattern: /^\/pc\/bycle\/(compensation|premium|roadservice)\.html$/, newPath: "/pc/bycle/index.html" },
    { pattern: /^\/pc\/bycle-s\/(compensation|premium|roadservice)\.html$/, newPath: "/pc/bycle-s/index.html" },
  ];

  // URLに'bycle'が含まれる場合のみパターンマッチングを実行
  if (currentPath.includes("bycle")) {
    pathPatterns.forEach(({ pattern, newPath }) => {
      if (pattern.test(currentPath)) {
        modifiedCurrentPath = newPath;
      }
    });
  }

  console.log(modifiedCurrentPath);
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

var win2
function openwin2(pop,winname){
	var avW = 700;
	var avH = 650;
	win2 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=" + avW + ",height=" + avH + "");
	win2.opener = self;
	win2.focus();
}
// 親ウインドウが閉じる際に子ウインドウも閉じる
onunload = function() {
	if(!win2) return false;
	win2.close();
}
/*----------------------------------------------------------
Akeru Iwamotoでのアコーディオン - 2023-11-29
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  const accordionToggles = document.querySelectorAll('.sp-js-up-accordion-toggle');

  accordionToggles.forEach((toggleButton) => {
    const accordionBody = toggleButton.previousElementSibling;

    // ウィンドウの幅がスマートフォンサイズの場合にのみアコーディオンを適用
    const isMobile = window.innerWidth <= 519;

    if (isMobile) {
      // 初期状態でコンテンツを非表示にする
      accordionBody.style.display = 'none';

      const toggleAccordion = () => {
        slideToggle(accordionBody, toggleButton);

        // ボタンのテキストを切り替える
        const buttonText = toggleButton.innerText.trim();
        toggleButton.innerText = buttonText === '詳しくはこちら' ? '閉じる' : '詳しくはこちら';
      };

      toggleButton.addEventListener('click', toggleAccordion);
    } else {
      // PC サイズの場合は "詳しくはこちら" ボタンを削除
      toggleButton.parentNode.removeChild(toggleButton);
    }
  });
});

/*----------------------------------------------------------
Akeru Iwamotoでのアコーディオン - 2023-11-24
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  const accordionToggles = document.querySelectorAll('.js-up-accordion-toggle');

  accordionToggles.forEach((toggleButton) => {
    const accordionBody = toggleButton.previousElementSibling;

    // アコーディオンの初期状態を設定（アニメーション時間を0.5秒に変更）
    accordionBody.style.transition = 'max-height 0.5s ease-out, padding-bottom 0.5s ease-out';
    accordionBody.style.maxHeight = '0';
    accordionBody.style.overflow = 'hidden';
    accordionBody.style.paddingBottom = '0';

    const toggleAccordion = () => {
      const isClosed = accordionBody.style.maxHeight === '0px';
      if (isClosed) {
        // コンテンツの全高さを取得し、max-heightに設定
        accordionBody.style.maxHeight = 'initial';
        accordionBody.style.paddingBottom = '30px';
      } else {
        accordionBody.style.maxHeight = '0';
        accordionBody.style.paddingBottom = '0';
      }
      toggleButton.classList.toggle('is-active', isClosed);
    };

    accordionBody.addEventListener('transitionend', () => {
      const isOpen = accordionBody.style.maxHeight !== '0px';
      toggleButton.textContent = isOpen ? '閉じる' : '詳しくはこちら';
    });

    toggleButton.addEventListener('click', toggleAccordion);
  });
});

/*----------------------------------------------------------
pet ポップアップウィンドウ - 2023-11-27
----------------------------------------------------------*/

var petModal = document.querySelector("#modal");
var petModalOverlay = document.querySelector("#modal-overlay");
var petCloseButton = document.querySelector("#close-button");
var petOpenButton = document.querySelector("#open-button");

// 要素が存在する場合にのみイベントリスナーを追加
if (petCloseButton && petModal && petModalOverlay) {
  petCloseButton.addEventListener("click", function () {
    petModal.classList.toggle("closed");
    petModalOverlay.classList.toggle("closed");
  });
}

if (petOpenButton && petModal && petModalOverlay) {
  petOpenButton.addEventListener("click", function () {
    petModal.classList.toggle("closed");
    petModalOverlay.classList.toggle("closed");
  });
}

/*----------------------------------------------------------
Ibuki Suzuki ポップアップ機能 - 2023-11-29
----------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", function (event) {
        const clickedElement = event.target;
        // クリックされた要素が背景または閉じるボタンである場合
        if (clickedElement.matches(".popup-input .bg, .close")) {
        const popupInput = clickedElement.closest(".popup-input");
        popupInput.classList.remove("active");
        }
        // クリックされた要素がポップアップを開くボタンである場合
        if (clickedElement.matches(".popup-open")) {
        const Popup = document.querySelector(".popup-input");
        Popup.classList.add("active");
        }
    });
});
/*
scss _popup.scss
class popup-openがトリガーです
popup-inputは全体のwrap
bgは半透明の背景
popup-input-contentの中にポップアップに表示するコンテンツを入力してください
<button type="button" class="popup-open">ポップアップオープン</button>

<div class="popup-input">
<div class="bg"></div>
<div class="popup-input-content">
<!-- ここにコンテンツ -->
</div>
</div>
*/
/*----------------------------------------------------------
Ibuki Suzuki タブ切り替え機能 - 2023-11-29
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
// var tabButtons = document.querySelectorAll(".tab-button");
// var tabContents = document.querySelectorAll(".tab-content");
//     tabButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         var tabId = this.getAttribute("data-tab");
//         // 同じクラス名の .tab-button から 'active' クラスを削除
//         document.querySelectorAll(".tab-button").forEach(function (tabButton) {
//         tabButton.classList.remove("active");
//         });
//         // 同じクラス名・同じ data-tab 属性を持つ .tab-button に 'active' クラスを追加
//         document
//         .querySelectorAll('.tab-button[data-tab="' + tabId + '"]')
//         .forEach(function (tabButton) {
//         tabButton.classList.add("active");
//         });
//         // すべてのタブを非表示にする
//         tabContents.forEach(function (tabContent) {
//         tabContent.classList.remove("active");
//         });
//         // 対応するタブを表示する
//         document.getElementById("tab" + tabId).classList.add("active");
//         });
//     });
});
/*
scss _tab.scss
tab-button(n)とdata-tab(n)の値、tab-contentのid:tab(n)は同じ値で設定してください
tab-buttonsは複数あっても押されたtab-button(n)にactiveのクラスが付与されます
<div class="tab-buttons">
<button class="tab-button tab-button1" data-tab="1">Tab 1</button>
<button class="tab-button tab-button2" data-tab="2">Tab 2</button>
<button class="tab-button tab-button3" data-tab="3">Tab 3</button>
<button class="tab-button tab-button4" data-tab="4">Tab 4</button>
</div>
<div id="tab1" class="tab-content active">Content for Tab 1</div>
<div id="tab2" class="tab-content">Content for Tab 2</div>
<div id="tab3" class="tab-content">Content for Tab 3</div>
<div id="tab4" class="tab-content">Content for Tab 4</div>
<div class="tab-buttons">
<button class="tab-button tab-button1" data-tab="1">Tab 1</button>
<button class="tab-button tab-button2" data-tab="2">Tab 2</button>
<button class="tab-button tab-button3" data-tab="3">Tab 3</button>
<button class="tab-button tab-button4" data-tab="4">Tab 4</button>
</div>
*/

	//============================
	////コンテンツ内アコーディオン CLOSEボタン
	//============================
	document.addEventListener('DOMContentLoaded', function() {

		// 見積もり実行
		var exec_estimate = function(){
			var breed = String(document.getElementById("petBreed").value);
			var age = document.getElementById("petAge").value;

			if(!!!breed || !!!age){
				return false;
			}
			var price_type = pet_breed[breed][2];
			var price_list = pet_prices[price_type - 1][age];
			var price_list_t = pet_prices_t[price_type - 1][age];
			
			let group1 = document.getElementsByName('group1');
			let len = group1.length;
			let checkValue = '';
			for (let i = 0; i < len; i++){
				if (group1.item(i).checked){
					checkValue = group1.item(i).value;
				}
			}
			//月払い
			if(checkValue == 1){
				document.getElementById('ari_70').innerHTML = price_list_t[2];
				document.getElementById('ari_50').innerHTML = price_list_t[0];
				document.getElementById('nashi_70').innerHTML = price_list[2];
				document.getElementById('nashi_50').innerHTML = price_list[0];

			//一時払
			}else{
				document.getElementById('ari_70').innerHTML = price_list_t[3];
				document.getElementById('ari_50').innerHTML = price_list_t[1];
				document.getElementById('nashi_70').innerHTML = price_list[3];
				document.getElementById('nashi_50').innerHTML = price_list[1];
			}
		};


		//保険料見積もり関連
		//===============================
		document.querySelectorAll("#petBreed").forEach((tab) => {
			document.addEventListener("change", function (event) {
				var breed = document.getElementById("petBreed").value;
				price_list = ["―","―","―","―"];
				document.getElementById('ari_70').innerHTML = price_list[0];
				document.getElementById('ari_50').innerHTML = price_list[1];
				document.getElementById('nashi_70').innerHTML = price_list[2];
				document.getElementById('nashi_50').innerHTML = price_list[3];
				document.getElementById('pet_price_button').classList.remove('is-active');
				document.getElementById('pet_price_detail').style.display = "none";
			});
		});
		document.querySelectorAll("#petAge").forEach((tab) => {
			document.addEventListener("change", function (event) {
			
				price_list = ["―","―","―","―"];
				document.getElementById('ari_70').innerHTML = price_list[0];
				document.getElementById('ari_50').innerHTML = price_list[1];
				document.getElementById('nashi_70').innerHTML = price_list[2];
				document.getElementById('nashi_50').innerHTML = price_list[3];
				document.getElementById('pet_price_button').classList.remove('is-active');
				document.getElementById('pet_price_detail').style.display = "none";


			});
		});
		document.querySelectorAll(".group1").forEach((tab) => {
			document.addEventListener("change", function (event) {
				price_list = ["―","―","―","―"];
				document.getElementById('ari_70').innerHTML = price_list[0];
				document.getElementById('ari_50').innerHTML = price_list[1];
				document.getElementById('nashi_70').innerHTML = price_list[2];
				document.getElementById('nashi_50').innerHTML = price_list[3];
				document.getElementById('pet_price_button').classList.remove('is-active');
				document.getElementById('pet_price_detail').style.display = "none";
			});
		});
		document.querySelectorAll("#pet_price_button").forEach((tab) => {
			document.addEventListener("click", function (event) {
				var breed = document.getElementById("petBreed").value;
				var age = document.getElementById("petAge").value;
				if(breed == "" || age == ""){
					price_list = ["―","―","―","―"];
					document.getElementById('ari_70').innerHTML = price_list[0];
					document.getElementById('ari_50').innerHTML = price_list[1];
					document.getElementById('nashi_70').innerHTML = price_list[2];
					document.getElementById('nashi_50').innerHTML = price_list[3];
					document.getElementById('price_button').classList.remove('is-active');
					document.getElementById('pet_price_detail').style.display = "none";
				}else{
					exec_estimate();
				}
			});
		});
    });



	var pet_prices = [
		// 犬 10kg未満
		//コース50月払,コース50一時払,コース70月払,コース70一時払
		[
			["990","10,760","1,240","13,530"],
			["920","10,080","1,150","12,580"],
			["860","9,410","1,070","11,640"],
			["960","10,500","1,210","13,160"],
			["1,060","11,580","1,350","14,680"],
			["1,160","12,660","1,480","16,190"],
			["1,460","15,950","1,910","20,800"],
			["1,760","19,220","2,330","25,380"],
			["2,060","22,510","2,750","29,980"],
			["2,340","25,480","3,130","34,140"],
			["2,610","28,450","3,510","38,300"]
		],
		// 犬 10kg以上
		[
			["1,700","18,560","2,240","24,450"],
			["1,560","16,980","2,040","22,230"],
			["1,410","15,410","1,840","20,040"],
			["1,580","17,270","2,080","22,650"],
			["1,760","19,150","2,320","25,270"],
			["1,930","21,000","2,550","27,870"],
			["2,490","27,150","3,340","36,470"],
			["3,050","33,280","4,130","45,060"],
			["3,610","39,430","4,920","53,660"],
			["4,140","45,200","5,660","61,750"],
			["4,670","50,990","6,400","69,860"]
		],
		// 犬 20kg以上
		[
			["1,870","20,390","2,480","27,010"],
			["1,710","18,650","2,250","24,570"],
			["1,550","16,920","2,030","22,160"],
			["1,740","19,010","2,300","25,080"],
			["1,940","21,120","2,570","28,030"],
			["2,130","23,200","2,840","30,950"],
			["2,770","30,180","3,730","40,710"],
			["3,400","37,140","4,630","50,470"],
			["4,040","44,120","5,520","60,230"],
			["4,650","50,680","6,360","69,420"],
			["5,250","57,260","7,210","78,630"]
		],
		// 猫
		[
			["880","9,620","1,090","11,930"],
			["860","9,350","1,060","11,560"],
			["830","9,100","1,030","11,210"],
			["900","9,860","1,120","12,270"],
			["970","10,630","1,220","13,350"],
			["1,040","11,400","1,320","14,420"],
			["1,210","13,240","1,560","17,000"],
			["1,380","15,080","1,790","19,580"],
			["1,550","16,930","2,030","22,160"],
			["1,860","20,280","2,460","26,860"],
			["2,170","23,640","2,890","31,560"]
		]
	];
	
	//料金表（通院あり）
	var pet_prices_t = [
		// 犬 10kg未満
		[
			["1,930","20,980","2,480","27,070"],
			["1,810","19,750","2,320","25,360"],
			["1,700","18,540","2,170","23,660"],
			["1,910","20,880","2,470","26,930"],
			["2,130","23,210","2,770","30,200"],
			["2,340","25,540","3,060","33,460"],
			["2,910","31,770","3,870","42,190"],
			["3,480","37,980","4,670","50,880"],
			["4,050","44,210","5,470","59,600"],
			["4,650","50,630","6,290","68,580"],
			["5,230","57,040","7,110","77,560"]
		],
		// 犬 10kg以上
		[
			["3,130","34,190","4,170","45,560"],
			["2,970","32,330","3,940","42,960"],
			["2,790","30,490","3,710","40,390"],
			["3,090","33,750","4,120","44,950"],
			["3,400","37,030","4,540","49,530"],
			["3,700","40,270","4,950","54,090"],
			["4,470","48,800","6,050","66,010"],
			["5,250","57,300","7,140","77,930"],
			["6,030","65,830","8,240","89,850"],
			["6,940","75,770","9,510","103,780"],
			["7,850","85,730","10,790","117,730"]
		],
		// 犬 20kg以上
		[
			["3,720","40,580","5,000","54,510"],
			["3,470","37,850","4,640","50,690"],
			["3,220","35,130","4,300","46,880"],
			["3,610","39,380","4,840","52,840"],
			["4,010","43,660","5,390","58,820"],
			["4,390","47,900","5,940","64,770"],
			["5,330","58,110","7,240","79,040"],
			["6,260","68,290","8,560","93,310"],
			["7,190","78,500","9,860","107,590"],
			["8,350","91,030","11,470","125,150"],
			["9,500","103,590","13,090","142,720"]
		],
		// 猫
		[
			["1,690","18,470","2,160","23,550"],
			["1,650","17,960","2,090","22,850"],
			["1,600","17,470","2,030","22,170"],
			["1,750","19,130","2,240","24,480"],
			["1,900","20,800","2,450","26,820"],
			["2,050","22,460","2,670","29,140"],
			["2,310","25,260","3,030","33,060"],
			["2,570","28,050","3,380","36,980"],
			["2,830","30,860","3,750","40,890"],
			["3,330","36,290","4,440","48,500"],
			["3,830","41,730","5,140","56,120"]
		]
	];
// 品種コード[品種コード,品種名,料率区分,ペット種類]
	var pet_breed = {
		"001":["001","アーフェンピンシャー","1","1"],
		"002":["002","アイリッシュ・ウルフハウンド","3","1"],
		"003":["003","アイリッシュ・セター","3","1"],
		"004":["004","アイリッシュ・ソフトコーテッド・ウィートン・テリア","2","1"],
		"005":["005","秋田","3","1"],
		"006":["006","アフガン・ハウンド","3","1"],
		"007":["007","アメリカン・アキタ","3","1"],
		"008":["008","アメリカン・コッカー・スパニエル","2","1"],
		"009":["009","アメリカン・スタッフォードシャー・テリア","2","1"],
		"010":["010","アメリカン・フォックスハウンド","3","1"],
		"011":["011","アラスカン・マラミュート","3","1"],
		"012":["012","イタリアン・グレーハウンド","2","1"],
		"013":["013","イングリッシュ・コッカー・スパニエル","2","1"],
		"014":["014","イングリッシュ・スプリンガー・スパニエル","3","1"],
		"015":["015","イングリッシュ・セター","3","1"],
		"016":["016","イングリッシュ・ポインター","3","1"],
		"017":["017","ウィペット","2","1"],
		"018":["018","ウエスト・ハイランド・ホワイト・テリア","2","1"],
		"019":["019","ウェルシュ・コーギー・カーディガン","1","1"],
		"020":["020","ウェルシュ・コーギー・ペンブローク","1","1"],
		"021":["021","ウェルシュ・テリア","1","1"],
		"022":["022","エアデール・テリア","3","1"],
		"023":["023","オーストラリアン・キャトルドッグ","2","1"],
		"024":["024","オーストラリアン・ケルピー","2","1"],
		"025":["025","オーストラリアン・シェパード","3","1"],
		"026":["026","オーストラリアン・シルキー・テリア","1","1"],
		"027":["027","オーストラリアン・テリア","1","1"],
		"028":["028","オールド・イングリッシュ・シープドッグ","3","1"],
		"029":["029","カニーンヘン・ダックスフンド","1","1"],
		"030":["030","カーリーコーテッド・レトリーバー","3","1"],
		"031":["031","甲斐","2","1"],
		"032":["032","キースホンド","2","1"],
		"033":["033","紀州","3","1"],
		"034":["034","キャバリア・キング・チャールズ・スパニエル","2","1"],
		"035":["035","キング・チャールズ・スパニエル","1","1"],
		"036":["036","グレート・デーン","3","1"],
		"037":["037","グレート・ピレニーズ","3","1"],
		"038":["038","グレーハウンド","3","1"],
		"039":["039","クロアチアン・シープドッグ","2","1"],
		"040":["040","ケアーン・テリア","1","1"],
		"041":["041","ケリー・ブルー・テリア","2","1"],
		"042":["042","コーイケルホンディエ","1","1"],
		"043":["043","ゴードン・セター","3","1"],
		"044":["044","ゴールデン・レトリーバー","3","1"],
		"045":["045","コリー","3","1"],
		"046":["046","サモエド","3","1"],
		"047":["047","サルーキ","3","1"],
		"048":["048","シー・ズー","1","1"],
		"049":["049","シーリハム・テリア","1","1"],
		"050":["050","シェットランド・シープドッグ","2","1"],
		"051":["051","四国","3","1"],
		"052":["052","柴","1","1"],
		"053":["053","シベリアン・ハスキー","3","1"],
		"054":["054","シャー・ペイ","3","1"],
		"055":["055","ジャーマン・シェパード・ドッグ","3","1"],
		"056":["056","ジャーマン・ハンティング・テリア","2","1"],
		"057":["057","ジャーマン・ポインター","3","1"],
		"058":["058","ジャイアント・シュナウザー","3","1"],
		"059":["059","ジャック・ラッセル・テリア","1","1"],
		"060":["060","ショートヘアード・ハンガリアン・ビズラ","3","1"],
		"061":["061","スカイ・テリア","2","1"],
		"062":["062","スキッパーキ","1","1"],
		"063":["063","スコティッシュ・テリア","2","1"],
		"064":["064","スタッフォードシャー・ブル・テリア","2","1"],
		"065":["065","スタンダード・シュナウザー","2","1"],
		"066":["066","セント・バーナード","3","1"],
		"067":["067","ダックスフンド(カニーンヘン・ミニチュア)","1","1"],
		"068":["068","ダックスフンド（スタンダード)","2","1"],
		"069":["069","ダルメシアン","3","1"],
		"070":["070","ダンディ・ディンモント・テリア","1","1"],
		"071":["071","チェサピーク・ベイ・レトリーバー","3","1"],
		"072":["072","チベタン・スパニエル","1","1"],
		"073":["073","チベタン・テリア","2","1"],
		"074":["074","チベタン・マスティフ","3","1"],
		"075":["075","チャイニーズ・クレステッド・ドッグ","1","1"],
		"076":["076","チャウ・チャウ","3","1"],
		"077":["077","チワワ","1","1"],
		"078":["078","狆","1","1"],
		"079":["079","トイ・プードル","1","1"],
		"080":["080","トイ・マンチェスター・テリア","1","1"],
		"081":["081","ドーベルマン","3","1"],
		"082":["082","ドゴ・アルヘンティーノ","3","1"],
		"083":["083","ドゴ・カナリオ","3","1"],
		"084":["084","土佐","3","1"],
		"085":["085","ナポリタン・マスティフ","3","1"],
		"086":["086","ニューファンドランド","3","1"],
		"087":["087","日本スピッツ","1","1"],
		"088":["088","日本テリア","1","1"],
		"089":["089","ノーフォーク・テリア","1","1"],
		"090":["090","ノーリッチ・テリア","1","1"],
		"091":["091","パーソン・ラッセル・テリア","1","1"],
		"092":["092","バーニーズ・マウンテン・ドッグ","3","1"],
		"093":["093","パグ","2","1"],
		"094":["094","バセット・ハウンド","3","1"],
		"095":["095","バセンジー","1","1"],
		"096":["096","ハバニーズ","1","1"],
		"097":["097","パピヨン","1","1"],
		"098":["098","ハリア","3","1"],
		"099":["099","ビアデッド・コリー","3","1"],
		"100":["100","ビーグル","2","1"],
		"101":["101","ビション・フリーゼ","2","1"],
		"102":["102","ピレニアン・シープドッグ","2","1"],
		"103":["103","ピレニアン・マスティフ","3","1"],
		"104":["104","プードル(トイ・ミニチュア)","1","1"],
		"105":["105","プードル（ミディアム・スタンダード)","2","1"],
		"106":["106","ブービエ・デ・フランダース","3","1"],
		"107":["107","プーリー","2","1"],
		"108":["108","プチ・バセット・グリフォン・バンデーン","2","1"],
		"109":["109","プチ・ブラバンソン","2","1"],
		"110":["110","フラットコーテッド・レトリーバー","3","1"],
		"111":["111","ブリアード","3","1"],
		"112":["112","ブリタニー・スパニエル","2","1"],
		"113":["113","ブリュッセル・グリフォン","1","1"],
		"114":["114","ブル・テリア","3","1"],
		"115":["115","ブルドッグ","3","1"],
		"116":["116","ブルマスティフ","3","1"],
		"117":["117","フレンチ・ブルドッグ","2","1"],
		"118":["118","ペキニーズ","2","1"],
		"119":["119","ベドリントン・テリア","1","1"],
		"120":["120","ベルジアン・グリフォン","1","1"],
		"121":["121","ベルジアン・シェパード・ドッグ・グローネンダール","3","1"],
		"122":["122","ベルジアン・シェパード・ドッグ・タービュレン","3","1"],
		"123":["123","ベルジアン・シェパード・ドッグ・マリノア","3","1"],
		"124":["124","ベルジアン・シェパード・ドッグ・ラケノア","3","1"],
		"125":["125","ボーダー・コリー","2","1"],
		"126":["126","ボーダー・テリア","1","1"],
		"127":["127","ポーチュギーズ・ウォーター･ドッグ","2","1"],
		"128":["128","ボクサー","3","1"],
		"129":["129","ボストン・テリア","2","1"],
		"130":["130","北海道","2","1"],
		"131":["131","ポメラニアン","1","1"],
		"132":["132","ポリッシュ・ローランド・シープドッグ","2","1"],
		"133":["133","ボルゾイ","3","1"],
		"134":["134","ボルドー・マスティフ","3","1"],
		"135":["135","ボロニーズ","1","1"],
		"136":["136","ホワイト・スイス・シェパード・ドッグ","3","1"],
		"137":["137","マスティフ","3","1"],
		"138":["138","マルチーズ","1","1"],
		"139":["139","マンチェスター・テリア","1","1"],
		"140":["140","ミニチュア・シュナウザー","1","1"],
		"141":["141","ミニチュア・ダックスフンド","1","1"],
		"142":["142","ミニチュア・ピンシャー","2","1"],
		"143":["143","ミニチュア・プードル","1","1"],
		"144":["144","ミニチュア・ブル・テリア","2","1"],
		"145":["145","ヨークシャー・テリア","1","1"],
		"146":["146","ラージ・ミュンスターレンダー","3","1"],
		"147":["147","ラサ・アプソ","2","1"],
		"148":["148","ラブラドール・レトリーバー","3","1"],
		"149":["149","レークランド・テリア","1","1"],
		"150":["150","レオンベルガー","3","1"],
		"151":["151","ローデシアン・リジバック","3","1"],
		"152":["152","ロシアン・トイ","1","1"],
		"153":["153","ロットワイラー","3","1"],
		"154":["154","ワイアー・フォックス・テリア","2","1"],
		"155":["155","ワイマラナー","3","1"],
		"300":["300","混血犬(10kg未満)","1","1"],
		"301":["301","混血犬(10kg以上20kg未満)","2","1"],
		"302":["302","混血犬(20kg以上)","3","1"],
		"400":["400","アビシニアン","4","2"],
		"401":["401","アメリカン・カール","4","2"],
		"402":["402","アメリカン・カール・ショートヘア","4","2"],
		"403":["403","アメリカン・カール・ロングヘア","4","2"],
		"404":["404","アメリカン・ショートヘア","4","2"],
		"405":["405","アメリカン・ボブテイル","4","2"],
		"406":["406","アメリカン・ボブテイル・ショートヘア","4","2"],
		"407":["407","アメリカン・ワイヤーヘア","4","2"],
		"408":["408","エキゾチック","4","2"],
		"409":["409","エキゾチック・ショートヘア","4","2"],
		"410":["410","エジプシャン・マウ","4","2"],
		"411":["411","オシキャット","4","2"],
		"412":["412","オホースアズーレス","4","2"],
		"413":["413","オホースアズーレス・ロングヘア","4","2"],
		"414":["414","オリエンタル","4","2"],
		"415":["415","オリエンタル・ショートヘア","4","2"],
		"416":["416","オリエンタル・ロングヘア","4","2"],
		"417":["417","カラーポイント・ショートヘア","4","2"],
		"418":["418","カリフォルニアスパングルド","4","2"],
		"419":["419","キムリック","4","2"],
		"420":["420","クリル・アイランド・ボブテイル","4","2"],
		"421":["421","コーニッシュ・レックス","4","2"],
		"422":["422","コラット","4","2"],
		"423":["423","サイベリアン","4","2"],
		"424":["424","サバンナ","4","2"],
		"425":["425","ジャバニーズ","4","2"],
		"426":["426","ジャパニーズ・ボブテイル","4","2"],
		"427":["427","ジャパニーズ・ボブテイル・ロングヘア","4","2"],
		"428":["428","シャム","4","2"],
		"429":["429","シャルトリュー","4","2"],
		"430":["430","シャンティリィ/ティファニー","4","2"],
		"431":["431","シンガプーラ","4","2"],
		"432":["432","スコティッシュ・フォールド","4","2"],
		"433":["433","スコティッシュ・フォールド・ロングヘア","4","2"],
		"434":["434","スノーシュー","4","2"],
		"435":["435","スフィンクス","4","2"],
		"436":["436","スポッテッド・ミスト","4","2"],
		"437":["437","セルカーク・レックス","4","2"],
		"438":["438","セルカーク・レックス・ロングヘア","4","2"],
		"439":["439","セレンゲティ","4","2"],
		"440":["440","ソマリ","4","2"],
		"441":["441","ターキッシュ・アンゴラ","4","2"],
		"442":["442","ターキッシュ・バン","4","2"],
		"443":["443","チャウシー","4","2"],
		"444":["444","ティファニー","4","2"],
		"445":["445","デボン・レックス","4","2"],
		"446":["446","トイガー","4","2"],
		"447":["447","トンキニーズ","4","2"],
		"448":["448","ドンスコイ","4","2"],
		"449":["449","日本猫","4","2"],
		"450":["450","ネーベロング","4","2"],
		"451":["451","ノルウェージャン・フォレスト・キャット","4","2"],
		"452":["452","バーマン","4","2"],
		"453":["453","バーミーズ","4","2"],
		"454":["454","ハバナ","4","2"],
		"455":["455","ハバナ・ブラウン","4","2"],
		"456":["456","バリニーズ","4","2"],
		"457":["457","ピーターボールド","4","2"],
		"458":["458","ピクシーボブ","4","2"],
		"459":["459","ピクシーボブ・ロングヘア","4","2"],
		"460":["460","ヒマラヤン","4","2"],
		"461":["461","ブリティッシュ・ショートヘアー","4","2"],
		"462":["462","ブリティッシュ・ロングヘア","4","2"],
		"463":["463","ペルシャ","4","2"],
		"464":["464","ペルシャ(チンチラ)","4","2"],
		"465":["465","ベンガル","4","2"],
		"466":["466","ボンベイ","4","2"],
		"467":["467","マンクス","4","2"],
		"468":["468","マンチカン","4","2"],
		"469":["469","マンチカン・ロングヘアー","4","2"],
		"470":["470","メイン・クーン","4","2"],
		"471":["471","ヨーロピアン・ショートヘアー","4","2"],
		"472":["472","ヨーロピアン・バーミーズ","4","2"],
		"473":["473","ラ・パーム","4","2"],
		"474":["474","ラ・パーム・ショートヘア","4","2"],
		"475":["475","ラガマフィン","4","2"],
		"476":["476","ラグドール","4","2"],
		"477":["477","ロシアンブルー","4","2"],
		"999":["999","猫","4","2"] //見積もり用
	};




document.addEventListener("DOMContentLoaded", function () {
  //==============================
  // お見積もりセレクトボックス（日数選択時および人数選択時の処理）
  //==============================
  if (document.getElementById("people_box")) {
    document.getElementById("people_box").value = 1;
    document.getElementById("day_box").value = 3;
    document.getElementById("mitsumori_family").style.display = "none";
    document.getElementById("mitsumori_oneself").style.display = "block";
    document.getElementById("kaigai_table_family").style.display = "none";
    document.getElementById("kaigai_table_oneself").style.display = "block";
    calculate();

    //保険料見積もり　切り替え
    document.querySelectorAll("#day_box,#people_box").forEach((tab) => {
      document.addEventListener("change", function (event) {
        var people = document.getElementById("people_box").value;
        var day = document.getElementById("day_box").value;

        if (people == 1) {
          document.getElementById("mitsumori_family").style.display = "none";
          document.getElementById("mitsumori_oneself").style.display = "block";
          document.getElementById("kaigai_table_family").style.display = "none";
          document.getElementById("kaigai_table_oneself").style.display = "block";
        } else {
          document.getElementById("mitsumori_family").style.display = "block";
          document.getElementById("mitsumori_oneself").style.display = "none";
          document.getElementById("kaigai_table_family").style.display = "block";
          document.getElementById("kaigai_table_oneself").style.display = "none";
        }
        calculate();
      });
    });
  }
});

// 保険料を計算して表示します
function calculate() {
  var n = document.getElementById("people_box").value;
  var v = document.getElementById("day_box").value;

  // 念のためパラメータチェック
  if (v < 1 || 31 < v || n < 1 || 5 < n) {
    return false;
  }

  var arrayN = n - 1;
  var arrayV = v - 1;

  //見積もり用保険料表書き換え
  document.getElementById("m_h_br").innerHTML = kaigai_price[arrayN][arrayV][0];
  document.getElementById("m_h_si").innerHTML = kaigai_price[arrayN][arrayV][1];
  document.getElementById("m_h_go").innerHTML = kaigai_price[arrayN][arrayV][2];

  document.getElementById("m_b_br").innerHTML = kaigai_price[arrayN][arrayV][3];
  document.getElementById("m_b_si").innerHTML = kaigai_price[arrayN][arrayV][4];
  document.getElementById("m_b_go").innerHTML = kaigai_price[arrayN][arrayV][5];

  document.getElementById("m_f_br").innerHTML = kaigai_price[arrayN][arrayV][0];
  document.getElementById("m_f_si").innerHTML = kaigai_price[arrayN][arrayV][1];
  document.getElementById("m_f_go").innerHTML = kaigai_price[arrayN][arrayV][2];
}

var kaigai_price = [
  //契被同一(0,1,2,6カラム目)/契被別人(3,4,5,7カラム目)
  [
    ["1,037", "1,383", "1,898", "1,037", "1,218", "1,403", "　1日　　1,037　　1,383　　1,898", "　1日　　1,037　　1,218　　1,403"],
    ["1,184", "1,553", "2,113", "1,184", "1,378", "1,588", "　2日　　1,184　　1,553　　2,113", "　2日　　1,184　　1,378　　1,588"],
    ["1,369", "1,754", "2,350", "1,369", "1,574", "1,810", "　3日　　1,369　　1,754　　2,350", "　3日　　1,369　　1,574　　1,810"],
    ["1,558", "1,968", "2,611", "1,558", "1,778", "2,041", "　4日　　1,558　　1,968　　2,611", "　4日　　1,558　　1,778　　2,041"],
    ["1,950", "2,458", "3,269", "1,950", "2,223", "2,564", "　5日　　1,950　　2,458　　3,269", "　5日　　1,950　　2,223　　2,564"],
    ["2,225", "2,800", "3,721", "2,225", "2,535", "2,926", "　6日　　2,225　　2,800　　3,721", "　6日　　2,225　　2,535　　2,926"],
    ["2,548", "3,137", "4,179", "2,548", "2,867", "3,369", "　7日　　2,548　　3,137　　4,179", "　7日　　2,548　　2,867　　3,369"],
    ["2,798", "3,422", "4,544", "2,798", "3,137", "3,689", "　8日　　2,798　　3,422　　4,544", "　8日　　2,798　　3,137　　3,689"],
    ["3,163", "3,805", "5,029", "3,163", "3,515", "4,159", "　9日　　3,163　　3,805　　5,029", "　9日　　3,163　　3,515　　4,159"],
    ["3,424", "4,091", "5,393", "3,424", "3,791", "4,493", "　10日　　3,424　　4,091　　5,393", "　10日　　3,424　　3,791　　4,493"],
    ["3,673", "4,367", "5,736", "3,673", "4,057", "4,806", "　11日　　3,673　　4,367　　5,736", "　11日　　3,673　　4,057　　4,806"],
    ["3,804", "4,511", "5,912", "3,804", "4,196", "4,967", "　12日　　3,804　　4,511　　5,912", "　12日　　3,804　　4,196　　4,967"],
    ["4,054", "4,807", "6,295", "4,054", "4,472", "5,290", "　13日　　4,054　　4,807　　6,295", "　13日　　4,054　　4,472　　5,290"],
    ["4,275", "5,044", "6,583", "4,275", "4,704", "5,563", "　14日　　4,275　　5,044　　6,583", "　14日　　4,275　　4,704　　5,563"],
    ["4,487", "5,282", "6,877", "4,487", "4,932", "5,827", "　15日　　4,487　　5,282　　6,877", "　15日　　4,487　　4,932　　5,827"],
    ["4,937", "5,804", "7,521", "4,937", "5,424", "6,381", "　16日　　4,937　　5,804　　7,521", "　16日　　4,937　　5,424　　6,381"],
    ["4,937", "5,804", "7,521", "4,937", "5,424", "6,381", "　17日　　4,937　　5,804　　7,521", "　17日　　4,937　　5,424　　6,381"],
    ["5,687", "6,647", "8,520", "5,687", "6,232", "7,275", "　18日　　5,687　　6,647　　8,520", "　18日　　5,687　　6,232　　7,275"],
    ["5,687", "6,647", "8,520", "5,687", "6,232", "7,275", "　19日　　5,687　　6,647　　8,520", "　19日　　5,687　　6,232　　7,275"],
    ["6,470", "7,516", "9,528", "6,470", "7,071", "8,193", "　20日　　6,470　　7,516　　9,528", "　20日　　6,470　　7,071　　8,193"],
    ["6,470", "7,516", "9,528", "6,470", "7,071", "8,193", "　21日　　6,470　　7,516　　9,528", "　21日　　6,470　　7,071　　8,193"],
    ["7,113", "8,287", "10,474", "7,113", "7,787", "8,974", "　22日　　7,113　　8,287　　10,474", "　22日　　7,113　　7,787　　8,974"],
    ["7,113", "8,287", "10,474", "7,113", "7,787", "8,974", "　23日　　7,113　　8,287　　10,474", "　23日　　7,113　　7,787　　8,974"],
    ["7,755", "9,039", "11,384", "7,755", "8,494", "9,749", "　24日　　7,755　　9,039　　11,384", "　24日　　7,755　　8,494　　9,749"],
    ["7,755", "9,039", "11,384", "7,755", "8,494", "9,749", "　25日　　7,755　　9,039　　11,384", "　25日　　7,755　　8,494　　9,749"],
    ["8,509", "9,916", "12,440", "8,509", "9,321", "10,655", "　26日　　8,509　　9,916　　12,440", "　26日　　8,509　　9,321　　10,655"],
    ["8,509", "9,916", "12,440", "8,509", "9,321", "10,655", "　27日　　8,509　　9,916　　12,440", "　27日　　8,509　　9,321　　10,655"],
    ["9,419", "10,945", "13,645", "9,419", "10,305", "11,725", "　28日　　9,419　　10,945　　13,645", "　28日　　9,419　　10,305　　11,725"],
    ["9,419", "10,945", "13,645", "9,419", "10,305", "11,725", "　29日　　9,419　　10,945　　13,645", "　29日　　9,419　　10,305　　11,725"],
    ["10,492", "12,154", "15,053", "10,492", "11,464", "12,983", "　30日　　10,492　　12,154　　15,053", "　30日　　10,492　　11,464　　12,983"],
    ["10,492", "12,154", "15,053", "10,492", "11,464", "12,983", "　31日　　10,492　　12,154　　15,053", "　31日　　10,492　　11,464　　12,983"],
  ],

  //連生2人
  [
    ["1,616", "2,107", "2,553", "", "", "", "　1日　　1,616　　2,107　　2,553", ""],
    ["1,874", "2,401", "2,886", "", "", "", "　2日　　1,874　　2,401　　2,886", ""],
    ["2,205", "2,763", "3,279", "", "", "", "　3日　　2,205　　2,763　　3,279", ""],
    ["2,534", "3,127", "3,686", "", "", "", "　4日　　2,534　　3,127　　3,686", ""],
    ["3,231", "3,974", "4,676", "", "", "", "　5日　　3,231　　3,974　　4,676", ""],
    ["3,701", "4,535", "5,332", "", "", "", "　6日　　3,701　　4,535　　5,332", ""],
    ["4,234", "5,096", "5,968", "", "", "", "　7日　　4,234　　5,096　　5,968", ""],
    ["4,664", "5,576", "6,513", "", "", "", "　8日　　4,664　　5,576　　6,513", ""],
    ["5,288", "6,234", "7,240", "", "", "", "　9日　　5,288　　6,234　　7,240", ""],
    ["5,737", "6,719", "7,783", "", "", "", "　10日　　5,737　　6,719　　7,783", ""],
    ["6,166", "7,190", "8,309", "", "", "", "　11日　　6,166　　7,190　　8,309", ""],
    ["6,404", "7,454", "8,600", "", "", "", "　12日　　6,404　　7,454　　8,600", ""],
    ["6,833", "7,944", "9,163", "", "", "", "　13日　　6,833　　7,944　　9,163", ""],
    ["7,219", "8,355", "9,614", "", "", "", "　14日　　7,219　　8,355　　9,614", ""],
    ["7,597", "8,775", "10,080", "", "", "", "　15日　　7,597　　8,775　　10,080", ""],
    ["8,355", "9,639", "11,054", "", "", "", "　16日　　8,355　　9,639　　11,054", ""],
    ["8,355", "9,639", "11,054", "", "", "", "　17日　　8,355　　9,639　　11,054", ""],
    ["9,627", "11,046", "12,607", "", "", "", "　18日　　9,627　　11,046　　12,607", ""],
    ["9,627", "11,046", "12,607", "", "", "", "　19日　　9,627　　11,046　　12,607", ""],
    ["10,953", "12,500", "14,199", "", "", "", "　20日　　10,953　　12,500　　14,199", ""],
    ["10,953", "12,500", "14,199", "", "", "", "　21日　　10,953　　12,500　　14,199", ""],
    ["12,056", "13,791", "15,662", "", "", "", "　22日　　12,056　　13,791　　15,662", ""],
    ["12,056", "13,791", "15,662", "", "", "", "　23日　　12,056　　13,791　　15,662", ""],
    ["13,148", "15,037", "17,061", "", "", "", "　24日　　13,148　　15,037　　17,061", ""],
    ["13,148", "15,037", "17,061", "", "", "", "　25日　　13,148　　15,037　　17,061", ""],
    ["14,423", "16,487", "18,683", "", "", "", "　26日　　14,423　　16,487　　18,683", ""],
    ["14,423", "16,487", "18,683", "", "", "", "　27日　　14,423　　16,487　　18,683", ""],
    ["15,944", "18,177", "20,549", "", "", "", "　28日　　15,944　　18,177　　20,549", ""],
    ["15,944", "18,177", "20,549", "", "", "", "　29日　　15,944　　18,177　　20,549", ""],
    ["17,771", "20,211", "22,783", "", "", "", "　30日　　17,771　　20,211　　22,783", ""],
    ["17,771", "20,211", "22,783", "", "", "", "　31日　　17,771　　20,211　　22,783", ""],
  ],

  //連生3人
  [
    ["2,011", "2,647", "3,105", "", "", "", "　1日　　2,011　　2,647　　3,105", ""],
    ["2,358", "3,043", "3,544", "", "", "", "　2日　　2,358　　3,043　　3,544", ""],
    ["2,813", "3,544", "4,081", "", "", "", "　3日　　2,813　　3,544　　4,081", ""],
    ["3,259", "4,035", "4,620", "", "", "", "　4日　　3,259　　4,035　　4,620", ""],
    ["4,187", "5,165", "5,901", "", "", "", "　5日　　4,187　　5,165　　5,901", ""],
    ["4,808", "5,901", "6,739", "", "", "", "　6日　　4,808　　5,901　　6,739", ""],
    ["5,442", "6,577", "7,494", "", "", "", "　7日　　5,442　　6,577　　7,494", ""],
    ["6,005", "7,205", "8,193", "", "", "", "　8日　　6,005　　7,205　　8,193", ""],
    ["6,802", "8,052", "9,116", "", "", "", "　9日　　6,802　　8,052　　9,116", ""],
    ["7,385", "8,682", "9,809", "", "", "", "　10日　　7,385　　8,682　　9,809", ""],
    ["7,953", "9,307", "10,496", "", "", "", "　11日　　7,953　　9,307　　10,496", ""],
    ["8,277", "9,670", "10,889", "", "", "", "　12日　　8,277　　9,670　　10,889", ""],
    ["8,842", "10,311", "11,609", "", "", "", "　13日　　8,842　　10,311　　11,609", ""],
    ["9,355", "10,858", "12,202", "", "", "", "　14日　　9,355　　10,858　　12,202", ""],
    ["9,867", "11,428", "12,823", "", "", "", "　15日　　9,867　　11,428　　12,823", ""],
    ["10,881", "12,582", "14,098", "", "", "", "　16日　　10,881　　12,582　　14,098", ""],
    ["10,881", "12,582", "14,098", "", "", "", "　17日　　10,881　　12,582　　14,098", ""],
    ["12,604", "14,482", "16,163", "", "", "", "　18日　　12,604　　14,482　　16,163", ""],
    ["12,604", "14,482", "16,163", "", "", "", "　19日　　12,604　　14,482　　16,163", ""],
    ["14,416", "16,464", "18,305", "", "", "", "　20日　　14,416　　16,464　　18,305", ""],
    ["14,416", "16,464", "18,305", "", "", "", "　21日　　14,416　　16,464　　18,305", ""],
    ["15,928", "18,224", "20,254", "", "", "", "　22日　　15,928　　18,224　　20,254", ""],
    ["15,928", "18,224", "20,254", "", "", "", "　23日　　15,928　　18,224　　20,254", ""],
    ["17,417", "19,911", "22,111", "", "", "", "　24日　　17,417　　19,911　　22,111", ""],
    ["17,417", "19,911", "22,111", "", "", "", "　25日　　17,417　　19,911　　22,111", ""],
    ["19,149", "21,870", "24,262", "", "", "", "　26日　　19,149　　21,870　　24,262", ""],
    ["19,149", "21,870", "24,262", "", "", "", "　27日　　19,149　　21,870　　24,262", ""],
    ["21,222", "24,162", "26,754", "", "", "", "　28日　　21,222　　24,162　　26,754", ""],
    ["21,222", "24,162", "26,754", "", "", "", "　29日　　21,222　　24,162　　26,754", ""],
    ["23,726", "26,944", "29,764", "", "", "", "　30日　　23,726　　26,944　　29,764", ""],
    ["23,726", "26,944", "29,764", "", "", "", "　31日　　23,726　　26,944　　29,764", ""],
  ],

  //連生4人
  [
    ["2,406", "3,187", "3,657", "", "", "", "　1日　　2,406　　3,187　　3,657", ""],
    ["2,842", "3,685", "4,202", "", "", "", "　2日　　2,842　　3,685　　4,202", ""],
    ["3,421", "4,325", "4,883", "", "", "", "　3日　　3,421　　4,325　　4,883", ""],
    ["3,984", "4,943", "5,554", "", "", "", "　4日　　3,984　　4,943　　5,554", ""],
    ["5,143", "6,356", "7,126", "", "", "", "　5日　　5,143　　6,356　　7,126", ""],
    ["5,915", "7,267", "8,146", "", "", "", "　6日　　5,915　　7,267　　8,146", ""],
    ["6,650", "8,058", "9,020", "", "", "", "　7日　　6,650　　8,058　　9,020", ""],
    ["7,346", "8,834", "9,873", "", "", "", "　8日　　7,346　　8,834　　9,873", ""],
    ["8,316", "9,870", "10,992", "", "", "", "　9日　　8,316　　9,870　　10,992", ""],
    ["9,033", "10,645", "11,835", "", "", "", "　10日　　9,033　　10,645　　11,835", ""],
    ["9,740", "11,424", "12,683", "", "", "", "　11日　　9,740　　11,424　　12,683", ""],
    ["10,150", "11,886", "13,178", "", "", "", "　12日　　10,150　　11,886　　13,178", ""],
    ["10,851", "12,678", "14,055", "", "", "", "　13日　　10,851　　12,678　　14,055", ""],
    ["11,491", "13,361", "14,790", "", "", "", "　14日　　11,491　　13,361　　14,790", ""],
    ["12,137", "14,081", "15,566", "", "", "", "　15日　　12,137　　14,081　　15,566", ""],
    ["13,407", "15,525", "17,142", "", "", "", "　16日　　13,407　　15,525　　17,142", ""],
    ["13,407", "15,525", "17,142", "", "", "", "　17日　　13,407　　15,525　　17,142", ""],
    ["15,581", "17,918", "19,719", "", "", "", "　18日　　15,581　　17,918　　19,719", ""],
    ["15,581", "17,918", "19,719", "", "", "", "　19日　　15,581　　17,918　　19,719", ""],
    ["17,879", "20,428", "22,411", "", "", "", "　20日　　17,879　　20,428　　22,411", ""],
    ["17,879", "20,428", "22,411", "", "", "", "　21日　　17,879　　20,428　　22,411", ""],
    ["19,800", "22,657", "24,846", "", "", "", "　22日　　19,800　　22,657　　24,846", ""],
    ["19,800", "22,657", "24,846", "", "", "", "　23日　　19,800　　22,657　　24,846", ""],
    ["21,686", "24,785", "27,161", "", "", "", "　24日　　21,686　　24,785　　27,161", ""],
    ["21,686", "24,785", "27,161", "", "", "", "　25日　　21,686　　24,785　　27,161", ""],
    ["23,875", "27,253", "29,841", "", "", "", "　26日　　23,875　　27,253　　29,841", ""],
    ["23,875", "27,253", "29,841", "", "", "", "　27日　　23,875　　27,253　　29,841", ""],
    ["26,500", "30,147", "32,959", "", "", "", "　28日　　26,500　　30,147　　32,959", ""],
    ["26,500", "30,147", "32,959", "", "", "", "　29日　　26,500　　30,147　　32,959", ""],
    ["29,681", "33,677", "36,745", "", "", "", "　30日　　29,681　　33,677　　36,745", ""],
    ["29,681", "33,677", "36,745", "", "", "", "　31日　　29,681　　33,677　　36,745", ""],
  ],

  //連生5人
  [
    ["2,801", "3,727", "4,209", "", "", "", "　1日　　2,801　　3,727　　4,209", ""],
    ["3,326", "4,327", "4,860", "", "", "", "　2日　　3,326　　4,327　　4,860", ""],
    ["4,029", "5,106", "5,685", "", "", "", "　3日　　4,029　　5,106　　5,685", ""],
    ["4,709", "5,851", "6,488", "", "", "", "　4日　　4,709　　5,851　　6,488", ""],
    ["6,099", "7,547", "8,351", "", "", "", "　5日　　6,099　　7,547　　8,351", ""],
    ["7,022", "8,633", "9,553", "", "", "", "　6日　　7,022　　8,633　　9,553", ""],
    ["7,858", "9,539", "10,546", "", "", "", "　7日　　7,858　　9,539　　10,546", ""],
    ["8,687", "10,463", "11,553", "", "", "", "　8日　　8,687　　10,463　　11,553", ""],
    ["9,830", "11,688", "12,868", "", "", "", "　9日　　9,830　　11,688　　12,868", ""],
    ["10,681", "12,608", "13,861", "", "", "", "　10日　　10,681　　12,608　　13,861", ""],
    ["11,527", "13,541", "14,870", "", "", "", "　11日　　11,527　　13,541　　14,870", ""],
    ["12,023", "14,102", "15,467", "", "", "", "　12日　　12,023　　14,102　　15,467", ""],
    ["12,860", "15,045", "16,501", "", "", "", "　13日　　12,860　　15,045　　16,501", ""],
    ["13,627", "15,864", "17,378", "", "", "", "　14日　　13,627　　15,864　　17,378", ""],
    ["14,407", "16,734", "18,309", "", "", "", "　15日　　14,407　　16,734　　18,309", ""],
    ["15,933", "18,468", "20,186", "", "", "", "　16日　　15,933　　18,468　　20,186", ""],
    ["15,933", "18,468", "20,186", "", "", "", "　17日　　15,933　　18,468　　20,186", ""],
    ["18,558", "21,354", "23,275", "", "", "", "　18日　　18,558　　21,354　　23,275", ""],
    ["18,558", "21,354", "23,275", "", "", "", "　19日　　18,558　　21,354　　23,275", ""],
    ["21,342", "24,392", "26,517", "", "", "", "　20日　　21,342　　24,392　　26,517", ""],
    ["21,342", "24,392", "26,517", "", "", "", "　21日　　21,342　　24,392　　26,517", ""],
    ["23,672", "27,090", "29,438", "", "", "", "　22日　　23,672　　27,090　　29,438", ""],
    ["23,672", "27,090", "29,438", "", "", "", "　23日　　23,672　　27,090　　29,438", ""],
    ["25,955", "29,659", "32,211", "", "", "", "　24日　　25,955　　29,659　　32,211", ""],
    ["25,955", "29,659", "32,211", "", "", "", "　25日　　25,955　　29,659　　32,211", ""],
    ["28,601", "32,636", "35,420", "", "", "", "　26日　　28,601　　32,636　　35,420", ""],
    ["28,601", "32,636", "35,420", "", "", "", "　27日　　28,601　　32,636　　35,420", ""],
    ["31,778", "36,132", "39,164", "", "", "", "　28日　　31,778　　36,132　　39,164", ""],
    ["31,778", "36,132", "39,164", "", "", "", "　29日　　31,778　　36,132　　39,164", ""],
    ["35,636", "40,410", "43,726", "", "", "", "　30日　　35,636　　40,410　　43,726", ""],
    ["35,636", "40,410", "43,726", "", "", "", "　31日　　35,636　　40,410　　43,726", ""],
  ],
];

/*----------------------------------------------------------
inoue トグルボタン（全て見る）機能 - 2023-12-04
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  if (document.getElementById("view-all")) {
    document.getElementById("view-all").addEventListener("click", function () {
      // hidden-link クラスを持つすべての要素を取得
      const hiddenLinks = document.querySelectorAll(".hidden-link");

      // 表示状態が変更されているかどうかを確認
      const isHidden = hiddenLinks[0].style.display === "none" || hiddenLinks[0].style.display === "";

      // hidden-link クラスを持つ要素の表示状態を切り替え
      hiddenLinks.forEach((link) => {
        link.style.display = isHidden ? "inline-block" : "none";
      });

      // ボタンのテキストを変更
      this.querySelector("a").textContent = isHidden ? "電子広告を少なく表示する" : "電子広告を全て見る";
    });
  }
});

//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  const tabContainer = document.querySelector(".c-tab2");
  const tabs = document.querySelectorAll(".c-tab2__item");
  const panels = document.querySelectorAll(".c-tab2__panel");
  if (tabContainer) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");

        // data-current属性を更新
        tabContainer.setAttribute("data-current", target);

        // タブのアクティブ状態をすべてのナビゲーションで同期
        tabs.forEach((t) => {
          t.classList.remove("is-current");
          if (t.getAttribute("data-tab") === target) {
            t.classList.add("is-current");
          }
        });

        // コンテンツパネルの表示を切り替え
        panels.forEach((panel) => {
          panel.classList.remove("is-current");
          if (panel.getAttribute("data-content") === target) {
            panel.classList.add("is-current");
          }
        });
      });
    });
  }
  const homeSplide1 = document.getElementById("js-home-splide-1");
  if (homeSplide1) {
    new Splide(homeSplide1, {
      type: "loop",
      fixedWidth: "49rem",
      perPage: 1,
      //gap: "2rem",
      arrows: false,
      pagination: true,
      focus: "center",
      breakpoints: {
        519: {
          fixedWidth: "18.5rem",
          gap: "0.75rem",
        },
      },
    }).mount();
  }
  const homeSplide2 = document.getElementById("js-home-splide-2");
  if (homeSplide2) {
    new Splide(homeSplide2, {
      type: "slide",
      fixedWidth: "16rem",
      perPage: 1,
      gap: "1rem",
      arrows: false,

      pagination: false,
      trimSpace: false,
      focus: "center",
      destroy: true,
      breakpoints: {
        519: {
          destroy: false,
          pagination: true,
        },
        520: {
          destroy: true,
        },
      },
    }).mount();
  }
  const homeSplide3 = document.getElementById("js-home-splide-3");
  if (homeSplide3) {
    new Splide(homeSplide3, {
      type: "slide",
      perPage: 4,
      gap: "1.5rem",
      arrows: false,

      pagination: true,
      breakpoints: {
        519: {
          fixedWidth: "16rem",
          perPage: 1,
          trimSpace: false,
          focus: "center",
          gap: "1rem",
        },
      },
    }).mount();
  }
  const homeSplide4 = document.getElementById("js-home-splide-4");
  if (homeSplide4) {
    new Splide(homeSplide4, {
      type: "slide",
      fixedWidth: "16rem",
      perPage: 1,
      gap: "1rem",
      arrows: false,

      pagination: false,
      //padding: { left: "3.25rem", right: "3.25rem" },
      trimSpace: false,
      focus: "center",
      destroy: true,
      breakpoints: {
        519: {
          destroy: false,
          pagination: true,
        },
        520: {
          destroy: true,
        },
      },
    }).mount();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let next_step2 = document.getElementById('next_step2');
  if (next_step2) {
    next_step2.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step1').style.display = 'none';
      document.getElementById('bycle_shindan_step2').style.display = 'flex';
    });
  }
  let next_step3 = document.getElementById('next_step3');
  if (next_step3) {
    next_step3.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step2').style.display = 'none';
      document.getElementById('bycle_shindan_step3').style.display = 'flex';
    });
  }
  let next_result = document.getElementById('next_result');
  if (next_result) {
    next_result.addEventListener('click', function (event) {
      let select_step1 = document.getElementsByName('select_step1');
      let step1_len = select_step1.length;
      let step1_val = '';
      for (let i = 0; i < step1_len; i++) {
        if (select_step1.item(i).checked) {
          step1_val = select_step1.item(i).value;
        }
      }
      let select_step2 = document.getElementsByName('select_step2');
      let step2_len = select_step2.length;
      let step2_val = '';
      for (let i = 0; i < step2_len; i++) {
        if (select_step2.item(i).checked) {
          step2_val = select_step2.item(i).value;
        }
      }
      let select_step3 = document.getElementsByName('select_step3');
      let step3_len = select_step3.length;
      let step3_val = '';
      for (let i = 0; i < step3_len; i++) {
        if (select_step3.item(i).checked) {
          step3_val = select_step3.item(i).value;
        }
      }
      console.log(step1_val);
      console.log(step2_val);
      console.log(step3_val);
      /* 配列の順番 ブロンズ[本人月払,一時払,家族月払,一時払,本人・親族月払,一時払],シルバー[],ゴールド[],個賠なし[] */
      var arrBycle = [
        [340, 3790, 680, 7440, 570, 6200],
        [590, 6410, 1280, 13980, 1030, 11300],
        [1130, 12300, 2010, 21980, 1680, 18470],
        [200, 2220, 530, 5850, 420, 4610],
      ];
      var arrBycleBest = [
        [780, 8480, 2300, 25010, 1850, 20060],
        [1470, 16050, 4600, 50260, 3620, 39520],
        [2260, 24590, 6280, 68440, 4990, 54330],
        [640, 6910, 2150, 23420, 1700, 18470],
      ];
      var tmpArr;
      if (step2_val == 'Bycle') {
        tmpArr = arrBycle;
        document.getElementById('result_type1').innerHTML = step1_val;
        document.getElementById('cource_type1').innerHTML = step3_val;
        document.getElementById('result_bycle1').style.display = 'block';
        document.getElementById('result_byclebest1').style.display = 'none';
        document.getElementById('result_bycle2').style.display = 'block';
        document.getElementById('result_byclebest2').style.display = 'none';
        document.getElementById('result_bycle3').style.display = 'block';
        document.getElementById('result_byclebest3').style.display = 'none';
      } else if (step2_val == 'BycleBest') {
        tmpArr = arrBycleBest;
        document.getElementById('result_type2').innerHTML = step1_val;
        document.getElementById('cource_type2').innerHTML = step3_val;
        document.getElementById('result_bycle1').style.display = 'none';
        document.getElementById('result_byclebest1').style.display = 'block';
        document.getElementById('result_bycle2').style.display = 'none';
        document.getElementById('result_byclebest2').style.display = 'block';
        document.getElementById('result_bycle3').style.display = 'none';
        document.getElementById('result_byclebest3').style.display = 'block';
      }

      var course_num;
      if (step3_val == 'ブロンズ') {
        course_num = 0;
        document.getElementById('result_img07_off').style.display = 'block';
        document.getElementById('result_img07_on').style.display = 'none';
        document.getElementById('result_img08_off').style.display = 'block';
        document.getElementById('result_img08_on').style.display = 'none';
        document.getElementById('result_img09_off').style.display = 'block';
        document.getElementById('result_img09_on').style.display = 'none';
        document.getElementById('result_img10_off').style.display = 'block';
        document.getElementById('result_img10_on').style.display = 'none';
        document.getElementById('result_img11_off').style.display = 'block';
        document.getElementById('result_img11_on').style.display = 'none';
      } else if (step3_val == 'シルバー') {
        course_num = 1;
        document.getElementById('result_img07_off').style.display = 'none';
        document.getElementById('result_img07_on').style.display = 'block';
        document.getElementById('result_img08_off').style.display = 'none';
        document.getElementById('result_img08_on').style.display = 'block';
        document.getElementById('result_img09_off').style.display = 'none';
        document.getElementById('result_img09_on').style.display = 'block';
        document.getElementById('result_img10_off').style.display = 'block';
        document.getElementById('result_img10_on').style.display = 'none';
        document.getElementById('result_img11_off').style.display = 'block';
        document.getElementById('result_img11_on').style.display = 'none';
      } else if (step3_val == 'ゴールド') {
        course_num = 2;
        document.getElementById('result_img07_off').style.display = 'none';
        document.getElementById('result_img07_on').style.display = 'block';
        document.getElementById('result_img08_off').style.display = 'none';
        document.getElementById('result_img08_on').style.display = 'block';
        document.getElementById('result_img09_off').style.display = 'none';
        document.getElementById('result_img09_on').style.display = 'block';
        document.getElementById('result_img10_off').style.display = 'none';
        document.getElementById('result_img10_on').style.display = 'block';
        document.getElementById('result_img11_off').style.display = 'none';
        document.getElementById('result_img11_on').style.display = 'block';
      }

      var price1;
      var price2;
      if (step1_val == '本人') {
        price1 = tmpArr[course_num][0];
        price2 = tmpArr[course_num][1];
      } else if (step1_val == '家族') {
        price1 = tmpArr[course_num][2];
        price2 = tmpArr[course_num][3];
      } else if (step1_val == '本人・親族') {
        price1 = tmpArr[course_num][4];
        price2 = tmpArr[course_num][5];
      }
      var price3 = Number(price1) * 12 - Number(price2);
      console.log(price1);
      console.log(price2);
      console.log(price3);
      document.getElementById('result_price1').innerHTML = Number(price1).toLocaleString();
      document.getElementById('result_price2').innerHTML = Number(price2).toLocaleString();
      document.getElementById('result_price3').innerHTML = Number(price3).toLocaleString();
      document.getElementById('bycle_shindan_result').style.display = 'block';
      document.getElementById('bycle_shindan_result').scrollIntoView();
    });
  }
  let shindan_restart = document.getElementById('shindan_restart');
  if (shindan_restart) {
    shindan_restart.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step3').style.display = 'none';
      document.getElementById('bycle_shindan_step1').style.display = 'flex';
      document.getElementById('bycle_shindan_result').style.display = 'none';
      document.getElementById('bycle_shindan_step1').scrollIntoView();
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
let promises = [];

// .p-popupクラスがbody要素に付与されていない場合の処理を追加
if (!html.classList.contains("p-popup")) {
  promises.push(loadComponent("/common_2024/component/layout/footer.html", ".l-main", "afterend"));
  promises.push(
    loadComponent("/common_2024/component/layout/header.html", "body", "afterbegin").then(() => {
      return loadComponent(determineNavComponent(currentUrl), ".l-header", "beforeend");
    })
  );
} else {
  promises.push(
    loadComponent("/common_2024/component/layout/header_popup.html", "body", "afterbegin").then(() => {
      return loadComponent(determineNavComponent(currentUrl), ".l-header", "beforeend");
    })
  );
}

// 常に実行される処理を追加
promises.push(loadComponent("/common_2024/component/head/meta.html", "head", "afterbegin"));
//promises.push(loadComponent("/common_2024/component/head/ogp.html", "head", "beforeend"));

Promise.all(promises)
  .then(() => {
    // data-component属性を持つ要素をすべて取得
    const dataComponentElements = document.querySelectorAll("[data-component]");
    // 各要素に対してコンポーネントを読み込む
    dataComponentElements.forEach((elm) => {
      const componentName = elm.getAttribute("data-component");
      const componentPath = `/common_2024/component/parts/${componentName}.html`;
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
