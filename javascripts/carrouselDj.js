var Carrousel={
	item:[],
	play:function(){

		$('.carrousel-dj:visible').each(function(i){

				var obj=this;
				$(obj).find('.carrousel-scrollbar').html('');
				Carrousel.item.push($(obj).swiper({
				   slidesPerView: 'auto',
				   //Enable Scrollbar
				   scrollbar: {
				     container: $(this).find('.carrousel-scrollbar')[0],
				     hide: false,
				     draggable: true,
				     snapOnRelease: true
				   }
				 })
				);

		});

	},
	reInit:function(esp){

		for(i in Carrousel.item){
			Carrousel.item[i].destroy(true);
		}
		Carrousel.item=[];

		Carrousel.play();

	}
}

$(document).on('ready',Carrousel.play);
