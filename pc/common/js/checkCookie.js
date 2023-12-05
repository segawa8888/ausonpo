function checkCookie(){
	//navigator確認
	if(!!(navigator) && !!!(navigator.cookieEnabled)){
		alert( "Cookieが無効です。Cookieを有効にしてください。" ) ;
		return;
	}
	
	//実際に動作するか
	setCookie( 'CookieTest', true ) ;
	var chk_val = getCookie( 'CookieTest' );
	if( !chk_val)
	{
		alert( "Cookieが無効です。Cookieを有効にしてください。" ) ;
	}
}