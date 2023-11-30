function sbSetCAMPCookie(){
}
function setCAMPCookie(){

	var strNowURL;
	var strNowURL_WK;
	var strNowURL_L;
	var strCAMP_CD = "";
	var strC_CAMP_CD;
	var lintCont1;
	var lintCont2;
	var lintCont3;
	var lintLen;
	var strCLS_CD = "";

	strNowURL = document.URL
	strNowURL = strNowURL + "&";
	if(isJSP(strNowURL)){ return; }

	strC_CAMP_CD = getCookie("CAMP_CD");
	lintCont1 = strNowURL.indexOf("?") + 1;
	lintCont2 = 0;
	lintLen = strNowURL.length;
	lintCont2 = strNowURL.indexOf("&", lintCont1);

	do{
	strNowURL_WK = strNowURL.substring(lintCont1, lintCont2);
		lintCont3 = strNowURL_WK.indexOf("=");
		if (strNowURL_WK.substring(0, lintCont3) == "CAMP_CD") {
			if (strNowURL_WK.indexOf("#") != "-1"){
				strCAMP_CD = strNowURL_WK.substring(lintCont3 + 1, strNowURL_WK.indexOf("#"));
			}
			else{
				strCAMP_CD = strNowURL_WK.substring(lintCont3 + 1, lintCont2 - lintCont1);
			}
		}
		if (strNowURL_WK.substring(0, lintCont3) == "CLS_CD") {
			if (strNowURL_WK.indexOf("#") != "-1"){
				strCLS_CD = strNowURL_WK.substring(lintCont3 + 1, strNowURL_WK.indexOf("#"));
			}
			else{
				strCLS_CD = strNowURL_WK.substring(lintCont3 + 1, lintCont2 - lintCont1);
			}
		}
		lintCont1 = lintCont2 + 1;
		lintCont2 = strNowURL.indexOf("&", lintCont1);
	}while (lintCont1 < lintLen);

	if(strCAMP_CD == "" && strC_CAMP_CD == ""){
		strCAMP_CD = "DR1B110523";
		setCookie("CAMP_CD",strCAMP_CD);
		}

	if(strCAMP_CD == "" && strC_CAMP_CD != ""){
//何もしない
		}

	if(strCAMP_CD != "" && strC_CAMP_CD != ""){
	setCookie("CAMP_CD",strCAMP_CD);
	}

	if(strCAMP_CD != "" && strC_CAMP_CD == ""){
	setCookie("CAMP_CD",strCAMP_CD);
		}

	if(strCLS_CD != ""){
		setCookie("CLS_CD",strCLS_CD);
		return;
	}

}


function getCookie(astrKey) {
	var lstrTmp1;
	var lstrTmp2;
	var lstrTmp2U;
	var lintCont1;
	var lintCont2;
	var lintCont3;
	var lintLen;

	lstrTmp1 = " " + document.cookie + ";";
	lintCont1 = lintCont2 = 0;
	lintLen = lstrTmp1.length;
	while (lintCont1 < lintLen) {
		lintCont2 = lstrTmp1.indexOf(";", lintCont1);
		lstrTmp2 = lstrTmp1.substring(lintCont1 + 1, lintCont2);
		lintCont3 = lstrTmp2.indexOf("=");
		lstrTmp2U = lstrTmp2.toUpperCase();
		if (lstrTmp2U.substring(0, lintCont3) == astrKey.toUpperCase()) {
			return(unescape(lstrTmp2.substring(lintCont3 + 1, lintCont2 - lintCont1 - 1)));
		}
		lintCont1 = lintCont2 + 1;
	}
	return("");
}

function getCampCd() {

   document.forms[0].camp.value = getCookie("CAMP_CD");
   document.forms[0].clsNo.value = getCookie("CLS_CD");
	return false;
}


function setCookie(astrKey, astrVal) {
	var lstrTmp;
	lstrTmp = astrKey + "=" + astrVal + "; ";
	document.cookie = lstrTmp + "; path=/;";
}

function loadQrcode(imgPath){

	var strCAMP_CD = "";
	var strCamp_Top3 = "";
	var img_SRC = "";
	var img_Path = imgPath;

	strCAMP_CD = getCookie("CAMP_CD");
	strCamp_Top3 = strCAMP_CD.substring(0,3);

	switch (strCamp_Top3){
		case "":
		case "DR9":
			img_SRC = "DR1";
			break;
		default: 
			img_SRC = strCamp_Top3;
			break;
	}

	var objs = document.getElementById("qrcode_sq");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_sq.gif";
	}

	objs = document.getElementById("qrcode_sl");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_sl.gif";
	}

	objs = document.getElementById("qrcode_ss");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_ss.gif";
	}

	objs = document.getElementById("qrcode_sg");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_sg.gif";
	}

	objs = document.getElementById("qrcode_sw");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_sw.gif";
	}

	objs = document.getElementById("qrcode_st");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_st.gif";
	}

	objs = document.getElementById("qrcode_header");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_t.gif";
	}

	objs = document.getElementById("qrcode_top1");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_t.gif";
	}

	objs = document.getElementById("qrcode_top2");

	if (objs != null){
		objs.src = img_Path + img_SRC + "_t.gif";
	}
}

