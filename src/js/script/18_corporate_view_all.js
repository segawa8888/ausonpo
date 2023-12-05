/*----------------------------------------------------------
inoue トグルボタン（全て見る）機能 - 2023-12-04
----------------------------------------------------------*/
document.addEventListener("componentsLoaded", () => {
    document.getElementById('view-all').addEventListener('click', function () {
        // hidden-link クラスを持つすべての要素を取得
        const hiddenLinks = document.querySelectorAll('.hidden-link');

        // 表示状態が変更されているかどうかを確認
        const isHidden = hiddenLinks[0].style.display === 'none' || hiddenLinks[0].style.display === '';

        // hidden-link クラスを持つ要素の表示状態を切り替え
        hiddenLinks.forEach(link => {
            link.style.display = isHidden ? 'inline-block' : 'none';
        });

        // ボタンのテキストを変更
        this.querySelector('a').textContent = isHidden ? '電子広告を少なく表示する' : '電子広告を全て見る';
    });

});
