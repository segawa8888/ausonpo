/*----------------------------------------------------------
Yoshiaki Numajiri ペット保険/補償内容のタブ切り替え
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener("componentsLoaded", () => {
  document.querySelectorAll(".js-pet-info").forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      // すべてのタブから is-active クラスを削除
      document.querySelectorAll(".js-pet-info").forEach((t) => {
        t.classList.remove("is-active");
        // 親要素からも is-active クラスを削除
        t.parentNode.classList.remove("is-active");
      });

      // クリックされたタブとその親要素に is-active クラスを追加
      this.classList.add("is-active");
      this.parentNode.classList.add("is-active");

      // すべてのコンテンツから is-active クラスを取り除く
      document.querySelectorAll("[id^='pet-cont']").forEach((content) => {
        content.classList.remove("is-active");
      });

      // 対応するコンテンツに is-active クラスを追加
      const id = this.dataset.id;
      document.getElementById(id).classList.add("is-active");
    });
  });
});
