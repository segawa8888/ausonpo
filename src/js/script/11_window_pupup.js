var win2
function openwin2(pop,winname){
	var avW = 700;
	var avH = 650;
	win2 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=" + avW + ",height=" + avH + "");
	win2.opener = self;
	win2.focus();
}
// 親ウインドウが閉じる際に子ウインドウも閉じる
onunload = function() {
	if(!win2) return false;
	win2.close();
}