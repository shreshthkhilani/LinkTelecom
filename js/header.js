$(document).ready(function () {
	$('button#aboutbtn').click(function () {
		window.location = 'about/';
	});
	$('button#servicesbtn').click(function () {
		window.location = 'services/';
	});
	$('button#achievementsbtn').click(function () {
		window.location = 'achievements/';
	});
	$('button#contactbtn').click(function () {
		window.location = 'contact/';
	});

	var baseurl = '/LinkTelecom'
	var pathname = window.location.pathname;
	if (pathname === baseurl + '/about/') {
		$('#aboutbtn').addClass('linkbtnnow');
	} else if (pathname === baseurl + '/services/') {
		$('#servicesbtn').addClass('linkbtnnow');
	} else if (pathname === baseurl + '/achievements/') {
		$('#achievementsbtn').addClass('linkbtnnow');
	} else if (pathname === baseurl + '/contact/') {
		$('#contactbtn').addClass('linkbtnnow');
	}
});