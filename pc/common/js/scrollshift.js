$(document).ready(function(){
	$('a[href^=#]').not('a[href=#]').click(function(){
		var target  = $(this.getAttribute('href'));
		if(target.length){
			var point = target.offset().top - 100;	
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
			return false;
		}
	});
});