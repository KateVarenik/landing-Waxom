// Header-slider

var mySwiper = new Swiper('.header-slider', {
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// Filter

var containerEl = document.querySelector('.projects__items');

var mixer = mixitup(containerEl, {
    load: {
        filter: 'all'
    }
});

// Video


var backVideo = document.getElementById('backVideo');
var playBtn = document.getElementById('playBtn');
var videoContent = document.getElementById('video__content');

	playBtn.onclick = function(){
		backVideo.style.display = "block";

		if (backVideo.paused) {
			backVideo.play();
			playBtn.style.display = "none";
			videoContent.style.display = "none";
		}
	}

	backVideo.onclick = function(){

		if (backVideo.play) {
			backVideo.pause();
			playBtn.style.display = "block";
			videoContent.style.display = "block";
		}
	}

	// Posts slider

	 var swiperPosts = new Swiper('.posts__slider', {
      spaceBetween: 20,
      slidesPerView: 'auto',
      navigation: {
		    nextEl: '.swiper-right',
		    prevEl: '.swiper-left',
		  },
		  // loop: true,
		  breakpoints: {
	      320: {
	        slidesPerView: 'auto',
	        spaceBetween: 10,
	      },
	      580: {
	        slidesPerView: 2,
	        spaceBetween: 20,
	      },
	      900: {
	        slidesPerView: 3,
	        spaceBetween: 20,
	      },
      }
    });

	 var swiperInner = new Swiper('.posts__slider-inner', {
      pagination: {
        el: '.swiper-pagination',
    		type: 'bullets',
   		 	clickable: true,
      },
      autoplay: {
		    delay: 3000,
		    disableOnInteraction: true,
		  },
    });

	 $(document).ready(function(){
	 	$('.header__burger').click(function(event){
	 		$('.header__burger, .header-menu__navbar').toggleClass('active');
	 		$('body').toggleClass('lock');
	 	});
	 });








