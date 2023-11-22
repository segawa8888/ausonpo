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

    //ペットの保険 mvスライダー
    const mvSlider = document.querySelector(".js-mv-slider"); // 対象となる要素を取得
    if (mvSlider) {
      new Splide(mvSlider, {
        autoplay: true,
        type   : 'loop',
        perMove: 1,
        arrows: false,
        gap: '-1.8rem',
        focus: 0,
        padding: '9.625rem',
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
          520:{
          perPage: 1,
          gap: '0.78rem',
          padding: '2.099rem',
          }
        }
      }).mount();
    }
  
    //ワンちゃんとの暮らしに役立つコラムのスライダー
    const petSlider = document.querySelector(".js-column-slider"); // 対象となる要素を取得
    if (petSlider) {
      new Splide(petSlider, {
        autoplay: true,
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        arrows: false,
        gap: '3.125rem',
        focus: 0,
        padding: '3.125rem',
        autoScroll: {
          speed: 0.5,
          pauseOnHover: false,
        },
        classes: {
          pagination: "splide__pagination p-pet-column-pagination",
          page: "splide__pagination__page p-pet-column-page",
        },
        breakpoints: {
          520:{
          type: "loop",
          perPage: 1,
          gap: '.625rem',
          padding: '1.875rem',
          }
        }
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
});
