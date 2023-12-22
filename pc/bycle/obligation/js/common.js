
/*-------------------------------------------- */
/* jquery.easing.min.js（v1.3
---------------------------------------------- */

!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});


// スマホとタブレットでviewportを切替え
var usa = navigator.userAgent;
var isAndroidBrowser = false;

// if((usa.indexOf('iPhone') > 0) || usa.indexOf('iPod') > 0 || (usa.indexOf('Android') > 0 && usa.indexOf('Mobile') > 0)) {
//     // スマホのとき
//     $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no">');
// } else {
//     // PC・タブレットのとき
//     $('head').prepend('<meta name="viewport" content="width=1280">');
// }

if((/Android/.test(usa) && /Linux; U;/.test(usa) && !/Chrome/.test(usa)) || (/Android/.test(usa) && /Chrome/.test(usa) && /Version/.test(usa))) {
    // Android標準ブラウザだったときの処理
    // $('head').prepend('<link rel="stylesheet" href="./css/android.css" media="all">');
    isAndroidBrowser = true;
}

/* 初期表示 */
(function ($) {
    function init() {
        $(".bg_title h1").velocity({ translateY: "10%", scale: "50%" }, 0)
            .velocity({
                translateY: 0,
                scale: "100%",
                opacity: 1
            }, {
                duration: 600,
                delay: 300,
                easing: 'easeOutSine'
            });
        $(".bg_title p").velocity({ translateY: "6%", scale: "50%" }, 0)
            .velocity({
                translateY: 0,
                scale: "100%",
                opacity: 1
            }, {
                duration: 200,
                delay: 700
            });
        $(".people01").velocity({ translateY: "10%" }, 0)
            .velocity({
                translateY: 0,
                opacity: 1
            }, {
                duration: 400,
                delay: 1000
            });
        $(".people02").velocity({ translateY: "10%" }, 0)
            .velocity({
                translateY: 0,
                opacity: 1
            }, {
                duration: 400,
                delay: 1100,
                complete: function() {
                    $('.anchor li')
                        .css({bottom:'-20px', opacity:0})
                        .each(function(i){
                            $(this).delay(100 * i).animate({bottom:'0', opacity:1}, 500);
                        });
                    if($(window).scrollTop() == 0) {
                        $("html,body").animate({scrollTop: 1});
                    }
                }
            });
    }
    $(function() { init(); });
})(jQuery);

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

/* メインリサイズ */
$(function(){

var znum = 1;
var main_hh = $("main").innerHeight();
var resize_first = true;
function resizeMain(){
    if(resize_first == true){
        main_hh = $("main").innerHeight();
        console.log("main_hh:"+main_hh);
        resize_first = false;
    }
    // console.log("window.innerWidth: "+ window.innerWidth);
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){ //FF
        if(window.innerWidth > 768 && window.innerWidth <= 1300){
            $("main").css({"overflow":"visible","height":"auto"});
            znum = window.innerWidth/1300;
            $(".l-main-wrap").css({"display":"block","width":"1300px","transform-origin":"0 0","transform":"scale("+znum+")"});
            zoom_hh = main_hh * znum;
            $("main").css({"overflow":"hidden","height":zoom_hh});
        } else {
            znum = 1;
            $(".l-main-wrap").css({"display":"block","width":"auto","transform-origin":"0 0","transform":"scale(1)"});
            zoom_hh = main_hh * znum;
            $("main").css({"overflow":"visible","height":"auto"});
        }
    }else{
        if(window.innerWidth > 768 && window.innerWidth <= 1300){
            znum = window.innerWidth/1300;
            $("main").css("zoom",znum);
        } else {
            znum = 1;
            $("main").css("zoom",znum);
        }
    }
}

$(window).on("load resize",function() {
    resizeMain();
});

setTimeout(function(){
    resizeMain();
}, 400);

/* アンカー移動 */
$('a[href^=#]').not('a[href=#]').click(function(e){
    e.preventDefault();
    var ta  = $(this.getAttribute('href'));
    if(ta.length) {
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){ //FF
            var yy = ta.offset().top;
        }else{
            var yy = ta.offset().top * znum;
        }
        $('html,body').stop().animate({scrollTop: yy},{duration:600, easing:'easeOutQuart'});
        return false;
    }
});

});

/* スクロール */
$(function() {
    $(window).scroll(function() {
        var windowHeight = $(window).height(),
//		var windowHeight = ($(window).innerHeight() / 3) * 1,
            topWindow = $(window).scrollTop();

        if(!isAndroidBrowser) {
            // タイトル
            $('h2 img').each(function(i) {
                targetPosition = $(this).offset().top;
                if(topWindow > targetPosition - windowHeight) {
                    $(this).addClass("fadeIn");
                }
            });
            $('h2 strong').each(function(i) {
                targetPosition = $(this).offset().top;
                if(topWindow > targetPosition - windowHeight) {
                    $(this).addClass("fadeIn");
                }
            });
            $('.column h3, .column h4, .column p:not(.bg_title p)').each(function(i) {
                targetPosition = $(this).offset().top;
                if(topWindow > targetPosition - windowHeight) {
                    $(this).addClass("fadeInUp");
                }
            });

            // 3つのポイント
            /*		$('.point li').each(function(i) {
                        targetPosition = $(this).offset().top;
                        if(topWindow > targetPosition - windowHeight) {
                            $(this).delay(200*i).queue(function() {
                                $(this).addClass("fadeInUp");
                                $(this).find("p").addClass("bounceIn");
                            });
                        }
                    });*/

            // 吹き出し
            $('.balloon dt, .balloon_hw dt, #recommend .blackboard dl dt').each(function(i) {
                targetPosition = $(this).offset().top;
                if(topWindow > targetPosition - windowHeight) {
                    $(this).addClass("fadeInUp");
                }
            });
            $('.balloon dd, .balloon_hw dd, #recommend .blackboard dl dd').each(function(i) {
                targetPosition = $(this).offset().top;
                if(topWindow > targetPosition - windowHeight) {
                    $(this).addClass("bounceIn");
                }
            });

            // 覚えておこう
            $('.remember').each(function(i) {
                targetPosition = $(this).offset().top;
                if(topWindow > targetPosition - windowHeight) {
                    $(this).find("dt").addClass("fadeInUp");
                    $(this).find("dd").addClass("fadeInRight");
                }
            });

            // お申し込み
            $('.application li').each(function(i) {
                targetPosition = $(this).offset().top;
                if(topWindow > targetPosition - windowHeight) {
                    $(this).delay(200*i).queue(function() {
                        $(this).addClass("fadeInUp");
                    });
                }
            });
        }
    });
});
