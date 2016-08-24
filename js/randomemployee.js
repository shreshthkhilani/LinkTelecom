$(document).ready(function () {
	imageurl = '/LinkTelecom/images/employees/';

	var employees = [
		{
			name: 'Deepak Gupta',
			image: 'deepakgupta.JPG',
			text: 'Director and head of telecom division.'
		},
		{
			name: 'Rajesh Khanna',
			image: 'rajeshkhanna.JPG',
			text: 'CFO'
		},
		{
			name: 'Sugeet Mukherjee',
			image: 'sugeetmukherjee.JPG',
			text: 'GM for Telecom'
		},
		{
			name: 'Kaushik Goswami',
			image: 'kaushikgoswami.JPG',
			text: 'GM for IT'
		}
	];

	var randomnumber = Math.floor(Math.random() * 4);  

	var rempname = employees[randomnumber].name;
	var rempimage = employees[randomnumber].image;
	var remptext = employees[randomnumber].text;

	$('#rempname').html(rempname);
	$('#remptext').html(remptext);
	$('#rempimage').attr('src', imageurl + rempimage);
});