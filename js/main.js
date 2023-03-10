/*
Minimal and simple website carousel: Main js file
main.js v1.0
*/

( function( $ ) {
	'use strict';
	$( document ).ready( function() {

		/*
		Carousel (Tiny-slider)
		---------------------------------------
		*/

		function initMainCarousel() {

			// required CSS classes
			var hiddenCssClass = 'mw-hidden',
				visibleCssClass = 'mw-visible',
				carouselLoadedCssClass = 'mw-carousel-loaded';

			// if there is no carousel on the current page, then stop the function
			var $mainCarousel = $( '#mw-main-carousel' );
			if ( 0 === $mainCarousel.length ) {
				return;
			}

			// carousel elements
			var $mainCarouselContainer = $( '#mw-main-carousel-container' ), // carousel container
				$mainCarouselBg = $( '#mw-main-carousel .mw-carousel-item-bg' ), // background image
				$mainCarouselOverlay = $( '#mw-main-carousel .mw-carousel-item-overlay' ), // dark overlay
				$mainCarouselText = $( '#mw-main-carousel .mw-carousel-item-text' ), // text (metadata and title)
				$mainCarouselLoadingIcon = $( '#mw-main-carousel-loading-icon' ); // loading icon

			// function: show carousel content
			var showCarouselContent = function() {
				// show content only after each image has been loaded (The imagesLoaded.js file is required! Link: https://imagesloaded.desandro.com/ )
				$mainCarouselBg.imagesLoaded( { background: true }, function() {
					// hide loading icon
					$mainCarouselLoadingIcon.addClass( hiddenCssClass );
					// show content after a short period of time (150 milliseconds)
					setTimeout( function() {
						$mainCarouselLoadingIcon.css( 'display', 'none' );
						$mainCarouselContainer.addClass( carouselLoadedCssClass );
						$mainCarouselBg.css( 'opacity', 1 );
						$mainCarouselOverlay.addClass( visibleCssClass );
						$mainCarouselText.css( 'opacity', 1 );
					}, 150 );
				} );
			};

			// initialize carousel (tiny-slider; all options: https://github.com/ganlanyuan/tiny-slider#options )
			tns( {
				container: '#mw-main-carousel',
				mode: 'carousel',
				axis: 'horizontal',
				items: 1, // if there are no responsive options, then the value is 3
				gutter: 0,
				edgePadding: 0,
				slideBy: 1,
				center: false,
				controls: true,
				controlsPosition: 'bottom',
				controlsText: [ '<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>' ],
				nav: false, // if there are no responsive options, then true
				navPosition: 'bottom',
				speed: 500,
				autoplay: false,
				autoplayButtonOutput: false,
				loop: false,
				rewind: true,
				touch: false,
				mouseDrag: false,
				autoHeight: false,
				onInit: showCarouselContent,
				responsive: {
					630: {
						items: 2,
						nav: true,
						mouseDrag: true,
					},
					900: {
						items: 3,
					},
				},
			} );

		}

		initMainCarousel();

	} );
} )( jQuery );
