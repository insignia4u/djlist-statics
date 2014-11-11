;(function($){

	var ListDropDown=[];
	$.fn.dropDown = function() {

		this.each(function(i){
		
			if($(this).data('ready'))
				return;

			var  self	=	$(this)
				,label	=	self.find('.label')
				,list	=	self.find('.list')
				,html	=	list.html();
			
				self.data('ready',true).attr('data-dropdown',true);

				html='<div class="swiper-wrapper"><div class="swiper-slide">'+html+'</div></div><div class="dropDown-scrollbar scrl'+i+'"></div>';

				list.html(html);


				ListDropDown[i] = list.swiper({
					scrollContainer:true,
					mousewheelControl : true,
					autoResize:false,
					resizeReInit:false,
					mode:'vertical',
					onFirstInit:function(){
						list.addClass('ready');
					},
					onInit:function(){

					},
					//Enable Scrollbar
					scrollbar: {
						container :'.scrl'+i,
						hide: false,
						draggable: true
					}
				});



				label.on('click',function(e){
					
					label.toggleClass('active');
					list.stop().slideToggle(function(){

						if(list.is(':visible') && list.find('img').length)
							ListDropDown[i].reInit();
					});
					
				});

				self.on('mouseenter',function(){
					$(this).attr('no-close',true);
				}).on('mouseleave',function(){
					$(this).attr('no-close',false);
				});

			

		});

	};


	var closeDrop=function(e){

		$('[data-dropdown]').not('[no-close="true"]').find('.label.active').trigger('click');	

	}

	$('body').on('click',closeDrop);

})(jQuery);
