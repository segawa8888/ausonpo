        //============================
        //初期値
        //============================
        var mode="PC"; //フラグ　PC or SP
        var X = 767; //切り替え画面サイズ
        //viewport スマホ
        var metaSP= "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0";
        //viewport スマホ
        var metaPC= "width=device-width,minimum-scale=1.0";
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
            // // //ViewPort設定
            //change_viewport();

            //============================
            //アコーディオン　表示非表示
            //============================
            if(mode == "SP"){
                $(".accordion_body").hide();
                $(".btn_accordion").addClass("SP_MODE");
            }else{
                $(".accordion_body").show();
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
            // if ( $(window).width() <= X ) {
            //     //モバイル環境へ
            //     change_script_sp();
            // } else {
            //     if(mode=="SP"){
            //         $(".sp_nav_menu").hide();
            //     }
            //     //PC環境へ
            //     change_script_pc();
            //     $("#header_new_wrapper").show();
            // }
            //ViewPort変更
            //change_viewport();

            //============================
            //アコーディオン　表示非表示
            //============================
            if(mode == "SP"){
                if($(".btn_accordion").hasClass("SP_MODE")){

                }else{
                    $(".accordion_body").hide();
                    $(".btn_accordion").removeClass("on");
                    $(".btn_accordion").addClass("SP_MODE");
                }
            }else{
                $(".accordion_body").show();
                $(".btn_accordion").removeClass("SP_MODE");
                $(".btn_accordion").removeClass("on");
            }
        });

        // //============================
        // //ViewPort 設定
        // //============================
        // function change_viewport(){
        //     if(mode == "SP"){
        //         $('meta[name="viewport"]').attr('content', metaSP);
        //     }else{
        //         $('meta[name="viewport"]').attr('content', metaPC);
        //     }
        // }

        $(function() {
            //============================
            ////コンテンツ内アコーディオン クリック設定
            //============================
            $(".btn_accordion").on("click", function() {
                if ( $(this).next().is(':hidden') ) {
                    if($(this).hasClass('noslide')){
                        //位置調整なし（.btn_accordionに「noslide」Classが付いていたら）
                        $(this).next().slideDown(400, 'swing');
                    }else{
                        //位置調整
                        var offset = $(this).offset().top;
                        $('html, body').stop().animate({
                            scrollTop: offset
                        }, 400, 'swing');
                        $(this).next().slideDown(400, 'swing');
                    }
                } else {
                  $(this).next().slideUp(400, 'swing');
                }
                $(this).toggleClass("on");
            });
	
	
var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {

if(location.hash=="#pet_type"){
                if ( $(".btn_accordion_1").next().is(':hidden') ) {
                    if($(".btn_accordion_1").hasClass('noslide')){
                        //位置調整なし（.btn_accordionに「noslide」Classが付いていたら）
                        $(".btn_accordion_1").next().slideDown(0, 'swing');
                    }else{
                        //位置調整
                        var offset = $(".btn_accordion_1").offset().top;
                        $('html, body').stop().animate({
                            scrollTop: offset
                        }, 400, 'swing');
                        $(".btn_accordion_1").next().slideDown(400, 'swing');
                    }
                } else {
                  $(".btn_accordion_1").next().slideUp(400, 'swing');
                }
                $(".btn_accordion_1").toggleClass("on");
				

setTimeout(function(){
	location.hash="#pet"
},500);

}

if(location.hash=="#pet_type?tpet=0"){
                if ( $(".btn_accordion_1").next().is(':hidden') ) {
                    if($(".btn_accordion_1").hasClass('noslide')){
                        //位置調整なし（.btn_accordionに「noslide」Classが付いていたら）
                        $(".btn_accordion_1").next().slideDown(0, 'swing');
                    }else{
                        //位置調整
                        var offset = $(".btn_accordion_1").offset().top;
                        $('html, body').stop().animate({
                            scrollTop: offset
                        }, 400, 'swing');
                        $(".btn_accordion_1").next().slideDown(400, 'swing');
                    }
                } else {
                  $(".btn_accordion_1").next().slideUp(400, 'swing');
                }
                $(".btn_accordion_1").toggleClass("on");
				

setTimeout(function(){
	location.hash="#pet"
},500);

}



}
			
			
			
        });
		//============================
        //ios時　hoverimg停止
        //============================
        $(function(){
        		var userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('ipad') != -1) {
            $('body').addClass('ios');
        }else if(userAgent.indexOf('iphone') != -1){
            $('body').addClass('ios');
        }

        });

