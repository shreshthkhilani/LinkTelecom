$(document).ready(function () {
	var baseurl = '/LinkTelecom';

	$('button#aboutbtn').click(function () {
		window.location = baseurl + '/about/';
	});
	$('button#servicesbtn').click(function () {
		window.location = baseurl + '/services/';
	});
	$('button#achievementsbtn').click(function () {
		window.location = baseurl + '/achievements/';
	});
	$('button#contactbtn').click(function () {
		window.location = baseurl + '/contact/';
	});

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