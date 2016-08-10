$(document).ready(function () {

	$(window).scroll(function () {

		var height = $(window).scrollTop();
    if (height  > 1) {
    	$('#header').addClass('headershadow');
    } else {
    	$('#header').removeClass('headershadow');
    }
	});
	
});