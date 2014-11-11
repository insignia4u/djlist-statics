;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		$win
            .on('load', function (){
                if ( $(".new-slides").length ) {
                    slider();
                }

                if ( $(".home-video-slides").length ) {
                    videoSlider();
                }

                if ( $(".home-page-slides").length ) {
                    homeSlider();
                }

                moveSongPlace()
    		})
            .on('resize', function (){
                if ( $win.width() < 900 ) {
                    $('.input-new-change input').attr('placeholder', 'search')
                } else {
                    $('.input-new-change input').attr('placeholder', 'search by name, alias, real name...')
                }
            })

             if ( $win.width() < 900 ) {
                $('.input-new-change input').attr('placeholder', 'search')
            }

        if ( $('.events-details-entry-scrl').length ){
            $('.events-details-entry-scrl').each( function() {
                $(this).jScrollPane();

                var api = $(this).data('jsp');
                var throttleTimeout;

                $(window).bind( 'resize', function(){
                    if (!throttleTimeout) {
                        throttleTimeout = setTimeout( function(){
                            api.reinitialise();
                            throttleTimeout = null;
                        },50);
                    }
                });
            })
        }

        $('.container-web-home .sc-play').on('click', function (){
            $(this).parents('.player-item').toggleClass('active')
        })

        $('.checked-dj-box').on('click', function (){
            $(this).parents('.dj-box').toggleClass('active'); 
        })
        $('.onboard-container .follow .button-follow').on('click', function (e){
           $(this).parents('.dj-box').toggleClass('active'); 
           e.preventDefault()
        })


        function moveSongPlace(){
            if ( !$('.player-home').length ){
                return;
            }
            $('.player-home').each( function (){
                var $player = $(this).find('.player-item');
                

                $player.each( function (){
                    var playerInfo = $(this).find('.sc-trackslist li');
                    var playerPlace = $(this).find('.player-place');
                    var playerPlaceInner = $(this).find('.sc-player');

                    $(this).find('.items-track').appendTo(playerPlaceInner)

                    playerPlace.appendTo(playerInfo);
                })                
            })
        }

        function videoSlider(){
            $(".home-video-slides").carouFredSel({
                auto: false,
                responsive: true,
                item:1,
                items: {
                    height: 'variable'
                },
                scroll: {
                    items: 1,
                },
                swipe: {
                    onTouch : true,
                    onMouse : true
                },
                pagination: ".new-pagination-video"
            });         
        }   

        function homeSlider(){
            $(".home-page-slides").carouFredSel({
                auto: false,
                responsive: true,
                item:1,
                items: {
                    height: 'variable'
                },
                scroll: {
                    items: 1,
                },
                swipe: {
                    onTouch : true,
                    onMouse : true
                },
                pagination: ".new-pagination"
            });         
        }   

		function slider(){
			$(".new-slides").carouFredSel({
                auto: false,
                responsive: true,
                item:1,
                items: {
                    height: 'variable'
                },
                scroll: {
                    items: 1,
                },
                swipe: {
                    onTouch : true,
                    onMouse : true
                },
                pagination: ".new-pagination"
            });			
		}	
    });
})(jQuery, window, document);
