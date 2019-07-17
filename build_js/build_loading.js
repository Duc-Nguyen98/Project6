$(window).on('load', function (event) {
	$('body').removeClass('preloading');
	$('body').addClass('loadng-website');

    // $('.load').delay(1000).fadeOut('fast');
    $('.loader').delay(3000).fadeOut(400);
    setTimeout(function() {
    	$('body').removeClass('loadng-website');
    	// $('html, body').attr('style','');
    }, 3000);
    

});
