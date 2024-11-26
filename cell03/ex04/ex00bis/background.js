$(document).ready(function() {
	$('#buttoncolorchange').click(function(){
	var randomcolor = Math.floor(Math.random()*16777216).toString(16);
	$('body').css('backgroundColor', '#' + randomcolor);
	});
});

/*
var buttoncolorchange = document.getElementById('buttoncolorchange');
buttoncolorchange.addEventListener('click', function() {
	var randomcolor = Math.floor(Math.random()*16777216).toString(16);
	document.body.style.backgroundColor = '#' + randomcolor;
});*/