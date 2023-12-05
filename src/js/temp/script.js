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
  //バイクルのお客様の声のスライダー
  const byclebvoiceSlider = document.querySelector(".js-voice-slider"); // 対象となる要素を取得
  if (byclebvoiceSlider) {
    new Splide(byclebvoiceSlider, {
      perPage: 3,
      arrows: false,
      gap: "0.5rem",
      breakpoints: {
        520: {
          perPage: 1,
        },
      },
    }).mount();
  }
  //バイクルのお客様の声のスライダー
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
          padding: { right: "3rem" },
          type: "loop",
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

    // 初期状態でコンテンツを非表示にする
    accordionBody.style.display = 'none';

    const toggleAccordion = () => {
      slideToggle(accordionBody, toggleButton);

      // ボタンのテキストを切り替える
      const buttonText = toggleButton.innerText.trim();
      toggleButton.innerText = buttonText === '詳しくはこちら' ? '閉じる' : '詳しくはこちら';
    };

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




document.addEventListener('DOMContentLoaded', function() {

    //==============================
    // お見積もりセレクトボックス（日数選択時および人数選択時の処理）
    //==============================
	document.getElementById("people_box").value=1;
	document.getElementById("day_box").value=3;
	document.getElementById('mitsumori_family').style.display = "none";
	document.getElementById('mitsumori_oneself').style.display = "block";
	document.getElementById('kaigai_table_family').style.display = "none";
	document.getElementById('kaigai_table_oneself').style.display = "block";
    calculate();
	
	
    //保険料見積もり　切り替え
	document.querySelectorAll("#day_box,#people_box").forEach((tab) => {
		document.addEventListener("change", function (event) {
		
			var people = document.getElementById("people_box").value;
			var day = document.getElementById("day_box").value;

	        if(people == 1){
				document.getElementById('mitsumori_family').style.display = "none";
				document.getElementById('mitsumori_oneself').style.display = "block";
				document.getElementById('kaigai_table_family').style.display = "none";
				document.getElementById('kaigai_table_oneself').style.display = "block";
	        }else{
				document.getElementById('mitsumori_family').style.display = "block";
				document.getElementById('mitsumori_oneself').style.display = "none";
				document.getElementById('kaigai_table_family').style.display = "block";
				document.getElementById('kaigai_table_oneself').style.display = "none";
	        }
	        calculate();
	    });
    });

});