function loadTopQrcode(){
	var img_Path = "./common/img/qrcode/";
	loadQrcode(img_Path);
}

function loadHokenQrcode(){
	var img_Path = "../../common/img/qrcode/";
	loadQrcode(img_Path);
}

function loadRiyouQrcode(){
	var img_Path = "../common/img/qrcode/";
	loadQrcode(img_Path);
}

function loadMovieQrcode(){
	var img_Path = "../../pc/common/img/qrcode/";
	loadQrcode(img_Path);
}

function loadJyouhouQrcode(){
	var img_Path = "../../../../common/img/qrcode/";
	loadQrcode(img_Path);
}

function checkUserAgent()
{

}

function openBicycleApp()
{
	var strCAMP_CD = getCookie("CAMP_CD");
	var strCLS_CD = getCookie("CLS_CD");
	var url = "http://www.ausonpo-app.jp";

	//キャペーンコードがある かつ 社員番号もある場合
	if (strCAMP_CD != "" && strCLS_CD != ""){
		//URLに"?"が存在しない場合、接続符号が"?"にセット
		if(url.indexOf("?") < 0){
			url = url + "?CAMP_CD=" + strCAMP_CD + "&CLS_CD=" + strCLS_CD;
		}
		//URLに"?"が存在場合、接続符号が"&"にセット
		else{
			url = url + "&CAMP_CD=" + strCAMP_CD + "&CLS_CD=" + strCLS_CD;
		}
	}
	//キャペーンコードがある場合
	else if (strCAMP_CD != ""){
		//URLに"?"が存在しない場合、接続符号が"?"にセット
		if(url.indexOf("?") < 0){
			url = url + "?CAMP_CD=" + strCAMP_CD;
		}
		//URLに"?"が存在場合、接続符号が"&"にセット
		else{
			url = url + "&CAMP_CD=" + strCAMP_CD;
		}
	}
	//区分コードがある場合
	else if (strCLS_CD != ""){
		//URLに"?"が存在しない場合、接続符号が"?"にセット
		if(url.indexOf("?") < 0){
			url = url + "?CLS_CD=" + strCLS_CD;
		}
		//URLに"?"が存在場合、接続符号が"&"にセット
		else{
			url = url + "&CLS_CD=" + strCLS_CD;
		}
	}

	// 新しい画面を開く
	window.open( url );
}

function openKaigaiApp()
{
	var url = "http://www.ausonpo-app.jp/lps/kaigaipc/K03";
	
	// 新しい画面を開く
	window.open( url );
}
function openEventPage()
{
	var url = "http://event.au-sonpo.co.jp/";
	
	// 新しい画面を開く
	window.open( url );
}
function openLifewithDogsPage()
{
	var url = "http://event.au-sonpo.co.jp/lifewithdogs/index.html";
	
	// 新しい画面を開く
	window.open( setRequestParam(url) );
}

function setRequestParam(url){

	var strCAMP_CD = getCookie("CAMP_CD");
	var strCLS_CD = getCookie("CLS_CD");

	//キャペーンコードがある かつ 社員番号もある場合
	if (strCAMP_CD != "" && strCLS_CD != ""){
		//URLに"?"が存在しない場合、接続符号が"?"にセット
		if(url.indexOf("?") < 0){
			url = url + "?CAMP_CD=" + strCAMP_CD + "&CLS_CD=" + strCLS_CD;
		}
		//URLに"?"が存在場合、接続符号が"&"にセット
		else{
			url = url + "&CAMP_CD=" + strCAMP_CD + "&CLS_CD=" + strCLS_CD;
		}
	}
	//キャペーンコードがある場合
	else if (strCAMP_CD != ""){
		//URLに"?"が存在しない場合、接続符号が"?"にセット
		if(url.indexOf("?") < 0){
			url = url + "?CAMP_CD=" + strCAMP_CD;
		}
		//URLに"?"が存在場合、接続符号が"&"にセット
		else{
			url = url + "&CAMP_CD=" + strCAMP_CD;
		}
	}
	//区分コードがある場合
	else if (strCLS_CD != ""){
		//URLに"?"が存在しない場合、接続符号が"?"にセット
		if(url.indexOf("?") < 0){
			url = url + "?CLS_CD=" + strCLS_CD;
		}
		//URLに"?"が存在場合、接続符号が"&"にセット
		else{
			url = url + "&CLS_CD=" + strCLS_CD;
		}
	}

	return url;
}
function isJSP(strNowURL){
	var vurl = strNowURL.split(";")[0];
	if(vurl.substring(vurl.length - 3,vurl.length) == ".do"){
		return true;
	}
	return false;
	
}
setCAMPCookie();