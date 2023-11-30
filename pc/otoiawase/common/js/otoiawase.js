$(function(){

    //アコーディオン（事故連絡の流れ）
    $(".accordionBlock .switch").click(function(){
        $(this).next().slideUp('');
        $(this).find('span.triangle').text("▼");

        if($(this).next().css('display') == 'none'){
            $(this).find('span.triangle').text("▲");
            $(this).next().slideDown('');
        }
    });


	var w = $(window).width();
	var x = 784;
	if (w <= x) {
		var offsetY = 6;
		var time = 500;
	}
	else {
		var offsetY = -45;
		var time = 500;
	}
	$('a[href^=#]').click(function() {
		var target = $(this.hash);
		if (!target.length) return ;
		var targetY = target.offset().top+offsetY;
		$('html,body').animate({scrollTop: targetY}, time, 'linear');
		window.history.pushState(null, null, this.hash);
		return false;
	});




	$(window).bind("load", function(){
		if(document.URL.match("#contents_1")) {
			$(".orange_1").click();
		}
		if(document.URL.match("#contents_2")) {
			$(".orange_2").click();
		}
		if(document.URL.match("#contents_3")) {
			$(".orange_3").click();
		}
		if(document.URL.match("#contents_4")) {
			$(".blue_1").click();
		}
		if(document.URL.match("#accident_flow")) {
			var aTag = document.getElementById("a_orange_1");
			var hrefBefore = aTag.getAttribute("href"); // 元のhref属性値
			var hrefAfter = "#accident_flow"
			aTag.setAttribute("href", hrefAfter); // ページ内ジャンプ先を一時的に変更
			$(".orange_1").click();
			aTag.setAttribute("href", hrefBefore); // 元へ戻す
		}
	});


	$("#accident_flow").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".orange_1").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_1").show();
		$(".flowchart").show();
	});
	$(".orange_1").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".orange_1").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_1").show();
		$(".flowchart").show();
	});
	$(".orange_2").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".orange_2").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_2").show();
		$(".flowchart").show();
	});
	$(".orange_3").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".orange_3").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_3").show();
	});


	$(".blue_1").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".blue_1").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_4").show();
	});
	$(".blue_2").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".blue_2").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_4").show();
	});


	$(".green_1").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".green_1").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_6").show();
	});
	$(".green_2").click(function(){
		$(".orange_inner").removeClass("clicked");
		$(".blue_inner").removeClass("clicked");
		$(".green_inner").removeClass("clicked");
		$(".green_2").addClass("clicked");
		$(".contents_display").hide();
		$("#contents_7").show();
	});



	var align_height = function(selector){
		var target = [];
		var _before_height = $(selector).height();
		$(selector).height('');
		var _after_height = $(selector).height();
		if (_after_height <= 0) {
			$(selector).height(_before_height);
			return false;
		}
		$(selector).each(function(i, obj){
			target.push($(obj).height());
		});
		var max_height = Math.max.apply(this, target);
		$(selector).height(max_height);
	};
	$(".go_type_area").click(function() {
		align_height(".orange_inner div");
		align_height(".blue_inner div");
		align_height(".green_inner div");
		align_height(".height_set");
	});
	
	$(window).on("load orientationchange resize", function () {
		align_height(".orange_inner div");
		align_height(".blue_inner div");
		align_height(".green_inner div");
		align_height(".height_set");
	});
		align_height(".orange_inner div");
		align_height(".blue_inner div");
		align_height(".green_inner div");
		align_height(".height_set");
	
	
});


