/*------------------------------------
モーダル表示時の背景固定処理
bodyScrollPrevent(true); //スクロール禁止
bodyScrollPrevent(false, modalArea); //スクロール解除
------------------------------------*/
document.addEventListener("componentsLoaded", () => {
  // transitionendイベントを一回だけ呼び出すための関数
  const addEventListenerOnce = (node, event, callback) => {
    const handler = (e) => {
      callback.call(node, e);
      node.removeEventListener(event, handler);
    };
    node.addEventListener(event, handler);
  };

  // モーダル表示時の背景固定処理
  const bodyScrollPrevent = (flag, modal) => {
    let scrollPosition;

    // スクロールバーの幅を取得
    setScrollbarWidth();

    if (flag) {
      body.style.paddingRight = `${scrollBarWidth}px`;
      header.style.paddingRight = `${scrollBarWidth}px`;

      if (isiOS) {
        scrollPosition = -window.pageYOffset;
        Object.assign(body.style, {
          position: "fixed",
          width: "100%",
          top: `${scrollPosition}px`,
        });
      } else {
        body.style.overflow = "hidden";
      }
    } else {
      body.style.paddingRight = "";
      header.style.paddingRight = "";

      if (isiOS) {
        scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g, ""), 10);
        Object.assign(body.style, {
          position: "",
          width: "",
          top: "",
        });
        window.scrollTo(0, scrollPosition);
      } else {
        body.style.overflow = "";
      }
    }
  };
});
