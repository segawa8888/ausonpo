/*
 * extend jquery method
 */

;(function(window, $){
	/*----------------------------------------------------------*
	 * リソースマネージャ
	 * -------------------------------------------------------- */
	var ResourceManager = function(){};
	ResourceManager.prototype = {
		map:{},
		put:function(key, value){
			if($.type(key) === 'string' && $.type(value) !== 'undefined'){
				this.map[key] = value;
			}
		},
		set:function(obj, val){
			var self = this;
			if($.type(obj) === 'undefined'){
				return;
			}
			if($.type(obj) === 'array' || $.type(obj) === 'object'){
				$.each(obj, function(key, value){
					self.put(key, value);
				});
			}
			if($.type(obj) === 'string' && $.type(val) !== 'undefined'){
				this.put(obj, val);
			}
		},
		docwrite:function(key){
			$.docwrite(this.get(key));
		},
		get:function(key){
			if($.type(this.map[key]) === 'undefined'){
				return "";
			}
			return this.map[key];
		}
	};
	jQuery.extend({
		/*----------------------------------------------------------*
		 * リソースマネージャ instance
		 * -------------------------------------------------------- */
		 resource:new ResourceManager(),
		/*----------------------------------------------------------*
		 * document.write のwrapper。引数が文字列の場合のみ実行する。
		 * tag : HTML文字列
		 * -------------------------------------------------------- */
		docwrite:function(tag){
			if(typeof tag === 'string'){
				document.write(tag);
			}
			return this;
		}
	});


	/*----------------------------------------------------------*
	 * ページ遷移（ポップアップ含む）
	 * -------------------------------------------------------- */
	$.fn.anchorControl = function(arg){
		$(this).css({cursor:"pointer"});
		$(this).click(
			function() {
				var setRequestparam = function(url,param){
					if(url.indexOf("?") >= 0){
						url += "&" + param;
					}else{
						url += "?" + param;
					}
					return url;
				};

				var options = {
					url:"",
					window_name:"_blank",
					prop : {
						width:"850px",
						menubar:"yes",
						camp_cd:false,
						toolbar:"yes",
						scrollbars:"yes"
					}
				}
				$.extend(options,arg);
				
				if (options.camp_cd){
					var campcd = getCookie("CAMP_CD");
					
					if(campcd){
						options.url = setRequestparam(options.url,"CAMP_CD=" + campcd);
					}
				}

				var params=[];
				if(options.window_name != "_self"){
					for(var prop_name in options.prop){
						params.push(prop_name + "=" + options.prop[prop_name]);
					}
				}
				window.open(options.url, options.window_name, params.join(","));
			}
		);
		return this;
	}


}(window, jQuery));
