/*----------------------------------------------------------
Pocket.Inc トグルメニュー - 2023-11-2
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener('componentsLoaded', () => {
  document.querySelectorAll('.js-drawer-toggle-btn').forEach((button) => {
    button.addEventListener('click', function () {
      toggleDrawerAccordion(this);
    });
    button.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        toggleDrawerAccordion(this);
      }
    });
  });
  function toggleDrawerAccordion(button) {
    // このボタンの隣接要素にslideToggleを適用
    const adjacentElement = button.nextElementSibling;
    if (adjacentElement && adjacentElement.classList.contains('js-drawer-toggle-content')) {
      slideToggle(adjacentElement, button);
    }
  }
  document.querySelectorAll('.js-footer-toggle-btn').forEach((button, index) => {
    button.addEventListener('click', function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains('js-footer-toggle-content') && ww <= 520) {
        slideToggle(adjacentElement, this);
      }
    });
    //以下、SP時にURLに対して初期オープン
    const urls0 = ['/pc/bycle', '/pc/golf/', '/pc/kaigai/', '/pc/kokunai', '/pc/koutsuujiko/', '/pc/pet', '/pc/sports/', '/pc/bicycle.html'];
    const urls1 = ['/pc/accident/', '/pc/keizoku_tetsuzuki/', '/pc/keiyakusya/'];
    // currentUrlが配列urlsのいずれかの要素を含み、かつindexが0であるかどうかをチェック
    if ((urls0.some((url) => currentUrl.includes(url)) && index === 0) || (urls1.some((url) => currentUrl.includes(url)) && index === 1) || (currentUrl.includes('/pc/moushikomi/') && index === 2) || (currentUrl.includes('/corporate/') && index === 5)) {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = button.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains('js-footer-toggle-content') && ww <= 520) {
        slideDown(adjacentElement, button);
      }
    }
  });

  document.querySelectorAll('.js-accordion-toggle-btn').forEach((button) => {
    button.addEventListener('click', function () {
      // このボタンの隣接要素にslideToggleを適用
      const adjacentElement = this.nextElementSibling;
      if (adjacentElement && adjacentElement.classList.contains('js-accordion-toggle-content')) {
        slideToggle(adjacentElement, this);
      }
    });
  });
});
