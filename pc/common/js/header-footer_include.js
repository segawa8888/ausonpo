function writeHeader(rootDir, options){ //ヘッダー読み込み
	var page = "header.html";
	if(!!options){
		if(!!options.page){
			page = options.page;
		}
	}
    $.ajax({ 
        url: rootDir + page,  
        cache: false, 
        async: false,  
        success: function(html){ 
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html); 
        } 
    }); 
}

function writeFooter(rootDir, options){ //フッター読み込み
	var page = "footer.html";
	if(!!options){
		if(!!options.page){
			page = options.page;
		}
	}
    $.ajax({ 
        url: rootDir + page,  
        cache: false, 
        async: false,  
        success: function(html){ 
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html); 
        } 
    }); 
}
