(function($) {

	$.fn.spasticNav = function(options) {
	
		options = $.extend({
			overlap : 20,
			speed : 1000,
			reset : 1500,
			color : '#385e6a',
			easing : 'easeOutExpo'
		}, options);
	
		return this.each(function() {
		
		 	var nav = $(this),
		 		currentPageItem = $('#selected', nav),
		 		blob,
		 		reset;
		 		
		 	$('<li id="blob"></li>').css({
		 		width : currentPageItem.outerWidth(),
		 		height : currentPageItem.outerHeight() + options.overlap,
		 		left : currentPageItem.position().left,
		 		top : currentPageItem.position().top - options.overlap / 2,
		 		backgroundColor : options.color
		 	}).appendTo(this);
		 	
		 	blob = $('#blob', nav);
		 	blob.css('opacity', 0);
			$('li:not(#blob)', nav).hover(function() {
				// mouse over
				
				clearTimeout(reset);
				blob.animate(
					{
						left : $(this).position().left,
						width : $(this).width(),
						opacity : 1
					},
					{
						duration : options.speed,
						easing : options.easing,
						queue : false
					}
				);
			}, function() {
				// mouse out	
				reset = setTimeout(function() {
					blob.animate({
						width : currentPageItem.outerWidth(),
						left : currentPageItem.position().left,
						opacity:0
					}, options.speed)
									
				}, options.reset);
			});
		});
	};
})(jQuery);

(function($) {
	$.fn.spastic = function(options) {
	
		options = $.extend({
			overlap : 10,
			speed : 500,
			reset : 1500,
			color : '#0b2b61',
			easing : 'easeOutExpo'
		}, options);
	
		return this.each(function() {
		
		 	var nav = $(this),
		 		currentPageItem = $('#selected1', nav),
		 		blob,
		 		reset;
		 		
		 	$('<li id="blob1"></li>').css({
		 		height : currentPageItem.outerHeight(),
		 		width : currentPageItem.outerWidth() + options.overlap,
		 		left : currentPageItem.position().left,
		 		top : currentPageItem.position().top 
		 		//backgroundColor : options.color
		 	}).appendTo(this);
		 	
		 	blob = $('#blob1', nav);
		 	
			$('li:not(#blob1)', nav).mouseover(function() {
				clearTimeout(reset);
				blob.animate(
					{
						top : $(this).position().top,
						height : $(this).height()
					},
					{
						duration : options.speed,
						easing : options.easing,
						queue : false
					}
				);
			});
		}); 	
	};

})(jQuery);