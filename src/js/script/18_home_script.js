//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  const tabContainer = document.querySelector(".c-tab");
  const tabs = document.querySelectorAll(".c-tab__item");
  const panels = document.querySelectorAll(".c-tab__panel");
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
  new Splide("#js-home-splide-1", {
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
  new Splide("#js-home-splide-2", {
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
  new Splide("#js-home-splide-3", {
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
  new Splide("#js-home-splide-4", {
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
});
