(function ($) {
	'use strict';

	/*--------------------------------
	 Start Preloader Animation
	----------------------------------*/
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});

	/*--------------------------------
			End Preloader Animation
		----------------------------------*/

	// -----------------------------
	//  Count Up
	// -----------------------------
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	// -----------------------------
	//  On Scroll
	// -----------------------------
	$(window).on('scroll', function () {
		counter();
	});



	/*--------------------------------
	 Start Smooth Scrolling
	----------------------------------*/
	function smoothScroll() {
		// Select all links with hashes
		$('a[href*="#"]')
			// Remove links that don't actually link to anything
			.not('[href="#"]')
			.not('[href="#0"]')
			.on("click", function (event) {
				// On-page links
				if (
					location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
					location.hostname == this.hostname
				) {
					// Figure out element to scroll to
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					// Does a scroll target exist?
					if (target.length) {
						// Only prevent default if animation is actually gonna happen
						event.preventDefault();
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000, "easeInOutExpo", function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) { // Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						});
					}
				}
			});
		jQuery.extend(jQuery.easing, {
			easeInOutExpo: function (x, t, b, c, d) {
				if (t == 0) return b;
				if (t == d) return b + c;
				if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
				return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
			}
		});
	}
	// Applying Smooth Scroll When The Browser Is Not Opera Mini Or UC Browser
	if (navigator.userAgent.indexOf('Opera Mini') == -1 || navigator.userAgent.indexOf('UCBrowser') != -1) {
		smoothScroll();
	}
	/*--------------------------------
			End Smooth Scrolling
	----------------------------------*/

	/*--------------------------------
	 Start Header
		----------------------------------*/
	// Initiating Background Slider
	var backgroundSlide = $('#background-slide');
	backgroundSlide.owlCarousel({
		loop: true,
		items: 1,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut'
	});
	$('.slider-prev-button').on("click", function () {
		backgroundSlide.trigger('prev.owl.carousel');
	});
	$('.slider-next-button').on("click", function () {
		backgroundSlide.trigger('next.owl.carousel');
	});
	// Setting Up Background Images
	function SliderBackground() {
		if ($(".owl-full-width .slider").length) {
			$(".owl-full-width .slider").each(function () {
				var $this = $(this);
				var img = $this.children(img);
				var imgSrc = img.attr("src");
				$this.css({
					backgroundImage: "url(" + imgSrc + ")",
					backgroundSize: "cover",
					backgroundPosition: "center center"
				});
			});
		}
	}
	// Initializing Background Setting Function
	SliderBackground();
	// Toggle Fullscreen Navigation
	$('#burger').on("click", function () {
		$(".fullscreen-nav-container").slideToggle(300);
	});
	$(".fullscreen-nav-holder a, .turn-home").on("click", function () {
		$("#burger").trigger("click");
	});
	/*--------------------------------
		 End Header
	----------------------------------*/

	/*--------------------------------
	Start Menu
	----------------------------------*/
	// Highlighting Menu on Scroll Through Sections
	$(window).on('scroll', function () {
        var counter = 0;
		$('section').each(function () {
			if ($(window).scrollTop() + 80 >= $(this).offset().top) {
				$('.menu-item').removeClass('active');
				$(".menu-item." + counter).addClass("active");
				$(".mobile-menu-item").removeClass("active");
				$(".mobile-menu-item." + counter).addClass("active");
			}
            ++counter;
		});
	});

	function toggleLogoImg(id) {
    	var img = document.getElementById(id).src;
        if (img.indexOf('dark.png')!=-1) {
            document.getElementById(id).src  = "https://www.qonsulter.de/images/logo-light.png";
        }
         else {
           document.getElementById(id).src = "https://www.qonsulter.de/images/logo-dark.png";
       }

    }

	// Styling Menu on Scroll
	$('.about-me').waypoint({
		handler: function (direction) {
			// Fixing Menu after leaving Header Section
			//$(".menu").toggleClass("menu-fix");
			// Changing Menu background after leaving Header Section
			$(".menu-container").toggleClass("menu-normal");
			$(".menu-item").toggleClass("menu-item-transparent");
			$(".desktop-menu .hvr-underline-from-left").toggleClass("dark");
			// Toggle Logo
			toggleLogoImg('desktop-logo');
			// Toggling Mobile Menu Visibility
			$(".mobile-menu").toggleClass("mobile-menu-fix");
			// Auto-Collapsing Mobile Menu When Left Open
			var a = $(".menu-link").attr("class");
			if (direction == "up" && a == "menu-link active") {
				$(".menu-link").trigger("click");
			}
		}
	});

    // Toggle Mobile Menu
	$('.mobile-menu a').on("click", function () {
		$(".menu-link").toggleClass("active");
		$(".menu-slider").slideToggle(500);
	});
	/*--------------------------------
			 End Menu
	----------------------------------*/

	/*--------------------------------
			Start About Me
	----------------------------------*/
	// Initializing Skillbar Animation
	$('.skill h3').waypoint({
		handler: function (direction) {
			if (direction == "up") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').css("width", "0");
				});
			} else if (direction == "down") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').animate({
						width: jQuery(this).attr('data-percent')
					}, 2000);
				});
			}
		},
		offset: 'bottom-in-view'
	});
	/*--------------------------------
			End About Me
	----------------------------------*/

	/*--------------------------------
			 Start Portfolio
	----------------------------------*/
	// Initialize filterizr Plugin
    if ( document.getElementById('.filtr-container') ) {
    	var filterizd = $('.filtr-container').filterizr();

	    // Styling of Filter Controls
    	$(".portfolio-navigation li").on("click", function () {
    		$(".portfolio-navigation li").removeClass("active");
	    	$(this).addClass("active");
    	});

    	// Initialize MagnificPopup Plugin
    	$('.filtr-container').magnificPopup({
	    	type: 'image',
		    delegate: 'a',
    		gallery: {
	    		enabled: true
    		},
	    	zoom: {
		    	enabled: true,
    			duration: 300,
	    		easing: 'ease-in-out'
    		}
	    });

    	// Galley Shuffle When Scrolled Down
	    $('.services').waypoint({
    		handler: function (direction) {
	    		if (direction == "down") {
		    		filterizd.filterizr('shuffle');
			    }
    		},
	    	offset: "bottom-in-view"
    	});

	// load more button

    }

	/*--------------------------------
			 End Portfolio
	----------------------------------*/

	/*--------------------------------
			 Start Testimonials
	----------------------------------*/
	// Configure and Initialize Owl Carousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000
	});
	/*--------------------------------
			End Testimonials
	----------------------------------*/

	/*--------------------------------
			Start Code for Mobile Devices
	----------------------------------*/
	// Code for Opera Mini
	var vh = $(window).height();
	if (navigator.userAgent.indexOf('Opera Mini') != -1) {
		// Setting Fun Facts Value Immediately
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
		// Removing Bootstrap Class and Re-Style Input
		$("input").removeClass("form-control");
		$("input").css({
			"width": "100%",
			"height": "50px",
			"background": "#fff"
		});
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
	}

	// Code For UC Browser
	if (navigator.userAgent.indexOf('UCBrowser') != -1) {
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
		$(".fun-facts").css({
			"display": "table",
			"margin": "auto"
		});
		// Setting Fun Facts Value Immediately
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
	}
	/*--------------------------------
			End Code for Mobile Devices
	----------------------------------*/

	/*--------------------------------
			Others
	----------------------------------*/
	// Code for Internet Explorer
	if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
		$(".header, .fullscreen-nav-container, .like-me, .contact").css("background-attachment", "scroll");
		$(".fullscreen-nav-holder").css("width", "100vw");
	}

	// Wow Plugin Initialization
	var wow = new WOW({
		animateClass: 'animated',
		offset: 70,
		mobile: false
	});
	wow.init();

	// Toggling Visibility of Scroll Up Button
	$(".about-me-images").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		offset: "bottom-in-view"
	});
	$(".sub-button").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		offset: "bottom-in-view"
	});
	/*--------------------------------
			Others
	----------------------------------*/
}(jQuery));
