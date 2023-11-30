$(window).load(function () {
 	$('.btn_totop').addClass("fixed");
 	$('.apply_btn').addClass("apply_fixed");
});

$(function() {
	$(".btn_totop").hide();

	$(window).scroll(function () {
	    if ($(this).scrollTop() > 300) {
	        $('.btn_totop').fadeIn();
	        $('.apply_btn').fadeIn();
		   	$('.btn_totop').addClass("scroll");
		   	$('.apply_btn').addClass("apply_scroll");
			
				scrollHeight = $(document).height();
				scrollPosition = $(window).height() + $(window).scrollTop();
				if ( (scrollHeight - scrollPosition) / scrollHeight <=0.01) {
					$('.btn_totop').addClass("fixed");
					$('.btn_totop').removeClass("scroll");

					$('.apply_btn').addClass("apply_fixed");
					$('.apply_btn').removeClass("apply_scroll");
				} else {
					$('.btn_totop').addClass("scroll");
					$('.btn_totop').removeClass("fixed");
					$('.apply_btn').addClass("apply_scroll");
					$('.apply_btn').removeClass("apply_fixed");
				}
			
		}else {
	                  $('.btn_totop').fadeOut();
					   $('.apply_btn').fadeOut();
	    }
	});
	$('.btn_totop a').click(function () {
	            $('body,html').animate({
	                          scrollTop: 0

	            }, 400);
				$('#header_low').css('display', 'none');
	            return false;
	});
	$('#f_pagetop').click(function () {
	            $('body,html').animate({
	                          scrollTop: 0
	            }, 400);
				$('#header_low').css('display', 'none');
	            return false;
	});
	$(window).scroll(function () {
         if ($(this).scrollTop() >20) {
				$('#header_new').fadeOut(0);
				$('#header_low').fadeIn(0);
				$('#header_low').addClass("header_low_fixed");
				$('#header_low').css('display', 'block');

			}else{
				$('#header_new').show(0);
				$('#header_low').fadeOut(0);
				$('#header_low').css('display', 'none');
			}
	});
	$(window).scroll(function () {
		
         if ($(this).scrollTop() <650) {
				$('#page_contents .bycles_sub #apply_btn').addClass("absolute");
			}else{
				$('#page_contents .bycles_sub #apply_btn').removeClass("absolute");
			}
			
				scrollHeight = $(document).height();
				scrollPosition = $(window).height() + $(window).scrollTop();
				if ( (scrollHeight - scrollPosition) / scrollHeight <=0.03) {
					$('#page_contents .bycles_sub #apply_btn').hide(300);
					$('#page_contents .bycle_sub #apply_btn').hide(300);
					$('#page_contents .kaigai_sub #apply_btn').hide(300);
					$('#page_contents .kokunai_sub #apply_btn').hide(300);
					$('#page_contents .sports_sub #apply_btn').hide(300);
					$('#page_contents .golf_sub #apply_btn').hide(300);
				} else {
					$('#page_contents .bycles_sub #apply_btn').show(300);
					$('#page_contents .bycle_sub #apply_btn').show(300);
					$('#page_contents .kaigai_sub #apply_btn').show(300);
					$('#page_contents .kokunai_sub #apply_btn').show(300);
					$('#page_contents .sports_sub #apply_btn').show(300);
					$('#page_contents .golf_sub #apply_btn').show(300);
				}
			
	});
});



