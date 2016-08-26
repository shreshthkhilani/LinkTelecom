$(document).ready(function () {
	imageurl = '/images/employees/';

	var employees = [
		{
			name: 'Deepak Gupta',
			image: 'deepakgupta.JPG',
			text: 'Founding Partner<br>Mr. Gupta takes care of our telecom division, he is well regarded as an industry stalwart. <i>"The correct people working with the correct product can increase market share ten fold. I have seen it many times in my life."</i>'
		},
		{
			name: 'Rajesh Khanna',
			image: 'rajeshkhanna.JPG',
			text: 'CFO<br>Mr. Khanna\'s exceptional accounting knowledge makes him invaluable. <i>"Working in a collaborative environment with some very passionate people has been a rewarding experience for me."</i>'
		},
		{
			name: 'Sugeet Mukherjee',
			image: 'sugeetmukherjee.JPG',
			text: 'GM (Telecom Division)<br>Mr. Mukherjee handles a telecom division as well, his affable personality and hard work have made him an integral part of the Link team. <i>"With 4G becoming a reality for everyone in India, I expect this market to undergo a tectonic shift. It will be the first of many."</i>'
		},
		{
			name: 'Kaushik Goswami',
			image: 'kaushikgoswami.JPG',
			text: 'GM (IT Division)<br>Mr. Goswami is in charge of our entire IT division and is our point man on looking for new businesses. <i>"Moore\'s law has changed IT\'s role in our lives. We have just begun to see it\'s effects."</i>'
		},
		{
			name: 'Subhash Subberwal',
			image: 'ss.JPG',
			text: 'Chairman &amp; Founding Partner<br>Mr. Subberwal serves primarily as our mentor: his advice is invaluable. <i>"I firmly believe that hard work and conservative thinking have made Link Telecom what it is today"</i>'
		},
		{
			name: 'Amit Jalan',
			image: 'amitjalan.JPG',
			text: 'Director<br>Mr. Jalan works primarily as a local distributor; he is our point of contact for everyday market events. <i>"Events in the local market affect the entire supply chain. The only conundrum is: how much? You crack that, you crack distribution."</i>'
		},
		{
			name: 'Akshay Jalan',
			image: '../placeholder.png',
			text: 'Director<br>Mr. Jalan oversees the IT division at Link Telecom, his data crunching skills are unequalled. <i>"I believe our desire to grow, healthy financials, and infrastructure makes us the perfect choice for distribution in India"</i>'
		},
		{
			name: 'Arun Roy',
			image: 'arunroy.JPG',
			text: 'GM (Telecom Division)<br>Mr. Roy looks after one of our telecom divisions and his on-ground presence has made him a regular face in every market he covers. <i>"This industry is built on people. Nothing else."</i>'
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