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
		
		 	var blog_list = $(this),
		 		currentPageItem = $('#selected1', blog_list),
		 		blob,
		 		reset;
		 		
		 	$('<li id="blob1"></li>').css({
		 		width : currentPageItem.outerWidth(),
		 		height : currentPageItem.outerHeight() + options.overlap,
		 		left : currentPageItem.position().left,
		 		top : currentPageItem.position().top - options.overlap / 2,
		 		backgroundColor : options.color
		 	}).appendTo(this);
		 	
		 	blob = $('#blob1', blog_list);
		 	blob.css('opacity', 0);
			$('li:not(#blob1)', blog_list).hover(function() {
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
		
		}); // end each
	
	};

})(jQuery);