// 保険料を計算して表示します
function calculate(){

	var n = document.getElementById("people_box").value;
	var v = document.getElementById("day_box").value;

    // 念のためパラメータチェック
    if( v < 1 || 31 < v || n < 1 || 5 < n ){
        return false;
    }

    var arrayN = n - 1;
    var arrayV = v - 1;

    //見積もり用保険料表書き換え
    document.getElementById('m_h_br').innerHTML =  kaigai_price[arrayN][arrayV][0];
    document.getElementById('m_h_si').innerHTML =  kaigai_price[arrayN][arrayV][1];
    document.getElementById('m_h_go').innerHTML =  kaigai_price[arrayN][arrayV][2];

    document.getElementById('m_b_br').innerHTML =  kaigai_price[arrayN][arrayV][3];
    document.getElementById('m_b_si').innerHTML =  kaigai_price[arrayN][arrayV][4];
    document.getElementById('m_b_go').innerHTML =  kaigai_price[arrayN][arrayV][5];

    document.getElementById('m_f_br').innerHTML =  kaigai_price[arrayN][arrayV][0];
    document.getElementById('m_f_si').innerHTML =  kaigai_price[arrayN][arrayV][1];
    document.getElementById('m_f_go').innerHTML =  kaigai_price[arrayN][arrayV][2];
}




    var kaigai_price = [
        //契被同一(0,1,2,6カラム目)/契被別人(3,4,5,7カラム目)
        [
            ["1,037円","1,383円","1,898円","1,037円","1,218円","1,403円","　1日　　1,037円　　1,383円　　1,898円","　1日　　1,037円　　1,218円　　1,403円"],
            ["1,184円","1,553円","2,113円","1,184円","1,378円","1,588円","　2日　　1,184円　　1,553円　　2,113円","　2日　　1,184円　　1,378円　　1,588円"],
            ["1,369円","1,754円","2,350円","1,369円","1,574円","1,810円","　3日　　1,369円　　1,754円　　2,350円","　3日　　1,369円　　1,574円　　1,810円"],
            ["1,558円","1,968円","2,611円","1,558円","1,778円","2,041円","　4日　　1,558円　　1,968円　　2,611円","　4日　　1,558円　　1,778円　　2,041円"],
            ["1,950円","2,458円","3,269円","1,950円","2,223円","2,564円","　5日　　1,950円　　2,458円　　3,269円","　5日　　1,950円　　2,223円　　2,564円"],
            ["2,225円","2,800円","3,721円","2,225円","2,535円","2,926円","　6日　　2,225円　　2,800円　　3,721円","　6日　　2,225円　　2,535円　　2,926円"],
            ["2,548円","3,137円","4,179円","2,548円","2,867円","3,369円","　7日　　2,548円　　3,137円　　4,179円","　7日　　2,548円　　2,867円　　3,369円"],
            ["2,798円","3,422円","4,544円","2,798円","3,137円","3,689円","　8日　　2,798円　　3,422円　　4,544円","　8日　　2,798円　　3,137円　　3,689円"],
            ["3,163円","3,805円","5,029円","3,163円","3,515円","4,159円","　9日　　3,163円　　3,805円　　5,029円","　9日　　3,163円　　3,515円　　4,159円"],
            ["3,424円","4,091円","5,393円","3,424円","3,791円","4,493円","　10日　　3,424円　　4,091円　　5,393円","　10日　　3,424円　　3,791円　　4,493円"],
            ["3,673円","4,367円","5,736円","3,673円","4,057円","4,806円","　11日　　3,673円　　4,367円　　5,736円","　11日　　3,673円　　4,057円　　4,806円"],
            ["3,804円","4,511円","5,912円","3,804円","4,196円","4,967円","　12日　　3,804円　　4,511円　　5,912円","　12日　　3,804円　　4,196円　　4,967円"],
            ["4,054円","4,807円","6,295円","4,054円","4,472円","5,290円","　13日　　4,054円　　4,807円　　6,295円","　13日　　4,054円　　4,472円　　5,290円"],
            ["4,275円","5,044円","6,583円","4,275円","4,704円","5,563円","　14日　　4,275円　　5,044円　　6,583円","　14日　　4,275円　　4,704円　　5,563円"],
            ["4,487円","5,282円","6,877円","4,487円","4,932円","5,827円","　15日　　4,487円　　5,282円　　6,877円","　15日　　4,487円　　4,932円　　5,827円"],
            ["4,937円","5,804円","7,521円","4,937円","5,424円","6,381円","　16日　　4,937円　　5,804円　　7,521円","　16日　　4,937円　　5,424円　　6,381円"],
            ["4,937円","5,804円","7,521円","4,937円","5,424円","6,381円","　17日　　4,937円　　5,804円　　7,521円","　17日　　4,937円　　5,424円　　6,381円"],
            ["5,687円","6,647円","8,520円","5,687円","6,232円","7,275円","　18日　　5,687円　　6,647円　　8,520円","　18日　　5,687円　　6,232円　　7,275円"],
            ["5,687円","6,647円","8,520円","5,687円","6,232円","7,275円","　19日　　5,687円　　6,647円　　8,520円","　19日　　5,687円　　6,232円　　7,275円"],
            ["6,470円","7,516円","9,528円","6,470円","7,071円","8,193円","　20日　　6,470円　　7,516円　　9,528円","　20日　　6,470円　　7,071円　　8,193円"],
            ["6,470円","7,516円","9,528円","6,470円","7,071円","8,193円","　21日　　6,470円　　7,516円　　9,528円","　21日　　6,470円　　7,071円　　8,193円"],
            ["7,113円","8,287円","10,474円","7,113円","7,787円","8,974円","　22日　　7,113円　　8,287円　　10,474円","　22日　　7,113円　　7,787円　　8,974円"],
            ["7,113円","8,287円","10,474円","7,113円","7,787円","8,974円","　23日　　7,113円　　8,287円　　10,474円","　23日　　7,113円　　7,787円　　8,974円"],
            ["7,755円","9,039円","11,384円","7,755円","8,494円","9,749円","　24日　　7,755円　　9,039円　　11,384円","　24日　　7,755円　　8,494円　　9,749円"],
            ["7,755円","9,039円","11,384円","7,755円","8,494円","9,749円","　25日　　7,755円　　9,039円　　11,384円","　25日　　7,755円　　8,494円　　9,749円"],
            ["8,509円","9,916円","12,440円","8,509円","9,321円","10,655円","　26日　　8,509円　　9,916円　　12,440円","　26日　　8,509円　　9,321円　　10,655円"],
            ["8,509円","9,916円","12,440円","8,509円","9,321円","10,655円","　27日　　8,509円　　9,916円　　12,440円","　27日　　8,509円　　9,321円　　10,655円"],
            ["9,419円","10,945円","13,645円","9,419円","10,305円","11,725円","　28日　　9,419円　　10,945円　　13,645円","　28日　　9,419円　　10,305円　　11,725円"],
            ["9,419円","10,945円","13,645円","9,419円","10,305円","11,725円","　29日　　9,419円　　10,945円　　13,645円","　29日　　9,419円　　10,305円　　11,725円"],
            ["10,492円","12,154円","15,053円","10,492円","11,464円","12,983円","　30日　　10,492円　　12,154円　　15,053円","　30日　　10,492円　　11,464円　　12,983円"],
            ["10,492円","12,154円","15,053円","10,492円","11,464円","12,983円","　31日　　10,492円　　12,154円　　15,053円","　31日　　10,492円　　11,464円　　12,983円"]
        ],

        //連生2人
        [
            ["1,616円","2,107円","2,553円","","","","　1日　　1,616円　　2,107円　　2,553円",""],
            ["1,874円","2,401円","2,886円","","","","　2日　　1,874円　　2,401円　　2,886円",""],
            ["2,205円","2,763円","3,279円","","","","　3日　　2,205円　　2,763円　　3,279円",""],
            ["2,534円","3,127円","3,686円","","","","　4日　　2,534円　　3,127円　　3,686円",""],
            ["3,231円","3,974円","4,676円","","","","　5日　　3,231円　　3,974円　　4,676円",""],
            ["3,701円","4,535円","5,332円","","","","　6日　　3,701円　　4,535円　　5,332円",""],
            ["4,234円","5,096円","5,968円","","","","　7日　　4,234円　　5,096円　　5,968円",""],
            ["4,664円","5,576円","6,513円","","","","　8日　　4,664円　　5,576円　　6,513円",""],
            ["5,288円","6,234円","7,240円","","","","　9日　　5,288円　　6,234円　　7,240円",""],
            ["5,737円","6,719円","7,783円","","","","　10日　　5,737円　　6,719円　　7,783円",""],
            ["6,166円","7,190円","8,309円","","","","　11日　　6,166円　　7,190円　　8,309円",""],
            ["6,404円","7,454円","8,600円","","","","　12日　　6,404円　　7,454円　　8,600円",""],
            ["6,833円","7,944円","9,163円","","","","　13日　　6,833円　　7,944円　　9,163円",""],
            ["7,219円","8,355円","9,614円","","","","　14日　　7,219円　　8,355円　　9,614円",""],
            ["7,597円","8,775円","10,080円","","","","　15日　　7,597円　　8,775円　　10,080円",""],
            ["8,355円","9,639円","11,054円","","","","　16日　　8,355円　　9,639円　　11,054円",""],
            ["8,355円","9,639円","11,054円","","","","　17日　　8,355円　　9,639円　　11,054円",""],
            ["9,627円","11,046円","12,607円","","","","　18日　　9,627円　　11,046円　　12,607円",""],
            ["9,627円","11,046円","12,607円","","","","　19日　　9,627円　　11,046円　　12,607円",""],
            ["10,953円","12,500円","14,199円","","","","　20日　　10,953円　　12,500円　　14,199円",""],
            ["10,953円","12,500円","14,199円","","","","　21日　　10,953円　　12,500円　　14,199円",""],
            ["12,056円","13,791円","15,662円","","","","　22日　　12,056円　　13,791円　　15,662円",""],
            ["12,056円","13,791円","15,662円","","","","　23日　　12,056円　　13,791円　　15,662円",""],
            ["13,148円","15,037円","17,061円","","","","　24日　　13,148円　　15,037円　　17,061円",""],
            ["13,148円","15,037円","17,061円","","","","　25日　　13,148円　　15,037円　　17,061円",""],
            ["14,423円","16,487円","18,683円","","","","　26日　　14,423円　　16,487円　　18,683円",""],
            ["14,423円","16,487円","18,683円","","","","　27日　　14,423円　　16,487円　　18,683円",""],
            ["15,944円","18,177円","20,549円","","","","　28日　　15,944円　　18,177円　　20,549円",""],
            ["15,944円","18,177円","20,549円","","","","　29日　　15,944円　　18,177円　　20,549円",""],
            ["17,771円","20,211円","22,783円","","","","　30日　　17,771円　　20,211円　　22,783円",""],
            ["17,771円","20,211円","22,783円","","","","　31日　　17,771円　　20,211円　　22,783円",""]
        ],

        //連生3人
        [
            ["2,011円","2,647円","3,105円","","","","　1日　　2,011円　　2,647円　　3,105円",""],
            ["2,358円","3,043円","3,544円","","","","　2日　　2,358円　　3,043円　　3,544円",""],
            ["2,813円","3,544円","4,081円","","","","　3日　　2,813円　　3,544円　　4,081円",""],
            ["3,259円","4,035円","4,620円","","","","　4日　　3,259円　　4,035円　　4,620円",""],
            ["4,187円","5,165円","5,901円","","","","　5日　　4,187円　　5,165円　　5,901円",""],
            ["4,808円","5,901円","6,739円","","","","　6日　　4,808円　　5,901円　　6,739円",""],
            ["5,442円","6,577円","7,494円","","","","　7日　　5,442円　　6,577円　　7,494円",""],
            ["6,005円","7,205円","8,193円","","","","　8日　　6,005円　　7,205円　　8,193円",""],
            ["6,802円","8,052円","9,116円","","","","　9日　　6,802円　　8,052円　　9,116円",""],
            ["7,385円","8,682円","9,809円","","","","　10日　　7,385円　　8,682円　　9,809円",""],
            ["7,953円","9,307円","10,496円","","","","　11日　　7,953円　　9,307円　　10,496円",""],
            ["8,277円","9,670円","10,889円","","","","　12日　　8,277円　　9,670円　　10,889円",""],
            ["8,842円","10,311円","11,609円","","","","　13日　　8,842円　　10,311円　　11,609円",""],
            ["9,355円","10,858円","12,202円","","","","　14日　　9,355円　　10,858円　　12,202円",""],
            ["9,867円","11,428円","12,823円","","","","　15日　　9,867円　　11,428円　　12,823円",""],
            ["10,881円","12,582円","14,098円","","","","　16日　　10,881円　　12,582円　　14,098円",""],
            ["10,881円","12,582円","14,098円","","","","　17日　　10,881円　　12,582円　　14,098円",""],
            ["12,604円","14,482円","16,163円","","","","　18日　　12,604円　　14,482円　　16,163円",""],
            ["12,604円","14,482円","16,163円","","","","　19日　　12,604円　　14,482円　　16,163円",""],
            ["14,416円","16,464円","18,305円","","","","　20日　　14,416円　　16,464円　　18,305円",""],
            ["14,416円","16,464円","18,305円","","","","　21日　　14,416円　　16,464円　　18,305円",""],
            ["15,928円","18,224円","20,254円","","","","　22日　　15,928円　　18,224円　　20,254円",""],
            ["15,928円","18,224円","20,254円","","","","　23日　　15,928円　　18,224円　　20,254円",""],
            ["17,417円","19,911円","22,111円","","","","　24日　　17,417円　　19,911円　　22,111円",""],
            ["17,417円","19,911円","22,111円","","","","　25日　　17,417円　　19,911円　　22,111円",""],
            ["19,149円","21,870円","24,262円","","","","　26日　　19,149円　　21,870円　　24,262円",""],
            ["19,149円","21,870円","24,262円","","","","　27日　　19,149円　　21,870円　　24,262円",""],
            ["21,222円","24,162円","26,754円","","","","　28日　　21,222円　　24,162円　　26,754円",""],
            ["21,222円","24,162円","26,754円","","","","　29日　　21,222円　　24,162円　　26,754円",""],
            ["23,726円","26,944円","29,764円","","","","　30日　　23,726円　　26,944円　　29,764円",""],
            ["23,726円","26,944円","29,764円","","","","　31日　　23,726円　　26,944円　　29,764円",""]
        ],


        //連生4人
        [
            ["2,406円","3,187円","3,657円","","","","　1日　　2,406円　　3,187円　　3,657円",""],
            ["2,842円","3,685円","4,202円","","","","　2日　　2,842円　　3,685円　　4,202円",""],
            ["3,421円","4,325円","4,883円","","","","　3日　　3,421円　　4,325円　　4,883円",""],
            ["3,984円","4,943円","5,554円","","","","　4日　　3,984円　　4,943円　　5,554円",""],
            ["5,143円","6,356円","7,126円","","","","　5日　　5,143円　　6,356円　　7,126円",""],
            ["5,915円","7,267円","8,146円","","","","　6日　　5,915円　　7,267円　　8,146円",""],
            ["6,650円","8,058円","9,020円","","","","　7日　　6,650円　　8,058円　　9,020円",""],
            ["7,346円","8,834円","9,873円","","","","　8日　　7,346円　　8,834円　　9,873円",""],
            ["8,316円","9,870円","10,992円","","","","　9日　　8,316円　　9,870円　　10,992円",""],
            ["9,033円","10,645円","11,835円","","","","　10日　　9,033円　　10,645円　　11,835円",""],
            ["9,740円","11,424円","12,683円","","","","　11日　　9,740円　　11,424円　　12,683円",""],
            ["10,150円","11,886円","13,178円","","","","　12日　　10,150円　　11,886円　　13,178円",""],
            ["10,851円","12,678円","14,055円","","","","　13日　　10,851円　　12,678円　　14,055円",""],
            ["11,491円","13,361円","14,790円","","","","　14日　　11,491円　　13,361円　　14,790円",""],
            ["12,137円","14,081円","15,566円","","","","　15日　　12,137円　　14,081円　　15,566円",""],
            ["13,407円","15,525円","17,142円","","","","　16日　　13,407円　　15,525円　　17,142円",""],
            ["13,407円","15,525円","17,142円","","","","　17日　　13,407円　　15,525円　　17,142円",""],
            ["15,581円","17,918円","19,719円","","","","　18日　　15,581円　　17,918円　　19,719円",""],
            ["15,581円","17,918円","19,719円","","","","　19日　　15,581円　　17,918円　　19,719円",""],
            ["17,879円","20,428円","22,411円","","","","　20日　　17,879円　　20,428円　　22,411円",""],
            ["17,879円","20,428円","22,411円","","","","　21日　　17,879円　　20,428円　　22,411円",""],
            ["19,800円","22,657円","24,846円","","","","　22日　　19,800円　　22,657円　　24,846円",""],
            ["19,800円","22,657円","24,846円","","","","　23日　　19,800円　　22,657円　　24,846円",""],
            ["21,686円","24,785円","27,161円","","","","　24日　　21,686円　　24,785円　　27,161円",""],
            ["21,686円","24,785円","27,161円","","","","　25日　　21,686円　　24,785円　　27,161円",""],
            ["23,875円","27,253円","29,841円","","","","　26日　　23,875円　　27,253円　　29,841円",""],
            ["23,875円","27,253円","29,841円","","","","　27日　　23,875円　　27,253円　　29,841円",""],
            ["26,500円","30,147円","32,959円","","","","　28日　　26,500円　　30,147円　　32,959円",""],
            ["26,500円","30,147円","32,959円","","","","　29日　　26,500円　　30,147円　　32,959円",""],
            ["29,681円","33,677円","36,745円","","","","　30日　　29,681円　　33,677円　　36,745円",""],
            ["29,681円","33,677円","36,745円","","","","　31日　　29,681円　　33,677円　　36,745円",""]
        ],


        //連生5人
        [
            ["2,801円","3,727円","4,209円","","","","　1日　　2,801円　　3,727円　　4,209円",""],
            ["3,326円","4,327円","4,860円","","","","　2日　　3,326円　　4,327円　　4,860円",""],
            ["4,029円","5,106円","5,685円","","","","　3日　　4,029円　　5,106円　　5,685円",""],
            ["4,709円","5,851円","6,488円","","","","　4日　　4,709円　　5,851円　　6,488円",""],
            ["6,099円","7,547円","8,351円","","","","　5日　　6,099円　　7,547円　　8,351円",""],
            ["7,022円","8,633円","9,553円","","","","　6日　　7,022円　　8,633円　　9,553円",""],
            ["7,858円","9,539円","10,546円","","","","　7日　　7,858円　　9,539円　　10,546円",""],
            ["8,687円","10,463円","11,553円","","","","　8日　　8,687円　　10,463円　　11,553円",""],
            ["9,830円","11,688円","12,868円","","","","　9日　　9,830円　　11,688円　　12,868円",""],
            ["10,681円","12,608円","13,861円","","","","　10日　　10,681円　　12,608円　　13,861円",""],
            ["11,527円","13,541円","14,870円","","","","　11日　　11,527円　　13,541円　　14,870円",""],
            ["12,023円","14,102円","15,467円","","","","　12日　　12,023円　　14,102円　　15,467円",""],
            ["12,860円","15,045円","16,501円","","","","　13日　　12,860円　　15,045円　　16,501円",""],
            ["13,627円","15,864円","17,378円","","","","　14日　　13,627円　　15,864円　　17,378円",""],
            ["14,407円","16,734円","18,309円","","","","　15日　　14,407円　　16,734円　　18,309円",""],
            ["15,933円","18,468円","20,186円","","","","　16日　　15,933円　　18,468円　　20,186円",""],
            ["15,933円","18,468円","20,186円","","","","　17日　　15,933円　　18,468円　　20,186円",""],
            ["18,558円","21,354円","23,275円","","","","　18日　　18,558円　　21,354円　　23,275円",""],
            ["18,558円","21,354円","23,275円","","","","　19日　　18,558円　　21,354円　　23,275円",""],
            ["21,342円","24,392円","26,517円","","","","　20日　　21,342円　　24,392円　　26,517円",""],
            ["21,342円","24,392円","26,517円","","","","　21日　　21,342円　　24,392円　　26,517円",""],
            ["23,672円","27,090円","29,438円","","","","　22日　　23,672円　　27,090円　　29,438円",""],
            ["23,672円","27,090円","29,438円","","","","　23日　　23,672円　　27,090円　　29,438円",""],
            ["25,955円","29,659円","32,211円","","","","　24日　　25,955円　　29,659円　　32,211円",""],
            ["25,955円","29,659円","32,211円","","","","　25日　　25,955円　　29,659円　　32,211円",""],
            ["28,601円","32,636円","35,420円","","","","　26日　　28,601円　　32,636円　　35,420円",""],
            ["28,601円","32,636円","35,420円","","","","　27日　　28,601円　　32,636円　　35,420円",""],
            ["31,778円","36,132円","39,164円","","","","　28日　　31,778円　　36,132円　　39,164円",""],
            ["31,778円","36,132円","39,164円","","","","　29日　　31,778円　　36,132円　　39,164円",""],
            ["35,636円","40,410円","43,726円","","","","　30日　　35,636円　　40,410円　　43,726円",""],
            ["35,636円","40,410円","43,726円","","","","　31日　　35,636円　　40,410円　　43,726円",""]
        ]


    ];


/*----------------------------------------------------------
inoue トグルボタン（全て見る）機能 - 2023-12-04
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
    document.getElementById('view-all').addEventListener('click', function () {
        // hidden-link クラスを持つすべての要素を取得
        const hiddenLinks = document.querySelectorAll('.hidden-link');

        // 表示状態が変更されているかどうかを確認
        const isHidden = hiddenLinks[0].style.display === 'none' || hiddenLinks[0].style.display === '';

        // hidden-link クラスを持つ要素の表示状態を切り替え
        hiddenLinks.forEach(link => {
            link.style.display = isHidden ? 'inline-block' : 'none';
        });

        // ボタンのテキストを変更
        this.querySelector('a').textContent = isHidden ? '電子広告を少なく表示する' : '電子広告を全て見る';
    });

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
Promise.all([
  //コンポーネントの読み込み処理
  loadComponent("/common_2024/component/head/meta.html", "head", "afterbegin"),
  //loadComponent("/common_2024/component/head/ogp.html", "head", "beforeend"),
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
