/*----------------------------------------------------------
pet ポップアップウィンドウ - 2023-11-27
----------------------------------------------------------*/

var petModal = document.querySelector("#modal");
var petModalOverlay = document.querySelector("#modal-overlay");
var petCloseButton = document.querySelector("#close-button");
var petOpenButton = document.querySelector("#open-button");

// 要素が存在する場合にのみイベントリスナーを追加
if (petCloseButton && petModal && petModalOverlay) {
  petCloseButton.addEventListener("click", function () {
    petModal.classList.toggle("closed");
    petModalOverlay.classList.toggle("closed");
  });
}

if (petOpenButton && petModal && petModalOverlay) {
  petOpenButton.addEventListener("click", function () {
    petModal.classList.toggle("closed");
    petModalOverlay.classList.toggle("closed");
  });
}
