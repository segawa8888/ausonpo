var COOKIE_TIME = 120;
var ROOT_URL = cr_changeScheme('https://www.c-rings.net/crj/');
var COOKIE_PREFIX = 'cr_';


var params = new Array();
var PAC=function(){var R={document:window.document,browser:{engineType:0,type:0,majorVersion:0,minorVersion:0,version:0,platform:0},BrowserEngineType:{Unknown:0,Trident:1,Gecko:2,WebKit:3,Opera:4},BrowserType:{Unknown:0,MSIE:1,Firefox:2,Safari:3,Opera:4,Chrome:5},PlatformType:{PC:0,Wii:1,PSP:2,Playstation3:3,AppleMobile:4}};if(window.opera){R.browser.engineType=R.BrowserEngineType.Opera;R.browser.type=R.BrowserType.Opera}else if(navigator.userAgent.search(/MSIE[\s]((\d+)([.](\d+))+);/i)!=-1){R.browser.engineType=R.BrowserEngineType.Trident;R.browser.type=R.BrowserType.MSIE}else if(navigator.userAgent.search(/AppleWebKit.*Version\/((\d+)([.](\d+))+)\sSafari/i)!=-1){R.browser.engineType=R.BrowserEngineType.WebKit;R.browser.type=R.BrowserType.Safari}else if(navigator.userAgent.search(/AppleWebKit.*Chrome\/((\d+)([.](\d+))+)\sSafari/i)!=-1){R.browser.engineType=R.BrowserEngineType.WebKit;R.browser.type=R.BrowserType.Chrome}else if(navigator.userAgent.search(/AppleWebKit.*Version\/((\d+)([.](\d+))+)\sMobile.*Safari/i)!=-1){R.browser.engineType=R.BrowserEngineType.WebKit;R.browser.type=R.BrowserType.Chrome;R.browser.platform=R.PlatformType.AppleMobile}else if(navigator.userAgent.search(/Gecko\/\d+\sFirefox\/((\d+)([.](\d+)))+/i)!=-1){R.browser.engineType=R.BrowserEngineType.Gecko;R.browser.type=R.BrowserType.Firefox}R.isTrident=R.browser.engineType==R.BrowserEngineType.Trident;R.isWebKit=R.browser.engineType==R.BrowserEngineType.WebKit;R.isGecko=R.browser.engineType==R.BrowserEngineType.Gecko;R.isOpera=R.browser.engineType==R.BrowserEngineType.Opera;R.Check={isString:function(object){return typeof object=="string"},isNull:function(object){return object===null},isUndefined:function(object){return typeof object=="undefined"},isNullOrUndefined:function(object){return object===null||typeof object=="undefined"},isFunction:function(object){return typeof object=="function"},isSameNodeName:function(element,name){return element?element.nodeName?element.nodeName.toLowerCase()==name.toLowerCase():false:false},installedFlash:function(){if(navigator.plugins["Shockwave Flash"])return true;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(e){return false}}};var _chk=R.Check;R.String={trim:function(string,includeWideSpace){if(_chk.isNullOrUndefined(string))string="";if(!_chk.isString(string))return "";var s=string.replace(/(^\s+)|(\s+$)/g,"");return includeWideSpace?s.replace(/(^[\u3000]+)|([\u3000]+$)/g,""):s},splitString:function(string,separator,removeEmpty){for(var Result=[],arr=string.split(separator),j=0,i=0;i<arr.length;i++)if(removeEmpty){if(R.String.trim(""+arr[i]))Result[j]=arr[i];j++}else Result[i]=arr[i];return Result},splitParameters:function(string,firstSeparator,secondSeparator,removeEmpty){if(_chk.isUndefined(removeEmpty))removeEmpty=true;for(var Result=[],arr1=R.String.splitString(string,firstSeparator,removeEmpty),i=0;i<arr1.length;i++){var arr2=R.String.splitString(arr1[i],secondSeparator,removeEmpty);if(arr2[0]){var strValue=null;if(arr2.length>=2)strValue=arr2[1];Result[arr2[0]]=strValue}}return Result},htmlEncode:function(string){return string.replace(/&/gi,"&amp;").replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/\s/gi,"&nbsp;")},htmlDecode:function(string){return string.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&")},parseInt:function(string,radix,defaultValue){if(_chk.isUndefined(radix))radix=10;if(_chk.isUndefined(defaultValue))defaultValue=0;var Result=window.parseInt(string,radix);if(isNaN(Result))Result=0|defaultValue;return Result}};R.getScriptParameters=function(documentObject,fileName){var Result={},s=null,i;if(false)var f=function(arg){if(arg&&arg.nodeName&&arg.nodeName.toLowerCase()=="script")return arg;else return arg.lastChild?arguments.callee(arg.lastChild):null}(documentObject);else{var arr=documentObject.getElementsByTagName("script");if(fileName){for(i=0;i<arr.length;i++)if((arr[i].src+"").toLowerCase().lastIndexOf(fileName.toLowerCase())!=-1)s=arr[i]}else s=arr[arr.length-1]}if(s&&s.src){Result["srcPath"]=s.src;var src=s.src?s.src:"",reg=src.match(/[a-z]+=[^&]+/g);if(reg)for(i=0;i<reg.length;i++){var t=reg[i],idx=t.indexOf("=");Result[t.substring(0,idx)]=t.substring(idx+1)}}return Result};var _str=R.String;R.Object=function(){var _private={getElementBaseRecurs:function(element,match,layer,nowLayer){if(match(element))return element;if(layer<=nowLayer)return null;if(element.childNodes)for(var i=0;i<element.childNodes.length;i++){var c=_private.getElementBaseRecurs(element.childNodes[i],match,layer,nowLayer+1);if(!_chk.isNull(c))return c}return null},getElementBase:function(element,match,layer){if(_chk.isNull(match)||_chk.isUndefined(match))match=function(){return false};return _private.getElementBaseRecurs(element,match,layer,0)},getElementsBaseRecurs:function(element,match,layer,nowLayer,result){match(element)&&result.push(element);if(layer<=nowLayer)return;if(element.childNodes)for(var i=0;i<element.childNodes.length;i++)_private.getElementsBaseRecurs(element.childNodes[i],match,layer,nowLayer+1,result)},getElementsBase:function(element,match,layer){var result=[];if(_chk.isNull(match)||_chk.isUndefined(match))match=function(){return false};_private.getElementsBaseRecurs(element,match,layer,0,result);return result},getRegMatchClassName:function(name,option){if(option)return new RegExp("(?:^|\\s)"+name+"(?:$|\\s)",option);else return new RegExp("(?:^|\\s)"+name+"(?:$|\\s)")}},_R={getDateTimeNumber:function(){var Result=0,dt=new Date,year=dt.getFullYear(),month=dt.getMonth()+1,date=dt.getDate(),hour=dt.getHours(),minute=dt.getMinutes(),sec=dt.getSeconds(),s=""+year+(month<10?"0"+month:month)+(date<10?"0"+date:date)+(hour<10?"0"+hour:hour)+(minute<10?"0"+minute:minute)+(sec<10?"0"+sec:sec);Result=parseInt(s,10);return Result},setStyle:function(element,style){if(element&&element.style){var arr=_str.splitParameters(style,";",":"),s=element.style;for(var p in arr){if(_chk.isFunction(arr[p]))continue;var val=arr[p],param=_str.trim(p.toLowerCase());param=R.styleProperties[param];s[param]=_str.trim(val)}}},addScript:function(src){var d=document,s=d.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("language","javascript");s.setAttribute("src",src);var h=d.getElementsByTagName("head");h&&0<h.length&&h[0].appendChild(s)},getWindowSize:function(){var Result={width:0,height:0};if(window.innerWidth)Result.width=window.innerWidth;else if(document.documentElement&&document.documentElement.clientWidth!==0)Result.width=document.documentElement.clientWidth;else if(document.body)Result.width=document.body.clientWidth;if(window.innerHeight)Result.height=window.innerHeight;else if(document.documentElement&&document.documentElement.clientHeight!==0)Result.height=document.documentElement.clientHeight;else if(document.body)Result.height=document.body.clientHeight;return {width:Result.width,height:Result.height,Width:Result.width,Height:Result.height}},getScreenSize:function(){return {width:screen.availWidth,height:screen.availHeight,Width:screen.availWidth,Height:screen.availHeight}},getScroll:function(element){var Result={left:0,top:0};if(element){Result.left=element.scrollLeft;Result.top=element.scrollTop}else if(document.body){Result.left=document.body.scrollLeft||document.documentElement.scrollLeft;Result.top=document.body.scrollTop||document.documentElement.scrollTop}return {left:Result.left,top:Result.top,x:Result.left,y:Result.top}},setScroll:function(left,top){if(document.body&&!_chk.isUndefined(document.body.scrollLeft)){document.body.scrollLeft=left;document.body.scrollTop=top}if(document.documentElement&&!_chk.isUndefined(document.documentElement.scrollLeft)){document.documentElement.scrollLeft=left;document.documentElement.scrollTop=top}},getImageNaturalSize:function(imageElement){var Result={width:0,height:0};if(!_chk.isUndefined(imageElement)){Result.width=imageElement.width;Result.height=imageElement.height;var r,w,h,v,d;if(!_chk.isUndefined(imageElement.naturalWidth)){Result.width=imageElement.naturalWidth;Result.height=imageElement.naturalHeight}else if(!_chk.isUndefined(imageElement.runtimeStyle)){r=imageElement.runtimeStyle;w=r.width;h=r.height;v=r.visibility;d=r.display;r.width=r.height="auto";r.visibility="visible";r.display="inline";Result.width=imageElement.width;Result.height=imageElement.height;r.width=w;r.height=h;r.visibility=v;r.display=d}else if(R.isOpera){w=imageElement.width;h=imageElement.height;imageElement.removeAttribute("width");imageElement.removeAttribute("height");imageElement.style.width="auto";imageElement.style.height="auto";Result.width=imageElement.width;Result.height=imageElement.height;imageElement.width=w;imageElement.height=h}}return {width:Result.width,height:Result.height,Width:Result.width,Height:Result.height}},getSelectText:function(){var Result="";if(window.document)if(window.document.selection&&window.document.selection.createRange)Result=window.document.selection.createRange().text;else if(window.getSelection)Result=window.getSelection();else if(window.document.getSelection)Result=window.document.getSelection();return Result},getXmlRequest:function(){var Result;if(window.XMLHttpRequest)try{Result=new XMLHttpRequest}catch(e){Result=false}else if(window.ActiveXObject)try{Result=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{Result=new ActiveXObject("Microsoft.XMLHTTP")}catch(ex){Result=false}}return Result},getParameters:function(isRepeatedCombine,combineString){if(_chk.isUndefined(isRepeatedCombine))isRepeatedCombine=false;if(_chk.isUndefined(combineString))combineString=",";var Result=[],startIdx=window.location.href.indexOf("?");if(startIdx==-1)return Result;for(var params=R.String.splitString(window.location.href.substring(startIdx+1),"&",true),i=0;i<params.length;i++)if(params[i]){var idx=params[i].indexOf("="),a="",v="";if(idx==-1){a=params[i];v=""}else{a=params[i].substr(0,idx);v=params[i].length==idx?"":params[i].substring(idx+1)}if(_chk.isUndefined(Result[a]))Result[a]=v;else if(isRepeatedCombine)Result[a]+=(Result[a].length===0?"":combineString)+v}return Result},removeElement:function(element){element&&element.parentNode&&element.parentNode.removeChild(element)},removeAllChildren:function(element){if(element)while(0<element.childNodes.length)element.removeChild(element.childNodes[0])},getFrameWindow:function(frame){var Result=null;if(_chk.isString(frame))frame=document.getElementById(frame);if(frame)Result=frame.contentWindow;return Result},getFrameDocument:function(frame){var Result=null;if(_chk.isString(frame))frame=document.getElementById(frame);if(frame)if(frame.contentDocument)Result=frame.contentDocument;else Result=frame.contentWindow.document;return Result},getParentByTagName:function(element,name,includeSelf){if(element){var p=includeSelf?element:element.parentNode;while(p){if(p&&p.nodeName&&_chk.isSameNodeName(p,name))return p;p=p.parentNode}}return null},getParentByAttribute:function(element,attribute,includeSelf){if(element){var p=includeSelf?element:element.parentNode;while(p){if(p&&p.getAttribute&&!_chk.isNull(p.getAttribute(attribute)))return p;p=p.parentNode}}return null},getParentByAttributeValue:function(element,attribute,value,includeSelf){if(element){var p=includeSelf?element:element.parentNode;while(p){if(p&&p.getAttribute&&p.getAttribute(attribute)==value)return p;p=p.parentNode}}return null},getParentByClassName:function(element,name,includeSelf){if(element){var p=includeSelf?element:element.parentNode,reg=_private.getRegMatchClassName(name);while(p){if(p&&p.className&&p.className.match(reg))return p;p=p.parentNode}}return null},getParentsToTagName:function(element,name,includeSelf){var Result=[],p=includeSelf?element:element.parentNode;while(p){Result.push(p);if(p&&p.nodeName&&_chk.isSameNodeName(p,name))break;p=p.parentNode}return Result},getElementByTagName:function(element,name,layer){var Result=null;if(!element)return Result;var m=function(_e){return _chk.isSameNodeName(_e,name)};if(_chk.isUndefined(layer))Result=_private.getElementBase(element,m,99);else Result=_private.getElementBase(element,m,layer);return Result},getElementsByTagName:function(element,name,layer){var Result=[];if(!element)return Result;if(_chk.isUndefined(layer))Result=element.getElementsByTagName(name);else{var m=function(_e){return _chk.isSameNodeName(_e,name)};Result=_private.getElementsBase(element,m,layer)}return Result},getElementsByName:function(element,name,layer){var Result=[];if(!element)return Result;var m=function(_e){return _e.getAttribute&&_e.getAttribute("name")&&_e.getAttribute("name").toLowerCase()==name.toLowerCase()};if(_chk.isUndefined(layer))Result=_private.getElementsBase(element,m,99);else Result=_private.getElementsBase(element,m,layer);return Result},getElementsByAttribute:function(element,attribute,layer){var Result=[];if(!element)return Result;var m=function(_e){return _e.getAttribute&&!_chk.isNull(_e.getAttribute(attribute))};if(_chk.isUndefined(layer))Result=_private.getElementsBase(element,m,99);else Result=_private.getElementsBase(element,m,layer);return Result},getElementsByAttributeValue:function(element,attribute,value,layer){var Result=[];if(!element)return Result;var m=function(_e){return _e.getAttribute&&!_chk.isNull(_e.getAttribute(attribute))&&_e.getAttribute(attribute)==value};if(_chk.isUndefined(layer))Result=_private.getElementsBase(element,m,99);else Result=_private.getElementsBase(element,m,layer);return Result},getElementsByClassName:function(element,name,layer){var Result=[];if(!element)return Result;var reg=_private.getRegMatchClassName(name),m=function(_e){return _e&&_e.className&&_e.className.match(reg)};if(_chk.isUndefined(layer))Result=_private.getElementsBase(element,m,99);else Result=_private.getElementsBase(element,m,layer);return Result},containsClass:function(element,name){var reg=_private.getRegMatchClassName(name);return element&&element.className&&element.className.match(reg)},addClass:function(element,name){if(element&&!_chk.isUndefined(element.className)&&!this.containsClass(element,name))element.className+=" "+name},removeClass:function(element,name){if(element&&!_chk.isUndefined(element.className)&&this.containsClass(element,name)){var reg=_private.getRegMatchClassName(name,"g");element.className=element.className.replace(reg,"").replace(new RegExp("\\s+","g")," ")}},parseIntDef:function(string,radix,defaultValue){var Result=parseInt(string,radix);if(isNaN(Result))Result=defaultValue;return Result},randomSort:function(array,returnNew){var Result=[],i;if(returnNew)for(i=0;i<array.length;i++)Result.push(array[i]);else Result=array;for(i=0;i<Result.length;i++){var idx=Math.floor(Math.random()*Result.length);if(i==idx)continue;var tmp=Result[i];Result[i]=Result[idx];Result[idx]=tmp}return Result},loadImage:function(url){var Result=document.createElement("img");Result.src=url;return Result},getFlash:function(id){if(document[id])return document[id];else return document.getElementById(id)}};return _R}();var _obj=R.Object;R.Event={add:function(element,type,event){if(element)if(element.addEventListener)element.addEventListener(type,event,false);else element.attachEvent&&element.attachEvent("on"+type,event)},remove:function(element,type,event){if(element)if(element.removeEventListener)element.removeEventListener(type,event,false);else element.detachEvent&&element.detachEvent("on"+type,event)},getEvent:function(windowObject){var win=window;if(!_chk.isUndefined(windowObject))win=windowObject;if(win.event)return win.event;var caller=arguments.callee.caller;while(caller){var ob=caller.arguments[0];if(ob&&(ob.constructor==MouseEvent||ob.constructor==KeyboardEvent))return ob;caller=caller.caller}return null},getEventTarget:function(windowObject){var e=this.getEvent(windowObject),Result=null;if(e){if(e.target)Result=e.target;else if(e.srcElement)Result=e.srcElement;if(R.isWebKit&&Result&&Result.nodeType==3)Result=Result.parentNode}return Result},getMousePoint:function(){var Result={x:0,y:0},e=this.getEvent();if(e)if(window.opera){Result.x=e.clientX;Result.y=e.clientY}else if(window.document.all){Result.x=window.document.body.scrollLeft+e.clientX;Result.y=window.document.body.scrollTop+e.clientY}else if(window.document.layers||window.document.getElementById){Result.x=e.pageX;Result.y=e.pageY}return {x:Result.x,y:Result.y,X:Result.x,Y:Result.y}},getKeyCode:function(){var e=this.getEvent();if(R.isTrident||R.isOpera)return e.keyCode;else if(R.isGecko)return e.keyCode?e.keyCode:e.charCode;else if(R.isWebKit)return e.which;else if(e.keyCode)return e.keyCode;else return null},getKeydownKey:function(){var e=this.getEvent();if(e.type!="keydown")return null;var code=this.getKeyCode();if(48<=code&&code<=57)return ""+(code-48);else if(65<=code&&code<=90)return String.fromCharCode(code);else if(code==8)return "BS";else if(code==9)return "TAB";else if(code==13)return "ENTER";else if(code==32)return "SPACE";else if(code==45)return "INSERT";else if(code==36)return "HOME";else if(code==35)return "END";else if(code==33)return "PAGEUP";else if(code==34)return "PAGEDOWN";else if(code==46)return "DELETE";else if(code==37)return "LEFT";else if(code==38)return "UP";else if(code==39)return "RIGHT";else if(code==40)return "DOWN"},sendRequest:function(url,method,data,isAsync,callback){var Result=_obj.getXmlRequest();Result.open(method,url,isAsync);method.toLowerCase()=="post"&&Result.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");if(callback)Result.onreadystatechange=function(){if(Result.readyState==4)if(Result.status==200)callback(Result);else alert("response fail. status code = "+Result.status+".")};Result.send(data);return Result},execScript:function(src){var req=this.sendRequest(src,"get",null,false,null);eval(req.responseText)},cancel:function(windowObject){var e=this.getEvent(windowObject);if(e){e.returnValue=false;_chk.isFunction(e.preventDefault)&&e.preventDefault()}},cancelBubble:function(){var e=this.getEvent();if(e){e.cancelBubble=true;_chk.isFunction(e.stopPropagation)&&e.stopPropagation()}},clickElement:function(element){if(element)if(R.isTrident)element.click();else{var e=element.document?element.document.createEvent("MouseEvents"):document.createEvent("MouseEvents");e.initEvent("click",true,true);element.dispatchEvent(e)}},addEventContext:function(element,event,isCancelEvent){if(_chk.isUndefined(isCancelEvent))isCancelEvent=true;if(element){var f=event;if(R.isOpera)this.add(element,"mousedown",function(e){if(e.button==2){isCancelEvent&&R.Event.cancel();f&&f()}});else this.add(element,"contextmenu",function(){isCancelEvent&&R.Event.cancel();f&&f()})}},addEventKeydownEnter:function(element,event){if(element){var f=event;this.add(element,"keydown",function(){var code=R.Event.getKeyCode();code==13&&f&&f()})}},addEventMouseScroll:function(element,event){if(R.isGecko)this.add(element,"DOMMouseScroll",event);else this.add(element,"mousewheel",event)},removeEventMouseScroll:function(element,event){if(R.isGecko)this.remove(element,"DOMMouseScroll",event);else this.remove(element,"mousewheel",event)},getWheelDelta:function(){var e=this.getEvent();if(R.isGecko)return e.detail;else return e.wheelDelta*-1;return 0}};R.styleProperties=function(){var Result={"border-style":"borderStyle","border-top-style":"borderTopStyle","border-right-style":"borderRightStyle","border-bottom-style":"borderBottomStyle","border-left-style":"borderLeftStyle","border-width":"borderWidth","border-top-width":"borderTopWidth","border-right-width":"borderRightWidth","border-bottom-width":"borderBottomWidth","border-left-width":"borderLeftWidth","border-color":"borderColor","border-top-color":"borderTopColor","border-right-color":"borderRightColor","border-bottom-color":"borderBottomColor","border-left-color":"borderLeftColor",border:"border","border-top":"borderTop","border-right":"borderRight","border-bottom":"borderBottom","border-left":"borderLeft",margin:"margin","margin-top":"marginTop","margin-right":"marginRight","margin-bottom":"marginBottom","margin-left":"marginLeft",padding:"padding","padding-top":"paddingTop","padding-right":"paddingRight","padding-bottom":"paddingBottom","padding-left":"paddingLeft",width:"width",height:"height","max-height":"maxHeight","min-height":"minHeight","max-width":"maxWidth","min-width":"minWidth","float":"cssFloat",clear:"clear",position:"position",top:"top",right:"right",bottom:"bottom",left:"left","z-index":"zIndex",overflow:"overflow",visibility:"visibility",display:"display",color:"color","text-align":"textAlign","vertical-align":"verticalAlign","line-height":"lineHeight","letter-spacing":"letterSpacing","word-spacing":"wordSpacing","text-indent":"textIndent","white-space":"whiteSpace","text-decoration":"textDecoration","text-transform":"textTransform",content:"content",quotes:"quotes",font:"font","font-style":"fontStyle","font-variant":"fontVariant","font-weight":"fontWeight","font-size":"fontSize","font-family":"fontFamily",background:"background","background-color":"backgroundColor","background-image":"backgroundImage","background-repeat":"backgroundRepeat","background-position":"backgroundPosition","background-attachment":"backgroundAttachment","border-collapse":"borderCollapse","border-spacing":"borderSpacing","empty-cells":"emptyCells","table-layout":"tableLayout","caption-side":"captionSide","list-style":"listStyle","list-style-type":"listStyleType","list-style-image":"listStyleImage","list-style-position":"listStylePosition",cursor:"cursor","page-break-after":"pageBreakAfter","page-break-before":"pageBreakBefore","border-radius":"borderRadius","text-shadow":"textShadow"};if(R.isTrident)Result["float"]="styleFloat";return Result}();R.Object.$=function(id){return R.document.getElementById(id)};if(_chk.isUndefined(window.$))window.$=R.Object.$;R.Event.$e=R.Event.getEvent;R.Event.$t=R.Event.getEventTarget;R.Event.cancelEvent=R.Event.cancel;return R}()

