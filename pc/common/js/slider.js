slider = function(){
	this.initialize(arguments[0]);
	
}
slider.prototype = {
	selectedIndex : 0,
	prevIndex : 0,
	maxIndex : 0,
	windoww : 0,
	options :{
		$footer:null,
		$header:null,
		layers:[]
	},
	/*
		layers[i]{
			bookmark //�L���X�N���[���g�b�v�ʒu
			$contents:{} //�\������R���e���c
			$headers:{} //�w�b�_�[�iclass��selected��}���j
		}
	*/
	setIndex:function(options){
		this.prevIndex = options.prevIndex ? options.prevIndex : options.prevIndex == 0 ? 0 :  this.prevIndex;
		this.selectedIndex = options.selectedIndex ? options.selectedIndex : options.selectedIndex == 0 ? 0 : this.selectedIndex;
	},
	initialize:function(){
		$.extend(this.options,arguments[0]);
		this.maxIndex = this.options.layers.length - 1;
	},
	go_prev_layer : function(){
		var index = this.index <= 0 ? 0 : this.index - 1;
		this.go_layers(index);
	},
	go_next_layer : function(){
		var index = this.index  >= this.max_index ? this.max_index : this.index + 1;
		this.go_layers(index);
	},
	show_layer:function(index,options){
		if(this.index == index){ return; }
		_options =  $.extend({
			direction:"left",//���E�ǂ��炩��\������邩
			index:index,//�\�����郌�C���[
			$target:null, //���C���[�\����A�X�N���[���g�b�v�ƂȂ鍀��
			header:"hidden"
		}, options);
		
		this._setDisplay(_options);
		this.setIndex({prevIndex:this.selectedIndex,selectedIndex:index});
	},
	hide_layer:function(index,options){
		_options =  $.extend({
			direction:"right",//���E�ǂ��炩��\������邩
			index:this.prevIndex,//�\�����郌�C���[
			$target:null, //���C���[�\����A�X�N���[���g�b�v�ƂȂ鍀��
			header:"show"
		}, options);
		
		this._setDisplay(_options);
		this.setIndex({prevIndex:this.selectedIndex,selectedIndex:this.prevIndex});
	},
	go_layer:function(index,options){
		if(this.index == index){ return; }
		var direction = this.selectedIndex > index ? "right" : "left";
		_options =  $.extend({
			direction:direction,//���E�ǂ��炩��\������邩
			index:index,//�\�����郌�C���[
			$target:null, //���C���[�\����A�X�N���[���g�b�v�ƂȂ鍀��
			header:"show"
		}, options);

		this._setDisplay(_options);
		this.setIndex({prevIndex:this.index,selectedIndex:index});

	},
	_setDisplay:function(options){
		//�w�b�_�̐ݒ�
		var selectedLayer = this.options.layers[options.index];
		var prevLayer = this.options.layers[this.selectedIndex];
		
		prevLayer.bookmark = $(window).scrollTop();

		//�\�����郌�C���[�̐؂�ւ�
		//�w�b�_�̕ύX
		if(options.header == "hidden"){
			this.options.$header.hide();
			this.options.$footer.hide();
		}else{
			this.options.$header.show();
			this.options.$footer.show();
		}
		$(".table_process").removeClass("select");
		if(selectedLayer.$headers){selectedLayer.$headers.addClass("select");}

		//�\�����郌�C���[�̏���
		var element_width =  prevLayer.$contents.width();
		var starting_left = options.direction == "left" ? element_width : -element_width;
		var finish_left = 0;
		selectedLayer.$contents.css({display:"block",left:starting_left});
		prevLayer.$contents.hide();

		//top�ʒu�̎擾
		//�D�揇��: $target > bookmark > 0
		var top = options.$target ? options.$target.offset().top : selectedLayer.bookmark ? selectedLayer.bookmark : 0;

		$('html,body').scrollTop(top);
		selectedLayer.$contents.animate({
			left:finish_left
		});

	}

}
