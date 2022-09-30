;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
		else {
			$('.js-fullheight').css('height', $(window).screen.height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).screen.height());
			});
		}
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 5);
				
			}

		} , { offset: '85%' } );
	};

	window.onresize = function() {
		if ( !isMobile.any() ) {
			if ($(window).width() < 977) {

				if(document.getElementById("timeline-unverted1").classList.contains("timeline-unverted")) {
					document.getElementById("timeline-unverted1").classList.remove("timeline-unverted");
					document.getElementById("timeline-unverted2").classList.remove("timeline-unverted");
					document.getElementById("timeline-unverted1").classList.add("timeline-inverted");
					document.getElementById("timeline-unverted2").classList.add("timeline-inverted");
				}
				else {}
			}
			if ($(window).width() >= 977) {
				if(document.getElementById("timeline-unverted1").classList.contains("timeline-inverted")) {
					document.getElementById("timeline-unverted1").classList.remove("timeline-inverted");
					document.getElementById("timeline-unverted2").classList.remove("timeline-inverted");
					document.getElementById("timeline-unverted1").classList.add("timeline-unverted");
					document.getElementById("timeline-unverted2").classList.add("timeline-unverted");
				}
				else {}
			}

		}
	}


	window.onscroll = function() {
		var y = window.scrollY;
    	if (y >= 100){
			if (document.getElementById('scroll-indicator').classList.contains('fadeInTop')) {
				document.getElementById('scroll-indicator').classList.remove('fadeInTop');
				document.getElementById('scroll-indicator').classList.add('fadeOutTop');
			}
    	}
		else if (y == 0) {
			document.getElementById('scroll-indicator').classList.remove('fadeOutTop');
			document.getElementById('scroll-indicator').classList.add('fadeInTop');
		}
	}

	
	$(function(){
		contentWayPoint();
		fullHeight();
	});

}());