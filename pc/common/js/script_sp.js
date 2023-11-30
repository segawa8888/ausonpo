$(function(){

	//==============================================================================
	// SPフローティングメニュー表示
	//==============================================================================
//	$('header#header p.menu').click( function() {
//		$('nav#megaMenu').fadeIn('slow');
//		$('#layout').css('opacity', 0.5);
//	});

	$('nav#megaMenu').click(function(){
		$('nav#megaMenu').fadeOut('slow');
		$('#layout').css('opacity', 1);
	})
	// オーバーレイ ===========================================================
	var $overlay = $('<div id="disableDoublePost-overlay" style="display:none;"></div>').appendTo('body');
	$overlay.css({
		opacity : '0.6'
	})
	// 高さ調節 ---------------------------------
	.on('resizeHeight', function(){
		$(this).css('height', $(document).height());
	})
	// 表示 -------------------------------------
	.on('showOverlay', function(){
		$(this).fadeIn('fast');
		$overlay.trigger('resizeHeight');
		$('#wrapper').addClass('noTapHighlightArea');
	})
	// 非表示 -----------------------------------
	.on('closeOverlay', function(){
		$(this).hide();
		$('#wrapper').removeClass('noTapHighlightArea');
	});
	// デフォルト -------------------------------
	$(window).load(function(){
		$overlay.trigger('resizeHeight');
	});
	// ヘッダーナビ ===========================================================
	var $floatingNavi = $('#floatingNavi'); // トグルナビ

	// フローティングメニュー
	$('.showNavi').click(function(){
		$floatingNavi.css('top', $('header').height()).fadeIn('slow');
		//オーバーレイを表示
		$overlay.trigger('showOverlay');

	});
	$('.hideNavi').click(function(){
		$floatingNavi.fadeOut('fast');
		//オーバーレイを非表示
		$overlay.trigger('closeOverlay');
	});
	$overlay.click(function(){
		$floatingNavi.fadeOut('fast');
		//オーバーレイを非表示
		$overlay.trigger('closeOverlay');
	});
	// ナビゲーショントグル ===================================================
	$('.menu_toggle_open').each(function(index, element){

		$(this).prepend($('<span class="sign">＋</span>'));

		var $menu = $(this).next();
		var $sign = $(this).find('span.sign');

		$(this).click(function(event){

			$menu.slideToggle();
			$(this).toggleClass('open');

			if ($(this).hasClass('open')) {
				$sign.text("－");
			} else {
				$sign.text("＋");
			}
		});
	});

});
