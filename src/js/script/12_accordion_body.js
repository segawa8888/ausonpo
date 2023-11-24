/*----------------------------------------------------------
Akeru Iwamotoでのアコーディオン - 2023-11-24
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  const accordionBody = document.querySelector('.js-up-accordion-body');
  const toggleButton = document.querySelector('.js-up-accordion-toggle');

  const toggleAccordion = () => {
    // slideToggleを適用
    slideToggle(accordionBody, toggleButton);
    // ボタンのテキストを切り替える
    const buttonText = toggleButton.innerText.trim();
    toggleButton.innerText = buttonText === '閉じる' ? '詳しくはこちら' : '閉じる';
  };

  toggleButton.addEventListener('click', toggleAccordion);
});