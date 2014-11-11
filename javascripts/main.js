var Slider={

  pages:null,

  init:function(){
    
    if(!$('.swiper-container').length)
        return;
      
    Slider.pages = $('.swiper-container').swiper({

      scrollContainer: true,
      scrollbar: {
        container: '.pagination-slider'
      }
      
    });

    Slider.resize();

    $(window).on('resize',Slider.resize);

  },

  resize:function(){

    var width=$('.cover-slider').width();
    $('.cover-slider').css('height',width);   
    $('.swiper-slide').css('width',width * $('.swiper-container .slider').length);   
    $('.swiper-slide .slider').css('width',width).css('height',width);   
    Slider.pages.reInit();


  }

}

$(document).on('ready',Slider.init);


function LoginTabs(){
  $(".login-tab").click(function(){
    $(".login-tab").addClass("selected");
    $(".signup-tab").removeClass("selected");
    $(".signup-form").fadeOut(400, function(){
      $(".login-form").fadeIn(200);      
    });    
  });
  $(".signup-tab").click(function(){
    $(".signup-tab").addClass("selected");
    $(".login-tab").removeClass("selected");
    $(".login-form").fadeOut(400,function(){
      $(".signup-form").fadeIn(200);
    });     
  });
}


function Menu2(){
  $(".button-menu-profile").click(function(){
    $(".menu-profile").slideToggle();
    $(".button-menu-profile i").toggleClass("fa-bars").toggleClass("button-equis");
    
  });  
}

function WorldMenu(){
  $('.world-navbar-menu').click(function  (){
    $('#world').slideToggle();
  });
}



function PlayVideo(){
  $('#videos .video-play').click(function(){
    $('#videos .video-image').toggleClass('hidden');
    $('#videos .video').toggleClass('hidden');
    $('#videos .video-play').toggleClass('hidden');

  });
}

function PlayerTab(){

  $(".title-tracks").on('click',function(){

    $(this).addClass("selected");
    $(".title-mixes").removeClass("selected");

    $(".mixes").fadeOut(function(){

      $(".tracks").fadeIn(function(){

        Carrousel.reInit(1);
      });
        Carrousel.reInit(1);
      
    });


  });

  $(".title-mixes").on('click',function(){

    $(this).addClass("selected");
    $(".title-tracks").removeClass("selected");
    $(".tracks").fadeOut(function(){

      $(".mixes").fadeIn(function(){
        
        Carrousel.reInit(0);
      });
      Carrousel.reInit(0);

    });
    

  });

}

function Search(){
  $(".button-search").click(function(){
    $('#container-web').css('display','none');

    $("#search").fadeIn();
    $(window).on('keyup',salir);
  });

  $(".close-search").click(function(){
    $('#container-web').css('display','block');
    $("#search").fadeOut();
    $(window).off('keyup',salir);

  });
}

function salir(e){
    if (e.keyCode == 27)
     $(".close-search").trigger('click');
}
// $(document).keyup(function(e) {
// if (e.keyCode == 27) { 
//    alert('Esc key pressed!');
// }
// });


// Binds:


// funcion


//Efecto Menu
var Menu={
  show:function(e){
    e.preventDefault();

    $('#container-web').css('left','-400px');

    $('#notifications').css('display','block');

    //Funcion cerrar menu al darle click/touch en "Container"
    var heightw= $('#notifications').height();
    if(heightw<$(window).height())
      heightw=$(window).height();

    setTimeout(function(){
      $('body').append($('<div class="mask"></div>')).find('.mask').css('height',$(document).height());
      $('.mask').click(Menu.ocult);
      $('#container-web').css('max-height',heightw).css('overflow','hidden');
    },200);
  },

  ocult:function(e){
    e.preventDefault();

    $('.mask').off('click',Menu.ocult).remove();

    $('#container-web').css({
      'left':'0',
      'overflow':'',
      'max-height':''

    });

    setTimeout(function(){
      $('#notifications').hide();
    },500);
  }
}


$(document).ready(function(){
   LoginTabs()
   Menu2();
   // Notification();
   PlayerTab();
   Search();
   WorldMenu();
   PlayVideo();
   $('.button-notification').click(Menu.show);
   $('.go-to-web').click(Menu.ocult);
   $('.drop-down').dropDown();
 });





