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
});
