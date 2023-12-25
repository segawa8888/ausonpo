/*----------------------------------------------------------
Pocket.Inc PCでの電話リンクの無効化処理 - 2023-11-13
----------------------------------------------------------*/
//コンポーネント読み込み後
document.addEventListener('componentsLoaded', () => {
  // 現在のパスがルート（/）の場合index.htmlを追加
  let modifiedCurrentPath = currentPath;
  if (currentPath.endsWith('/')) {
    modifiedCurrentPath += 'index.html';
  }

  //採用カテゴリは下層ページも含めて全てカレント表示する
  if (currentPath.includes('/corporate/recruit/')) {
    modifiedCurrentPath = '/corporate/recruit/index.html';
  }

  // パスのパターンと対応する変更後のパスを定義
  const pathPatternsBycle = [
    { pattern: /^\/pc\/bycle-best\/(compensation|premium|roadservice)\.html$/, newPath: '/pc/bycle-best/index.html' },
    { pattern: /^\/pc\/bycle\/(compensation|premium|roadservice)\.html$/, newPath: '/pc/bycle/index.html' },
    { pattern: /^\/pc\/bycle-s\/(compensation|premium|roadservice)\.html$/, newPath: '/pc/bycle-s/index.html' },
  ];

  // URLに'bycle'が含まれる場合のみパターンマッチングを実行
  if (currentPath.includes('bycle')) {
    pathPatternsBycle.forEach(({ pattern, newPath }) => {
      if (pattern.test(currentPath)) {
        modifiedCurrentPath = newPath;
      }
    });
  }

  console.log(modifiedCurrentPath);
  const navItems = document.querySelectorAll('.l-header-nav__item');
  // 各要素をループして処理
  navItems.forEach((item) => {
    // 要素内のaタグを探す
    const link = item.querySelector('a');
    // aタグのhref属性を取得
    let linkHref = link.getAttribute('href');
    // href属性の末尾が '/' の場合、'index.html' を追加
    if (linkHref.endsWith('/')) {
      linkHref += 'index.html';
    }
    // aタグのhref属性が現在のパスと一致するか確認
    if (linkHref === modifiedCurrentPath) {
      // 一致する場合、.-currentクラスを追加
      item.classList.add('-current');
    }
  });
});
