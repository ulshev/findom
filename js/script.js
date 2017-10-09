$(document).ready(function() {


	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

	$(window).on('load resize', function(){
	    if ( window.innerWidth > 1550 && $('#index .news_wrap').hasClass('slick-initialized') ) {
		  $('#index .news_wrap').slick('unslick');
		} else if ( window.innerWidth <= 1550 && !$('#index .news_wrap').hasClass('slick-initialized') ) {
		  $('#index .news_wrap').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    //fade: true,
		    speed: 1500,
		    slidesToShow: 4,
		    responsive: [{
		      breakpoint: 1300,
		      settings: { 
			slidesToShow: 3,
			adaptiveHeight: false
		      }
		    },
		      {
		      breakpoint: 1000,
		      settings: { 
			slidesToShow: 2,
			adaptiveHeight: true
		      }
		    },
		      {
		      breakpoint: 590,
		      settings: { 
			slidesToShow: 1,
			adaptiveHeight: true
		      }
		    }]
		  });
		}
		
	});
	
	// показываем меню
	$('.menu_button_mob').on('click', function(){
		$('.main_menu_wrap').addClass('show');
		$('.menu_close').addClass('show');
		$('.main_menu').css('left', '50%');
	});

	// скрываем меню, удаляем классы активности, возвращаем меню на исходную
	$('.menu_close').on('click', function(){
		$('.main_menu').css('left', '100%');
		$(this).removeClass('show');
		setTimeout(function(){
			$('.main_menu_wrap').removeClass('show');
		}, 300);
	});
	
	
	$('.slider').slick({
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 2500,
		dots: false,
	});
	
	
	$('.service_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		//fade: true,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
	});
	
	$('.partners_wrap').slick({
	    prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
	    //fade: true,
	    speed: 1500,
	    slidesToShow: 4,
	    responsive: [{
		breakpoint: 1300,
		settings: { 
		    slidesToShow: 3,
		    adaptiveHeight: false
		}
	    },
	    {
		breakpoint: 800,
		settings: { 
		    slidesToShow: 2,
		    adaptiveHeight: true
		}
	    },
	    {
		breakpoint: 450,
		settings: { 
		    slidesToShow: 1,
		    adaptiveHeight: true
		}
	    }]
	});
	
	
	$('#index .reviews_wrap').slick({
	    prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
	    //fade: true,
	    speed: 1500,
	    slidesToShow: 3,
	    responsive: [{
		breakpoint: 1200,
		settings: { 
		    slidesToShow: 2,
		    adaptiveHeight: false
		}
	    },
	    {
		breakpoint: 600,
		settings: { 
		    slidesToShow: 1,
		    adaptiveHeight: true
		}
	    }]
	});
	
	$('#inner .reviews_wrap').slick({
	    prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
	    //fade: true,
	    speed: 1500,
	    slidesToShow: 2,
	    responsive: [{
		breakpoint: 800,
		settings: { 
		    slidesToShow: 1,
		    adaptiveHeight: true
		}
	    }]
	});
	
	
	$('#index .working_wrap').slick({
	    prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
	    dots: true,
	    //fade: true,
	    speed: 1500,
	    //infinite: false,
	    slidesToShow: 3,
	    centerMode: true,
	    responsive: [{
		//breakpoint: 1100,
		//settings: { 
		//    slidesToShow: 2,
		//    adaptiveHeight: false
		//}
	    },
	    {
		breakpoint: 601,
		settings: { 
		    slidesToShow: 1,
		    adaptiveHeight: true
		}
	    }]
	});
	
	
	$(".text").mCustomScrollbar({
	    //theme: "dark",
	    scrollButtons:{ enable: true },
	});
	
	$('#index .certificates_wrap').gallery();
	
	
});

