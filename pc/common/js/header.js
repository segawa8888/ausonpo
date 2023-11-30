header_action = 0;

header_anchor = function($this){
	var options = $.extend({animate:false,target:false},arguments[1]);
	var $apply = $("#apply_btn a");
	var $apply_layer = $("#apply_btn");
	var $tab_warapper = $("#header_tab_wrapper");
	var top;
	if($apply.length){
		if($apply_layer.css("bottom") != "60px"){
			top =  $this.offset().top - ($apply.offset().top - $tab_warapper.offset().top  + $apply.innerHeight());
		}else{
			if($pc_header.css("display") != "none"){
				top =  $this.offset().top  - $apply.innerHeight();
			}else{
				top =  $this.offset().top - $tab_warapper.innerHeight()  - $apply.innerHeight();
			}
		}
	}else{
		top =  $this.offset().top - $tab_warapper.innerHeight();
	}
	if(options.animate){
		$('html,body').animate({scrollTop: top},'slow');
	}else{
		$('html,body').scrollTop(top);
	}
	header_action = 1;
	setTimeout(function(){
		header_action = 0;
	},500)
}
//


$(function(){

	$humberger_menu_wrapper = $("#humberger_menu_wrapper");

	$("#button_prev,#button_close").click(function(){
		$("#pop_options").hide();
		slider_control.hide_layer();
		$("#header_tab_wrapper,#footer,#sp_header_new_wrapper,#header_new_wrapper").show();

	});


	$("#empty_layer").click(function(){
		$("#humberger_menu,#mini_humberger_menu").removeClass("active");
		$("#product_menu").hide();
		$("#empty_layer").hide();
		$("#sp_menu").animate({right:-500},function(){$("#sp_menu").hide()});
	});
});

$(function(){
	$plus = $("#plus");
	$minus = $("#minus");
	// ナビゲーショントグル ===================================================
		var $menubtn = $("#menu_toggle_open_sp");
		var $menulist = $("#sp_menu_list");

	$menubtn.click(function(event){
		if ($menulist.css("display")=="none") {
			$plus.hide();
			$minus.show();
		} else {
			$plus.show();
			$minus.hide();
		}
		$menulist.slideToggle();
	});

	$(".menu__mega a:nth-child(1)").click(function () {
		$("ul.menu__second-level").css("visibility","visible");
	});
	$("ul.menu__second-level").css("visibility","hidden").hover(function () {
		$("ul.menu__second-level").css("visibility","visible");
	}, function () {
		$("ul.menu__second-level").css("visibility","hidden");
	});
	$("div[id^=page_contents]").hover(function(){
		$("ul.menu__second-level").css("visibility","hidden");
	});
	$(window).scroll(function () {
		$("ul.menu__second-level").css("visibility","hidden");
	});
});



//メガメニュー　タッチデバイス対応
$(function(){

    touchDevice = (typeof window.ontouchstart) !== 'undefined';
    if(touchDevice == true){
        $( document ).on( 'click touchstart MSPointerDown', function( e )
        {
            if($('.header_btn4.menu__second-level').css('display') == 'block') {
                $('.menu__mega ul.menu__second-level').hide();
            }
        });
    }

});
// $(function(){
//     touchDevice = (typeof window.ontouchstart) !== 'undefined';
//     /*if(touchDevice == true){*/
// 	 $( document ).on( 'click touchstart MSPointerDown', function( e ){
//             if($('.menu__second-level').css('visibility') == 'visible') {
//                $('.menu__second-level').css('visibility','hidden');
//             }
//        });
// 	$('.menu__mega a').on( 'click touchstart MSPointerDown', function( e ){
// 		$('.menu__second-level').css('visibility','visible');
// 	});
//     /*}*/
// });