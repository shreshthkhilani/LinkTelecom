$(document).ready(function () {
	$('.itimg').hide();
	$('#itpanel').click(function () {
		$('#tepanel').removeClass('activepanel');
		$('#itpanel').addClass('activepanel');
		$('.teimg').hide();
		$('.itimg').show();
	});
	$('#tepanel').click(function () {
		$('#itpanel').removeClass('activepanel');
		$('#tepanel').addClass('activepanel');
		$('.itimg').hide();
		$('.teimg').show();
	});
	$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height  > 0) {
      $('#header').addClass('headershadow');
    } else {
    	$('#header').removeClass('headershadow');
    }
	});
	$('#downone').click(function () {
		$('html, body').animate({
        scrollTop: $("#partners").offset().top
    }, 1000);
	});
	$('#downtwo').click(function () {
		$('html, body').animate({
        scrollTop: $("#board").offset().top
    }, 1000);
	});
});