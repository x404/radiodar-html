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
