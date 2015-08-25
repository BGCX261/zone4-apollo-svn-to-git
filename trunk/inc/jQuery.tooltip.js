(function($){
	$.fn.tooltip = function(options) {
	//text_clear();	
	
		var
		  defaults = {
		  	background: 'rgba(0,0,0,0.4)',
			color: '#afcdcd',
			rounded: false
		  },
		  settings = $.extend({}, defaults, options);
		  
	//	  this.each(function() {


	
		
	//		if($this.is('a') && $this.attr('title') != '') {
			
		//	des=$(this).attr('title');
			//this.title = '';
				this.hover(function() {
				var image_width, image_top, image_left, image_name;
						 
		 
		  var ides = $(this).attr('tooltip');
		des = ides
		
		this.ides= '';
					// mouse over
/*	var wide = $("a img").css('width');
		var heig = $("a img").css('height'); 
		alert(wide);
					$('<div class="highlight" /></div>')
					  .appendTo(this)
					 //.text(des)
					  .hide()
					  .css({
					  width: wide,
					  height: heig,
				//	  	backgroundColor: settings.background,
				//		color: settings.color,
						top: 100,
						left: 650
					  })
					  .fadeIn(800);
					*/
					image_width=$(this).children("img").attr("width");
					image_top=$(this).children("img").css("top");
					image_left=$(this).children("img").css("left");
					image_left=parseInt(image_left)+15;
					image_top=parseInt(image_top)+15;
					//image_top=image_top + image_top*(60/100);
					//image_left=image_left + image_left*(35/100);
				//	$(this).children("img").attr('src', 'images/planet_5_glow.png').fadeIn(400);
$('<div id="planet_hover"></div>').appendTo('#space').hide().css({width:image_width-33, height:image_width-33, top:image_top, left:image_left}).fadeIn(400);

				
					$('<div class="themessage" id="tooltip" ?></div>')
					  .appendTo('body')
					 //.text(des)
					  .hide()
					  .css({
				 // 	backgroundColor: settings.background,
				//		color: settings.color,
						top: '40%',
						left: '40%'
					  })
					  .fadeIn(800);
					  

					  
text_clear();
									  	  	  	  	  
/*				  if(settings.rounded) {
				  	$('#tooltip').addClass('rounded');
				  }*/
				  
				}, function() {
					// mouse out
					
				//	$(this).children("img").attr('src', 'images/planet_5.png').fadeIn(400);
					$('#planet_hover').remove();
		
					$('#tooltip').remove();
				});
		//	}
/*			this.mousemove(function(e) {
				$('#tooltip').css({
					top: 300,
					left: 550
			     });
			});*/
		  //});
		  // returns the jQuery object to allow for chainability.
		  return this;
	}
	
	/*
		$("#rightsidebar a, #rightsidebar_1 a").hover(function(e) {
		var y = $(this).offset().top - $("#rightsidebar").offset().top;
		var content = $(this).attr('title');
		var id = $(this).attr('id');

		$(this).attr('title', '');

		$("#rightsidebar").append("<div id='s_tooltip'>" + content + "</div>");
		$("#rightsidebar #s_tooltip").css('opacity', 0.7).css('top', y + 5).css("right", 150).data('trigger', id).fadeIn();
		},
			function() {
			var trigger = $("#rightsidebar #s_tooltip").data('trigger');
			var content = $("#rightsidebar #s_tooltip").html();
			$('#' + trigger).attr('title', content);
			$("#rightsidebar #s_tooltip").remove();
		}
	);
	*/
})(jQuery);

(function($){
	$.fn.tool = function(options) {
	//text_clear();	
	
		var
		  defaults = {
		  	background: 'rgb(0,0,0,)',
			color: '#afcdcd',
			rounded: false
		  },
		  settings = $.extend({}, defaults, options);

				this.hover(function(e) {
			
						  var $this = $(this);
		  
		  var ides = $(this).attr('tooltip');
		
		if($(this).is('a') && $(this).attr('tooltip') != '') {
		this.ides= '';
			
					$('<div id="blog_tooltip" style="z-index: 700;" ></div>')
					  .appendTo('#blog_console')
					 .text(ides)
					  .hide()
					  .css({
						top: 289,
						left: 250
					  })
					  .fadeIn(800);
					  				  							  	  	  	  	  
				  };
				}, function() {
					$('#blog_tooltip').remove();
				});
		  return this;
	}	
})(jQuery);
