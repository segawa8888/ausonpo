/*----------------------------------------------------------
Haruto Segawa 保険 フローティングボタン- 2023-11-14
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  const floatingElement = document.querySelector(".p-hoken-floating");
  if (floatingElement) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 800) {
        // スクロールが100ピクセルを超えた場合、要素を表示
        floatingElement.classList.add("visible");
      } else {
        // そうでない場合は非表示に
        floatingElement.classList.remove("visible");
      }
    });
  }
});
