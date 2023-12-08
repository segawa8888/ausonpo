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
