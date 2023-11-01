/*----------------------------------------------------------
Pocket.Inc トグルメニュー - 2023-11-2
----------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // ボタンのクリックイベントのリスナーを設定
  document.querySelectorAll(".js-drawer-toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains("js-drawer-toggle-content")) {
        slideToggle(adjacentElement, this);
      }
    });
  });
});
