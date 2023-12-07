/*----------------------------------------------------------
Akeru Iwamotoでのアコーディオン - 2023-11-24
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  const accordionToggles = document.querySelectorAll('.js-up-accordion-toggle');

  accordionToggles.forEach((toggleButton) => {
    const accordionBody = toggleButton.previousElementSibling;

    // アコーディオンの初期状態を設定（アニメーション時間を0.5秒に変更）
    accordionBody.style.transition = 'max-height 0.5s ease-out, padding-bottom 0.5s ease-out';
    accordionBody.style.maxHeight = '0';
    accordionBody.style.overflow = 'hidden';
    accordionBody.style.paddingBottom = '0';

    const toggleAccordion = () => {
      const isClosed = accordionBody.style.maxHeight === '0px';
      if (isClosed) {
        // コンテンツの全高さを取得し、max-heightに設定
        accordionBody.style.maxHeight = 'initial';
        accordionBody.style.paddingBottom = '30px';
      } else {
        accordionBody.style.maxHeight = '0';
        accordionBody.style.paddingBottom = '0';
      }
      toggleButton.classList.toggle('is-active', isClosed);
    };

    accordionBody.addEventListener('transitionend', () => {
      const isOpen = accordionBody.style.maxHeight !== '0px';
      toggleButton.textContent = isOpen ? '閉じる' : '詳しくはこちら';
    });

    toggleButton.addEventListener('click', toggleAccordion);
  });
});
