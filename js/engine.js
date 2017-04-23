$(document).ready(function(){

	$('.topcat').click(function(e){
		e.preventDefault();
		var $this = $(this);

		$this.toggleClass('show');
		$this.next('ul').slideToggle();
	});


	// карусель
	$('#foo1').owlCarousel({
		loop:false,
		nav:false,
		dots: true,
		items:1,
		navText: ["", ""]
	});

	$('#foo2').owlCarousel({
		loop:false,
		nav: true,
		dots: true,
		items:3,
		navText: ["", ""],
		navContainer : '.owl_pagination2 .owl-nav',
		dotsContainer : '.owl_pagination2 .owl-dots',
		responsive:{
			0:{
				items:1,
				stagePadding: 20
			},
			400:{
				items:2
			},
			580:{
				items:3
			},
			800:{
				items:2,
			},
			1160:{
				items:3
			}
		}
	});

	$('#foo3').owlCarousel({
		loop:false,
		nav: true,
		dots: true,
		items:3,
		navText: ["", ""],
		navContainer : '.owl_pagination3 .owl-nav',
		dotsContainer : '.owl_pagination3 .owl-dots',
		responsive:{
			0:{
				items:1,
				stagePadding: 20
			},
			400:{
				items:2
			},
			580:{
				items:3
			},
			800:{
				items:2,
			},
			1160:{
				items:3
			}
		}
	});

	$(window).resize(function(){
		if ($('body').width() > 640) {
			$('body').removeClass('o-menu');
			$('#navbar').css('height', 'auto');
		}
	});

	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				h = $(document).height();
				$('body').addClass('o-menu');
				$('#navbar').height(h);

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
				$('#navbar').height('auto');
			};
		init();
	});	


});

$(document).on('click','.o-menu #navbar .folder > span', function(e){   
	// e.preventDefault();
	var $this = $(this);
	$this.next('ul').slideToggle();
	$this.parent().toggleClass('open');
	return false;
});


// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE
