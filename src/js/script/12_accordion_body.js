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
