/*----------------------------------------------------------
Akeru Iwamotoでのアコーディオン - 2023-11-24
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  const accordionBody = document.querySelector('.js-up-accordion-body');
  const toggleButton = document.querySelector('.js-up-accordion-toggle');

  // 初期状態でコンテンツを非表示にする
  accordionBody.style.display = 'none';

  const toggleAccordion = () => {
    // slideToggleを適用
    slideToggle(accordionBody, toggleButton);

    // ボタンのテキストを切り替える
    const buttonText = toggleButton.innerText.trim();
    toggleButton.innerText = buttonText === '詳しくはこちら' ? '閉じる' : '詳しくはこちら';
  };

  toggleButton.addEventListener('click', toggleAccordion);
});
