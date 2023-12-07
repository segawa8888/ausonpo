/*----------------------------------------------------------
Ibuki Suzuki タブ切り替え機能 - 2023-11-29
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
// var tabButtons = document.querySelectorAll(".tab-button");
// var tabContents = document.querySelectorAll(".tab-content");
//     tabButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         var tabId = this.getAttribute("data-tab");
//         // 同じクラス名の .tab-button から 'active' クラスを削除
//         document.querySelectorAll(".tab-button").forEach(function (tabButton) {
//         tabButton.classList.remove("active");
//         });
//         // 同じクラス名・同じ data-tab 属性を持つ .tab-button に 'active' クラスを追加
//         document
//         .querySelectorAll('.tab-button[data-tab="' + tabId + '"]')
//         .forEach(function (tabButton) {
//         tabButton.classList.add("active");
//         });
//         // すべてのタブを非表示にする
//         tabContents.forEach(function (tabContent) {
//         tabContent.classList.remove("active");
//         });
//         // 対応するタブを表示する
//         document.getElementById("tab" + tabId).classList.add("active");
//         });
//     });
});
/*
scss _tab.scss
tab-button(n)とdata-tab(n)の値、tab-contentのid:tab(n)は同じ値で設定してください
tab-buttonsは複数あっても押されたtab-button(n)にactiveのクラスが付与されます
<div class="tab-buttons">
<button class="tab-button tab-button1" data-tab="1">Tab 1</button>
<button class="tab-button tab-button2" data-tab="2">Tab 2</button>
<button class="tab-button tab-button3" data-tab="3">Tab 3</button>
<button class="tab-button tab-button4" data-tab="4">Tab 4</button>
</div>
<div id="tab1" class="tab-content active">Content for Tab 1</div>
<div id="tab2" class="tab-content">Content for Tab 2</div>
<div id="tab3" class="tab-content">Content for Tab 3</div>
<div id="tab4" class="tab-content">Content for Tab 4</div>
<div class="tab-buttons">
<button class="tab-button tab-button1" data-tab="1">Tab 1</button>
<button class="tab-button tab-button2" data-tab="2">Tab 2</button>
<button class="tab-button tab-button3" data-tab="3">Tab 3</button>
<button class="tab-button tab-button4" data-tab="4">Tab 4</button>
</div>
*/