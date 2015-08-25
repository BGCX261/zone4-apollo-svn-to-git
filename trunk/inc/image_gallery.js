
 $(document).ready(function(){

	var shiftSpeed = 1500;

	var bigSlideWidth = 600;
	var bigSlideHeight = 400;
	var smallSlideWidth = 500;
	var smallSlideHeight = 300;
	var tinySlideWidth = 400;
	var tinySlideHeight = 200;
	var columnCount = 4;
	var rowCount = 4;
	

	function shiftBoxes(boxN) {
		var col = ( (boxN) % rowCount ) * -1;
		var row = Math.floor( (boxN) / columnCount ) * -1;
		$("#big-panel").stop().animate({ left: bigSlideWidth * col, top: bigSlideHeight * row }, shiftSpeed, "easeInOutCubic"  ); 
		$("#small-panel").stop().animate({ left: smallSlideWidth * col +50, top: smallSlideHeight * row +50 }, shiftSpeed, "easeInOutCubic"  ); 
		$("#tiny-panel").stop().animate({ left: tinySlideWidth * col +100, top: tinySlideHeight * row +100 }, shiftSpeed, "easeInOutCubic"  ); 
	}  

	$("ul#console li a").click( function() { 
		consoleIndex = $("ul#console li a").index(this);
		shiftBoxes( consoleIndex  ); 
	});


$(function($) {
    $('div.slide-wrap').each(function() {
        var oheight = 320;
        var owidth = 520;
        var nheight = 140;
        var nwidth = 340;
        var top = ((oheight - nheight) / 2);
        var left = ((owidth - nwidth) / 2);
        
       $(this).children(0).stop().css({'height':nheight+'px', 'width': nwidth+'px', 'padding-left':'90px',
            		  'padding-top':'90px' });
 		
 
        $(this).mouseleave(function() {
   			
            $(this).children(0).stop().animate({
            		  'padding-left':'90px',
            		  'padding-top':'90px',
                    'height' : nheight+'px',
                    'width' : nwidth+'px',
                    }, 210);
     
        });
 
        $(this).mouseenter(function() {
            $(this).children(0).stop().animate({
                   'padding-left':'0px',
            		  'padding-top':'0px',
                    'height' : oheight+'px',
                    'width' : owidth+'px'}, 150, function() {
                        $(this).css('height', oheight+'px').parent();
                    });
        	
        });

    });
});
	
	

});
