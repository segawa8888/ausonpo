// スマホとタブレットでviewportを切替え
//============================
//初期値
var mode="PC"; //フラグ　PC or SP
var X = 767; //切り替え画面サイズ
//viewport スマホ
var metaSP= "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0";
//viewport PC
var metaPC= "width=1100";
//============================
//スマホ判定（ページ読み込み時）
//============================
$(function(){
	if(
		//モバイルFireFox
		( navigator.userAgent.indexOf('Mobile') > 0 && navigator.userAgent.indexOf('Firefox') > 0 ) ||
		//モバイルAndroid
		( navigator.userAgent.indexOf('Mobile') > 0 && navigator.userAgent.indexOf('Android') > 0 ) ||
		//iPhone
		( navigator.userAgent.indexOf('iPhone') > 0 ) ||
		//iPod
		( navigator.userAgent.indexOf('iPod') > 0 ) ||
		//ブラウザ幅が767px以下
		( $(window).width() <= X )
	){
		//モバイル環境へ
		mode="PC";//判定用（現在のモードをいったんPCに）
		change_script_sp();
		$("body").addClass("SP_MODE");
		$('meta[name="viewport"]').attr('content', metaSP);
	}else{
		//PC環境の場合へ
		mode="SP";//初回のみ（現在のモードをいったんSPに）
		change_script_pc();
		$("#header_new_wrapper").show();
		$("body").removeClass("SP_MODE");
		$('meta[name="viewport"]').attr('content', metaPC);
	}
});
//============================
//画面サイズ判定（リアルタイム）
//============================
$(window).resize(function(){
	if ( $(window).width() <= X ) {
		if($("body").hasClass("SP_MODE")){
		}else{
			change_script_sp();
			$('meta[name="viewport"]').attr('content', metaSP);
			$("body").addClass("SP_MODE");
		}
	}else{
		if($("body").hasClass("SP_MODE")){
			change_script_pc();
			$('meta[name="viewport"]').attr('content', metaPC);
			$("body").removeClass("SP_MODE");
			$("#header_new_wrapper").show();
			$(".sp_nav_menu").hide();
		}
	}
});


/* スライダー */
$(document).ready(function() {
	$( '#slider' ).sliderPro({
		width: 578,
		height: 360,
		aspectRatio: 1.5,		// 縦横比の設定
		arrows: true,				// 矢印の有無
		buttons: false,			// ページャーの有無
		autoplay: true,			// 自動スライドか否か
		loop: true,					// ループ再生か否か
		visibleSize: '100%',		// 前後のスライドを表示(?)
		forceSize: 'fullWidth'	// 幅いっぱいに表示
	});
});

/* ロールオーバー */
jQuery(function($) {
	var postfix = '_on';
	$('img.over,input.over').not('[src*="'+ postfix +'."]').each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_on = src.substr(0, src.lastIndexOf('.')) + postfix + src.substring(src.lastIndexOf('.'));
		$('<img>').attr('src', src_on);
		img.hover(function() {
			img.attr('src', src_on);
		}, function() {
			img.attr('src', src);
		});
	});
});

$(function() {
	var dispFlg = new Array;
	/* フェードイン */
	$('.oversea').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView) {
			if(!dispFlg[0]) {
				dispFlg[0] = 1;
				$(this).find("h2").velocity({ translateY: "30%" }, 0).velocity({ translateY: 0, opacity: 1 }, { duration: 400, delay: 300 });
				$(this).find('.app').velocity({ opacity: 1 }, { duration: 400, delay: 500 });
				$(this).find("p").velocity({ translateX: "30%" }, 0).velocity({ translateX: 0, opacity: 1 }, { duration: 600, delay: 700 });
				$(this).find("dt").velocity({ translateY: "10%" }, 0).velocity({ translateY: 0, opacity: 1 }, { duration: 600, delay: 900 });
				$(this).find('.link').velocity({ opacity: 1 }, { duration: 400, delay: 1100 });
			}
		}
	});

	$('.bg_app.pet').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView) {
			if(!dispFlg[1]) {
				dispFlg[1] = 1;
				$(this).find("h2").velocity({ translateY: "30%" }, 0).velocity({ translateY: 0, opacity: 1 }, { duration: 400, delay: 300 });
				$(this).find('.app').velocity({ opacity: 1 }, { duration: 400, delay: 500 });
				$(this).find("p").velocity({ translateX: "30%" }, 0).velocity({ translateX: 0, opacity: 1 }, { duration: 600, delay: 700 });
				$(this).find("dt").velocity({ translateY: "10%" }, 0).velocity({ translateY: 0, opacity: 1 }, { duration: 600, delay: 900 });
				$(this).find('.link').velocity({ opacity: 1 }, { duration: 400, delay: 1100 });
			}
		}
	});

	$('.bg_app.bycle').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView) {
			if(!dispFlg[2]) {
				dispFlg[2] = 1;
				$(this).find("h2").velocity({ translateY: "30%" }, 0).velocity({ translateY: 0, opacity: 1 }, { duration: 400, delay: 300 });
				$(this).find('.app').velocity({ opacity: 1 }, { duration: 400, delay: 500 });
				$(this).find("p").velocity({ translateX: "30%" }, 0).velocity({ translateX: 0, opacity: 1 }, { duration: 600, delay: 700 });
				$(this).find("dt").velocity({ translateY: "10%" }, 0).velocity({ translateY: 0, opacity: 1 }, { duration: 600, delay: 900 });
				$(this).find('.link').velocity({ opacity: 1 }, { duration: 400, delay: 1100 });
			}
		}
	});
});

/* スクロール */
$(function() {
	$(window).scroll(function() {
		var windowHeight = $(window).height(),
			topWindow = $(window).scrollTop();
	});
});

