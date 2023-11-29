/*----------------------------------------------------------
Ibuki Suzuki ポップアップ機能 - 2023-11-29
----------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", function (event) {
        const clickedElement = event.target;
        // クリックされた要素が背景または閉じるボタンである場合
        if (clickedElement.matches(".popup-input .bg, .popup-input .close")) {
        const popupInput = clickedElement.closest(".popup-input");
        popupInput.classList.remove("active");
        }
        // クリックされた要素がポップアップを開くボタンである場合
        if (clickedElement.matches(".popup-open")) {
        const Popup = document.querySelector(".popup-input");
        Popup.classList.add("active");
        }
    });
});
/*
scss _popup.scss
class popup-openがトリガーです
popup-inputは全体のwrap
bgは半透明の背景
popup-input-contentの中にポップアップに表示するコンテンツを入力してください
<button type="button" class="popup-open">ポップアップオープン</button>

<div class="popup-input">
<div class="bg"></div>
<div class="popup-input-content">
<!-- ここにコンテンツ -->
</div>
</div>
*/