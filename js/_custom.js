document.addEventListener("DOMContentLoaded", function() {

	function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
	}

	// Check if it time to start the animation.
	function checkAnimation() {
	    var $elem = $('.my_h2');

	    // If the animation has already been started
	    if ($elem.hasClass('start')) return;

	    if (isElementInViewport($elem)) {
	        // Start the animation
	        $elem.addClass('start');
	    }
	}

	// Capture scroll events
	$(window).scroll(function(){
	    checkAnimation();
	});

});

$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
		});
	});