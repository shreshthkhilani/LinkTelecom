$(document).ready(function () {
	$('button#aboutbtn').click(function () {
		window.location = '/about/';
	});
	$('button#servicesbtn').click(function () {
		window.location = '/services';
	});
	$('button#achievementsbtn').click(function () {
		window.location = '/achievements/';
	});
	$('button#contactbtn').click(function () {
		window.location = '/contact/';
	});

	var pathname = window.location.pathname;
	if (pathname === '/about/') {
		$('#aboutbtn').addClass('linkbtnnow');
	} else if (pathname === '/services/') {
		$('#servicesbtn').addClass('linkbtnnow');
	} else if (pathname === '/achievements/') {
		$('#achievementsbtn').addClass('linkbtnnow');
	} else if (pathname === '/contact/') {
		$('#contactbtn').addClass('linkbtnnow');
	}
});