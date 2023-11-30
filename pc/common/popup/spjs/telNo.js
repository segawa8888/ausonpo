$(function(){

	var userAgent = window.navigator.userAgent.toLowerCase();

	if( userAgent.indexOf('android') != -1 && userAgent.indexOf('mobile') != -1 ){
		// Androidスマホの場合は、電話番号リンクを表示
		$('span.telNoText').hide();
		$('a.telNoLink').show();
	} else if( userAgent.indexOf('iphone') != -1 && userAgent.indexOf('crios') != -1 ) {
		// iphoneでChrome for iOSの場合は、電話番号リンクを表示
		$('span.telNoText').hide();
		$('a.telNoLink').show();
	} else {
		// 上記以外の場合は、電話番号テキストを表示
		$('a.telNoLink').hide();
		$('span.telNoText').show();
	}

});