// -------------------- cookie -------------------- //
function cr_getCookieValue(id)
{
    var cookie = new Cookie(id);
    return cookie.get();
}
function cr_setCookieValue(id, value, isEdit)
{
    var cookie = new Cookie(id);
    if (value) { cookie.set(value, isEdit); }
    else { cookie.clear(); }
}
var Cookie = function(key)
{
    this.key = key;
};
Cookie.prototype = 
{
    set : function(value, isConvertCookieString)
    {
        var buf = isConvertCookieString ? cr_convertCookieString(value) : value;
        cr_setCookie(this.key, buf);
    },
    get : function()
    {
        return cr_getCookie(this.key);
    },
    clear : function()
    {
        cr_clearCookie(this.key);
    }
};

function cr_getCookie(key)
{
    var strCookie;
    var strKey;
    var intStart;
    var intEnd;
    
    strCookie = document.cookie + ';';
    strKey = key + '=';
    
    intStart = strCookie.indexOf(strKey);
    if (intStart < 0) { return ''; }
    
    intEnd = strCookie.indexOf(';', intStart);
    return unescape(strCookie.substring(intStart + strKey.length, intEnd));
}
function cr_setCookie(key, val)
{
    var cookieLiveTime = new Date();
    cookieLiveTime.setMinutes(cookieLiveTime.getMinutes() + COOKIE_TIME);
    
    if(COOKIE_TIME == -1){
        document.cookie = key + '=' + escape(val) + '; path=/;';
    }
    else{
        document.cookie = key + '=' + escape(val) + '; path=/; expires=' + cookieLiveTime.toGMTString() + ';';
    }
}
function cr_clearCookie(key)
{
    document.cookie = key + '=xx; path=/; expires=Tue, 1-Jan-1980 00:00:00;';
}
function cr_convertCookieString(value)
{
    var strText = value;
    strText = strText.replace(/;/g,"ÅG");
    strText = strText.replace(/</g,"ÅÉ");
    strText = strText.replace(/>/g,"ÅÑ");
    strText = strText.replace(/\(/g,"Åi");
    strText = strText.replace(/\)/g,"Åj");
    strText = strText.replace(/\'/g,"Åf");
    strText = strText.replace(/\"/g,"Åh");
    strText = strText.replace(/\*/g,"Åñ");
    strText = strText.replace(/\+/g,"Å{");
    strText = strText.replace(/\-/g,"Å|");
    strText = strText.replace(/\//g,"Å^");
    strText = strText.replace(/%/g,"Åì");
    strText = strText.replace(/\$/g,"Åê");
    strText = strText.replace(/\&/g,"Åï");
    strText = strText.replace(/\!/g,"ÅI");
    strText = strText.replace(/\|/g,"Åb");
    strText = strText.replace(/\{/g,"Åo");
    strText = strText.replace(/\}/g,"Åp");
    strText = strText.replace(/\./g,"ÅD");
    strText = strText.replace(/\\/g,"Åè");
    
    return strText;
}
// -------------------- cookie -------------------- //

// -------------------- get/set -------------------- //
function cr_getCookieContentsId()
{
    return cr_getCookieValue(COOKIE_PREFIX + 'contentsId');
}

function cr_setCookieContentsId(value)
{
    return cr_setCookieValue(COOKIE_PREFIX + 'contentsId', value);
}
// -------------------- get/set -------------------- //

function cr_changeScheme(url)
{
    return (location.protocol == "https:") ?url.replace(/^http:/, 'https:') : url;
}

function cr_sendEffectLog()
{
    var u1;
    if(document.getElementById("cr_user1") != null) { u1 = document.getElementById("cr_user1").value; };
    var u2;
    if(document.getElementById("cr_user2") != null) { u2 = document.getElementById("cr_user2").value; };
    var u3;
    if(document.getElementById("cr_user3") != null) { u3 = document.getElementById("cr_user3").value; };
    var u4;
    if(document.getElementById("cr_user4") != null) { u4 = document.getElementById("cr_user4").value; };
    var u5;
    if(document.getElementById("cr_user5") != null) { u5 = document.getElementById("cr_user5").value; };
    var u6;
    if(document.getElementById("cr_user6") != null) { u6 = document.getElementById("cr_user6").value; };
    var u7;
    if(document.getElementById("cr_user7") != null) { u7 = document.getElementById("cr_user7").value; };
    var u8;
    if(document.getElementById("cr_user8") != null) { u8 = document.getElementById("cr_user8").value; };
    var u9;
    if(document.getElementById("cr_user9") != null) { u9 = document.getElementById("cr_user9").value; };
    var u10;
    if(document.getElementById("cr_user10") != null) { u10 = document.getElementById("cr_user10").value; };
    
    cr_sendEffectLogInP(u1,
                     u2,
                     u3,
                     u4,
                     u5,
                     u6,
                     u7,
                     u8,
                     u9,
                     u10);
}

function cr_sendEffectLogInP(effect1,
                       effect2,
                       effect3,
                       effect4,
                       effect5,
                       effect6,
                       effect7,
                       effect8,
                       effect9,
                       effect10)
{
    var contentsId = cr_getCookieContentsId();
    if(contentsId == "") { return; }
    var logUrl = ROOT_URL + 'c.aspx?';
    logUrl += 'pacid=' + contentsId +'&randam=' + Math.random();

    var logParam = ""; 

    if (effect1)
    {
        logParam += '&u1=' + encodeURIComponent(effect1);
    }
    if (effect2)
    {
        logParam += '&u2=' + encodeURIComponent(effect2);
    }
    if (effect3)
    {
        logParam += '&u3=' + encodeURIComponent(effect3);
    }
    if (effect4)
    {
        logParam += '&u4=' + encodeURIComponent(effect4);
    }
    if (effect5)
    {
        logParam += '&u5=' + encodeURIComponent(effect5);
    }
    if (effect6)
    {
        logParam += '&u6=' + encodeURIComponent(effect6);
    }
    if (effect7)
    {
        logParam += '&u7=' + encodeURIComponent(effect7);
    }
    if (effect8)
    {
        logParam += '&u8=' + encodeURIComponent(effect8);
    }
    if (effect9)
    {
        logParam += '&u9=' + encodeURIComponent(effect9);
    }
    if (effect10)
    {
        logParam += '&u10=' + encodeURIComponent(effect10);
    }

    var fullLength = logUrl.length + logParam.length;
    if(fullLength <= 2020)
    {        
        logUrl += logParam;
        PAC.Object.addScript(logUrl);
    }
    else
    {
        PAC.Object.addScript(logUrl + '&over=' + fullLength);
    }
}

function cr_getUrlParam(name)
{
    return params[name] || '';
}

function cr_getQueryStringArray()
{
    var queryStrings = location.search.substr(1).split('&');
    for (var i = 0; i < queryStrings.length; i++)
    {
        var key = queryStrings[i].substring(0,queryStrings[i].indexOf('='));
        var value = queryStrings[i].substring(queryStrings[i].indexOf('=') + 1 ,queryStrings[i].length);
        params[key] = value;
    }
}

function cr_window_load()
{
    cr_getQueryStringArray();

    var contentsId = cr_getUrlParam('pacid');

    if (contentsId != '')
    {
        cr_setCookieContentsId(contentsId);
    }
}

PAC.Event.add(window, 'load', cr_window_load);
