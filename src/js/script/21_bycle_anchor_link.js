/*----------------------------------------------------------
橋本 ページ訪問時のHash処理 - 2023/12/26
----------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  // 対象ページ
  const targetPages  = [
    "/pc/bycle/index.html",
    "/pc/bycle/compensation.html",
    "/pc/bycle/premium.html",
    "/pc/bycle/roadservice.html"
  ]

    // パスを取得
  const currentPath = window.location.pathname;

  // 対象ページのみ実行
  if ( targetPages.includes(currentPath) ) {

    // hash取得
    const hash = window.location.hash;

    // デフォルトのスクロール動作を無効化
    history.replaceState(null, null, ' ');
    // style smooth無効
    document.querySelector('html').style.scrollBehavior = 'auto';

    // hashチェック
    if ( hash !== "" ) {

      // 初期位置セット
      window.scrollTo(0, 0);

      window.addEventListener('load', () => {
        // IDセット
        const ID = hash.substring(1);
        const targetElement = document.querySelector(`#${ID}`);
        console.log(targetElement);

        // 対象の要素が存在する場合、スムーズスクロールを実行
        if (targetElement) {
          console.log("aaa");
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      })

    }
  }
});
