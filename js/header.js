$(document).ready(function () {
	var baseurl = '';

	// $('.servcdd').hide();
	// $('.aboutdd').hide();

	$('button#homebtn').mouseover(function () {
		$('.servcdd').hide();
		$('.aboutdd').hide();
	});
	$('button#aboutbtn').mouseover(function () {
		$('.servcdd').hide();
		$('.aboutdd').show();
	});
	$('button#servicesbtn').mouseover(function () {
		$('.aboutdd').hide();
		$('.servcdd').show();
	});
	$('button#contactbtn').mouseover(function () {
		$('.servcdd').hide();
		$('.aboutdd').hide();
	});
	$('table').mouseleave(function () {
		$('.servcdd').hide();
		$('.aboutdd').hide();
	});

	$('button#homebtn').click(function () {
		window.location = baseurl + '/';
	});
	$('button#aboutbtn').click(function () {
		window.location = baseurl + '/about/';
	});
			$('button#messagebtn').click(function () {
				window.location = baseurl + '/about/#message';
			});
			$('button#historybtn').click(function () {
				window.location = baseurl + '/about/#history';
			});
			$('button#valuesbtn').click(function () {
				window.location = baseurl + '/about/#values';
			});
			$('button#boardbtn').click(function () {
				window.location = baseurl + '/about/#board';
			});
	$('button#servicesbtn').click(function () {
		window.location = baseurl + '/services/';
	});
			$('button#brandmanagementbtn').click(function () {
				window.location = baseurl + '/services/#brandmanagement';
			});
			$('button#marketdevelopmentbtn').click(function () {
				window.location = baseurl + '/services/#marketdevelopment';
			});
			$('button#valuecreationbtn').click(function () {
				window.location = baseurl + '/services/#valuecreation';
			});
	$('button#achievementsbtn').click(function () {
		window.location = baseurl + '/achievements/';
	});
	$('button#contactbtn').click(function () {
		window.location = baseurl + '/contact/';
	});

	var pathname = window.location.pathname;
	if (pathname === baseurl + '/') {
		$('#homebtn').addClass('linkbtnnow');
	} else if (pathname === baseurl + '/about/') {
		$('#aboutbtn').addClass('linkbtnnow');
	} else if (pathname === baseurl + '/services/') {
		$('#servicesbtn').addClass('linkbtnnow');
	} else if (pathname === baseurl + '/achievements/') {
		$('#achievementsbtn').addClass('linkbtnnow');
	} else if (pathname === baseurl + '/contact/') {
		$('#contactbtn').addClass('linkbtnnow');
	}
});