$(document).ready(function () {
	$('.itimg').hide();
	$('.up').hide();
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
		var boardht = $('#board').offset().top;
    if (height  > 0) {
      $('#header').addClass('headershadow');
    } else {
    	$('#header').removeClass('headershadow');
    }
    if (height >= boardht) {
    	$('.down').hide();
    	$('.up').show();
    } else {
    	$('.down').show();
    	$('.up').hide();
    }
	});
	$('.down').click(function () {
		onepagedown();
	});
	$('.up').click(function () {
		scrolltothiselem('#top');
	});
	$(window).keydown(function (e) {
		var key = e.keyCode;
		if (key === 39 || key === 40) {
			onepagedown();
		} else if (key === 37 || key === 38) {
			onepageup();
		}
	});

	var onepagedown = function () {
		var topht = $('#top').offset().top;
		var aboutht = $('#about').offset().top;
		var partnersht = $('#partners').offset().top;
		var boardht = $('#board').offset().top;
		var height = $(window).scrollTop();
		if (height >= topht && height < aboutht) {
			scrolltothiselem('#about');
		} else if (height >= aboutht && height < partnersht) {
			scrolltothiselem('#partners');
		} else if (height >= partnersht && height < boardht) {
			scrolltothiselem('#board');
		}
	}

	var onepageup = function () {
		var topht = $('#top').offset().top;
		var aboutht = $('#about').offset().top;
		var partnersht = $('#partners').offset().top;
		var boardht = $('#board').offset().top;
		var height = $(window).scrollTop();
		if (height >= aboutht && height < partnersht) {
			scrolltothiselem('#top');
		} else if (height >= partnersht && height < boardht) {
			scrolltothiselem('#about');
		} else if (height >= boardht) {
			scrolltothiselem('#partners');
		}
	}

	var scrolltothiselem = function (elem) {
		$('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 1000);
	};
});