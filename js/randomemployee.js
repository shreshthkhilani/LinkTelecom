$(document).ready(function () {
	imageurl = '/images/employees/';

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
		},
		{
			name: 'Subhash Subberwal',
			image: 'ss.JPG',
			text: 'Lorem ipsum dolor... <i>"Here is a quote about Link or something else!"</i>'
		},
		{
			name: 'Amit Jalan',
			image: '../placeholder.png',
			text: 'Lorem ipsum dolor... <i>"Here is a quote about Link or something else!"</i>'
		},
		{
			name: 'Akshay Jalan',
			image: '../placeholder.png',
			text: 'Lorem ipsum dolor... <i>"Here is a quote about Link or something else!"</i>'
		},
		{
			name: 'Arun Roy',
			image: '../placeholder.png',
			text: 'Lorem ipsum dolor... <i>"Here is a quote about Link or something else!"</i>'
		}
	];

	var randomnumber = Math.floor(Math.random() * 8);  

	var rempname = employees[randomnumber].name;
	var rempimage = employees[randomnumber].image;
	var remptext = employees[randomnumber].text;

	$('#rempname').html(rempname);
	$('#remptext').html(remptext);
	$('#rempimage').attr('src', imageurl + rempimage);
});