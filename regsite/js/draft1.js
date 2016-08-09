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
    if (height  > 1) {
    	$('#header').addClass('headershadow');
    } else {
    	$('#header').removeClass('headershadow');
    }
    if (height > aboutht) {
    	$('#header2').attr('id', 'header3');
    } else {
    	$('#header3').attr('id', 'header2');
    }
    if (height >= boardht) {
    	$('.down').hide();
    	$('.up').show();
    } else {
    	$('.down').show();
    	$('.up').hide();
    }
    // Header buttons
    // if (height >= topht && height < aboutht) {
    //  $('#abouthd').addClass('linkbtninit');
		// 	$('#partnershd').addClass('linkbtninit');
		// 	$('#boardhd').addClass('linkbtninit');
		// } else if (height >= aboutht && height < partnersht) {
		// 	$('#abouthd').removeClass('linkbtninit');
		// 	$('#partnershd').addClass('linkbtninit');
		// 	$('#boardhd').addClass('linkbtninit');
		// } else if (height >= partnersht && height < boardht) {
		// 	$('#abouthd').addClass('linkbtninit');
		// 	$('#partnershd').removeClass('linkbtninit');
		// 	$('#boardhd').addClass('linkbtninit');
		// } else if (height >= boardht) {
		// 	$('#abouthd').addClass('linkbtninit');
		// 	$('#partnershd').addClass('linkbtninit');
		// 	$('#boardhd').removeClass('linkbtninit');
		// }
		if (height >= topht && height < aboutht) {
			$('#hc1').addClass('fullcircle');
			$('#hc2').removeClass('fullcircle');
			$('#hc3').removeClass('fullcircle');
			$('#hc4').removeClass('fullcircle');
		} else if (height >= aboutht && height < partnersht) {
			$('#hc1').removeClass('fullcircle');
			$('#hc2').addClass('fullcircle');
			$('#hc3').removeClass('fullcircle');
			$('#hc4').removeClass('fullcircle');
		} else if (height >= partnersht && height < boardht) {
			$('#hc1').removeClass('fullcircle');
			$('#hc2').removeClass('fullcircle');
			$('#hc3').addClass('fullcircle');
			$('#hc4').removeClass('fullcircle');
		} else if (height >= boardht) {
			$('#hc1').removeClass('fullcircle');
			$('#hc2').removeClass('fullcircle');
			$('#hc3').removeClass('fullcircle');
			$('#hc4').addClass('fullcircle');
		}
	});
	$('.down').click(function () {
		onepagedown();
	});
	$('.up').click(function () {
		$('html, body').animate({
        scrollTop: $('#top').offset().top + 1
    }, 3000);
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

	// Header buttons
	// $('button#abouthd').click(function () {
	// 	scrolltothiselem('#about');
	// });
	// $('button#partnershd').click(function () {
	// 	scrolltothiselem('#partners');
	// });
	// $('button#boardhd').click(function () {
	// 	scrolltothiselem('#board');
	// });
	$('#hc1').click(function () {
		scrolltothiselem('#top');
	});
	$('#hc2').click(function () {
		scrolltothiselem('#about');
	});
	$('#hc3').click(function () {
		scrolltothiselem('#partners');
	});
	$('#hc4').click(function () {
		scrolltothiselem('#board');
	});


});