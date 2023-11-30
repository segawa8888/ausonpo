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
