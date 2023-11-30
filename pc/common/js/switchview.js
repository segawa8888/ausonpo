/*******************************
$1:options.
	viewport:viewport�̒l�������l����ύX����ꍇ
	browserWidth:�\���ؑւ̃u���E�U��(�����l767)

	pc:�f�o�C�X��PC���̏ꍇ�̕\���̍ۂɎg�p
		-csslist[]
		-jslit[]

	sp:�f�o�C�X��SP���̏ꍇ�̕\���̍ۂɎg�p
		-csslist[]
		-jslit[]

	getViewtype:�i pc || sp )

*******************************/
;(function(window, $){
	// �C���i�[�N���X
	var SwitchView = function(){ this.initialize.apply(this, arguments); }

	// �v���g�^�C�v
	SwitchView.prototype = {
		head:document.getElementsByTagName("head")[0],
		//opition�����l
		options: {
			autoCAMP_CD:true,
			viewport:{
				initialScale: 1.0,
				minScale: 1.0,
				maxScale: 1.0,
				scalable: "no",
				spWidth: "device-width"
			},
			pc : {},
			sp : {},
			browserWidth:767
		},
		cookies: [],
		requestparams:{
			CAMP_CD : "",
			CLS_CD : "",
			DRT_CD : ""
		},
		_requestParam : "",
		device: "",

		// ������
		initialize: function(options){
			$.extend(this.options,options);
			
			//���N�G�X�g�p�����[�^�̎擾
			this._CreateSetRequestParam();

			var requestType = this.getRequestParam("viewtype");

			this.device = getDevice();
			
			//requestParam��viewtype���ݒ肳��Ă���ꍇ�A�ŗD��
			this.viewtype = requestType ? requestType : this.device;
			if(this.viewtype == "pc"){
				this.viewtype = requestType ? requestType : this.getViewWidth();
			}else{
				//viewport��useragent��SP�̏ꍇ�̂ݐݒ�
				this.addViewPort();
			}
			
			//js,css�̓ǂݍ���
			this.loadCSS();
		},
		isRequestParam: function(){
			return !!(this._requestParam)
		},
		_CreateSetRequestParam : function(){
			var camp_cd = this.getRequestParam("CAMP_CD");
			var cls_cd = this.getRequestParam("CLS_CD");
			var drt_cd = this.getRequestParam("DRT_CD");
			this.requestparams.CAMP_CD =  camp_cd ? camp_cd : getCookie("CAMP_CD");
			this.requestparams.CLS_CD = cls_cd ? cls_cd : getCookie("CLS_CD");
			this.requestparams.DRT_CD = drt_cd ? drt_cd : getCookie("DRT_CD");

			var string = "";
			if(this.requestparams.CAMP_CD){
				string += "CAMP_CD="  + this.requestparams.CAMP_CD;
			}
			if(this.requestparams.CLS_CD){
				if(string){ string += "&"; }
				string += "CLS_CD="  + this.requestparams.CLS_CD;
			}
			if(this.requestparams.DRT_CD){
				if(string){ string += "&"; }
				string += "DRT_CD="  + this.requestparams.DRT_CD;
			}
			if(!!!string){
				//���N�G�X�g�p�����[�^���Ȃ��ꍇ�A�t�@���N�V�������폜
				this.setRequestParam = function(){ return; }
			}
			this._requestParam = string;
		},
		addViewPort : function(){
			var meta = createElement("meta",{
				name:"viewport",
				content:[
					"width="+this.options.viewport.spWidth,
					", initial-scale="+this.options.viewport.initialScale,
					", minimum-scale="+this.options.viewport.minScale,
					", maximum-scale="+this.options.viewport.maxScale,
					", user-scalable="+this.options.viewport.scalable
				].join("")
			});
			head = document.getElementsByTagName("head")[0];
			head.appendChild(meta);
		},

		// CSS,js�̓ǂݍ��݂��s���܂�
		loadCSS: function(cssList){
			
			var csslist = (this.viewtype=="sp") ? this.options.sp.csslist : this.options.pc.csslist;
			if(!!csslist){
				for(var i=0; i<csslist.length; i++){
					var link = createElement("link",{
						rel: "stylesheet",
						type: "text/css",
						href: csslist[i] 
					});
					head = document.getElementsByTagName("head")[0];
					head.appendChild(link);
				}
			}

			var jslist = (this.viewtype=="sp") ? this.options.sp.jslist : this.options.pc.jslist;
			if(!!jslist){
				for(var i=0; i<jslist.length; i++){
					var script = createElement("script",{
						type: "text/javascript",
						src: jslist[i] 
					});
					head = document.getElementsByTagName("head")[0];
					head.appendChild(script);
				}
			}
		},
		getViewtype : function(){
			return this.viewtype;
		},
		isSP : function(){
			return (this.viewtype === "sp");
		
		},

		// view�̃X�C�b�`�p�̃C�x���g
		//toPcView: function(){
		//	instance.setCookie("viewtype", "pc");
		//	location.reload();
		//},

		//toSpView: function(){
		//	instance.setCookie("viewtype", "sp");
		//	location.reload();
		//},


		/**
		* ---------------------------------------------------------
		* @ Cookie�̑���
		* ---------------------------------------------------------
		**/

		// �w�肵���L�[��requestparam���擾
		getRequestParam : function(astrKey){
			var lstrTmp1;
			var lstrTmp2;
			var lstrTmp2U;
			var lintCont1;
			var lintCont2;
			var lintCont3;
			var lintLen;

			lstrTmp1 = " " + document.location.search.substring(1) + ";";
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
			return false;
		},
		/**
		* ---------------------------------------------------------
		* @ ���N�G�X�g�p�����[�^�̐ݒ�
		* ---------------------------------------------------------
		**/
		setRequestParam : function(element){
			if(!!this._requestParam){
				var url = $(element).attr("href");
				if(url.indexOf("?") != "-1"){
					$(element).attr("href",url + "&" + this._requestParam);
				}else{
					$(element).attr("href",url + "?" + this._requestParam);
				}
			}
		},

		/**
		* ---------------------------------------------------------
		* @ �u���E�U���̎擾�ioptions.browserWidth�ȏ�ł����PC)
		* ---------------------------------------------------------
		**/
		getViewWidth : function(){
			if($(window).width() < this.options.browserWidth ){
				return "sp";
			}else{
				return "pc";
			}
		}

	};


	/*----------------------------------------------------------*
	*   jquery Utility                                          *
	* --------------------------------------------------------- */
	function getDevice(){
		var agent = navigator.userAgent;
		var reg =  new RegExp("^Mozilla/.*(?:.+?(?:iPod|iPhone))|( (?:Android).+?(?:Mobile) )|( (?:Mobile).+?(?:Firefox) ) ");

		//�X�}�[�g�t�H���̏ꍇ
		if (reg.test(agent)){
				return "sp";
		}else {
				return "pc";
		}
	}

	function createElement(tagName, attributes){
		var o = document.createElement(tagName), i;
		attributes = attributes || {};
		for(i in attributes){
			o.setAttribute(i, attributes[i]);
		}
		return o;
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


	$.SwitchView = function(options){
		$SwitchView = new SwitchView(options);
	};
	$(document).ready(function() {
		if($SwitchView.options.autoCAMP_CD){
			if($SwitchView.isSP() && $SwitchView.isRequestParam()){
				$("a").each(function(){
					var $href = $(this).attr("href");
					if(!!($href)){
						var prefix_url = $href.substr(-5);
						var prefix_slash_url = $href.substr(-1);
						var suffix_url = $href.substr(0,4);
						if(prefix_url === ".html" || suffix_url === "http" || prefix_slash_url === "/"){
							$SwitchView.setRequestParam(this);
						}
					}
				});
			}
		}
	});

}(window, jQuery));


