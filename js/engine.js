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
