var MenuMobile={
	menu:$('.menu-mobile'),
	open:function(){

		MenuMobile.menu
			.css('min-height',$(window).height())
			.fadeIn(500,function(){
				$('#container-web').hide();
			});

	},
	close:function(){
		$('#container-web').show();
		MenuMobile.menu.fadeOut(function(){
			$(this).removeAttr('style');
		});
	}
}

function openActivity(){

	$('html,body').animate({scrollTop:0},500,function(){
		MenuMobile.menu.css('left','-400px').fadeOut('slow');
		setTimeout(MenuMobile.close,500);
		$('.button-notification').trigger('click');
		
	});
}

$(document).on('ready',function(){
	$('.button-menu').on('click',MenuMobile.open);
	$('.menu-mobile .close').on('click',MenuMobile.close);
});

