enquire.register("screen and (max-width: 1024px)", {
      match : function() {
        $('.cover-slider').appendTo('.columns-center');
        $('#social-interactions').insertAfter('.columns-center #photos');
        $('#artists-info').insertAfter('.columns-left #videos');
        $('#bio').insertAfter('.columns-left #artists-info');
      },
      unmatch : function() {
        $('#social-interactions').appendTo('.columns-right');
        $('#artists-info').appendTo('.columns-right');
        $('#bio').appendTo('.columns-right');
        $('.cover-slider').appendTo('.columns-right');
      }
    });  
		
	
