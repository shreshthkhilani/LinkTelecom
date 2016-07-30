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
		var topht = $('#top').offset().top;
		var aboutht = $('#about').offset().top;
		var partnersht = $('#partners').offset().top;
		var boardht = $('#board').offset().top;
		var height = $(window).scrollTop();
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
    if (height >= topht && height < aboutht) {
    	$('#abouthd').addClass('linkbtninit');
			$('#partnershd').addClass('linkbtninit');
			$('#boardhd').addClass('linkbtninit');
		} else if (height >= aboutht && height < partnersht) {
			$('#abouthd').removeClass('linkbtninit');
			$('#partnershd').addClass('linkbtninit');
			$('#boardhd').addClass('linkbtninit');
		} else if (height >= partnersht && height < boardht) {
			$('#abouthd').addClass('linkbtninit');
			$('#partnershd').removeClass('linkbtninit');
			$('#boardhd').addClass('linkbtninit');
		} else if (height >= boardht) {
			$('#abouthd').addClass('linkbtninit');
			$('#partnershd').addClass('linkbtninit');
			$('#boardhd').removeClass('linkbtninit');
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
		if (key === 39) {
			onepagedown();
		} else if (key === 37) {
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
		var topht = $('#top').offset().top + 1;
		var aboutht = $('#about').offset().top + 1;
		var partnersht = $('#partners').offset().top + 1;
		var boardht = $('#board').offset().top + 1;
		var height = $(window).scrollTop();
	  if (height > topht && height <= aboutht) {
	  	scrolltothiselem('#top');
		} else if (height > aboutht && height <= partnersht) {
			scrolltothiselem('#about');
		} else if (height > partnersht && height <= boardht) {
			scrolltothiselem('#partners');
		} else if (height > boardht) {
			scrolltothiselem('#board');
		}
	}

	var scrolltothiselem = function (elem) {
		$('html, body').animate({
        scrollTop: $(elem).offset().top + 1
    }, 1200);
	};

	$('button#abouthd').click(function () {
		scrolltothiselem('#about');
	});
	$('button#partnershd').click(function () {
		scrolltothiselem('#partners');
	});
	$('button#boardhd').click(function () {
		scrolltothiselem('#board');
	});
});