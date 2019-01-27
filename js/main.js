;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#tebw-offcanvas, .js-tebw-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-tebw-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};

	var invitations = {
		'123asd': ['Mônica', 'Fernando', 'Valentina', 'Bernardo'],
		'234sdf': ['Duarte', 'Sinara', 'Kamila', 'Gustavo']
	}

	var add_invitee = function(n, invitee, is_new) {
 		
 		var read_only = is_new ? '' : 'readonly';
 		
		var html = `
		<div class="row invitee-row ">
			<div class="col-md-8 col-xs-7 invitee-name">
				<input type="text" value="${invitee}" ${read_only}></input>
			</div>
			<div class="col-md-4 col-xs-5">
				<div class="toggle">
					<input type="checkbox" name="toggle" class="check-checkbox" id="invitee_${n}">
					<label class="check-label" for="invitee_${n}">
						<div id="background"></div>
						<span class="face">
							<span class="face-container">
								<span class="eye left"></span>
								<span class="eye right"></span>
								<span class="mouth"></span>
							</span>
						</span>
					</label>
				</div>
			</div>
			
		</div>
		`;

		$('form .invitee-list').append(html)
	}

	var invitationValidator = function() {
		var added = false;
		var invt_limit = 2;
		var invt_count = 1;
		$('#invt-id-btn').click(function(e) {
			var invt_id = $('#invt-id').val()
			if (invt_id in invitations && !added) {
				
				$('.tebw-rsvp .second-step').show()

				for (var el in invitations[invt_id]){
					add_invitee(invt_count, invitations[invt_id][el], false)
					invt_count++;
				}

				added = true;
				invt_limit = invt_count + 2;
			}
		})

		$('#add-invt-btn').click(function(e) {
			if (invt_count < invt_limit) {
				add_invitee(invt_count, '', true)
				invt_count++;
			}else {
				$('.add-more-message').show();
			}
		})
	}


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="tebw-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-tebw-nav-toggle tebw-nav-toggle tebw-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#tebw-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#tebw-offcanvas').append(clone2);

		$('#tebw-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#tebw-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-tebw-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-tebw-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
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
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".tebw-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#tebw-counter').length > 0 ) {
			$('#tebw-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		invitationValidator();
	});


}());