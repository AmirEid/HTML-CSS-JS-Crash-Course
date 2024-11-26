$(document).ready(function() {
	const balloon = $('#balloon');
	var size = 200;
	var colorid = 0;
	const colors = ['red', 'green', 'blue'];
	balloon.on('click', function() {
		size += 10;
		if (size > 420)
			size = 200;
		colorid = (colorid + 1) % colors.length;
		balloon.css({
			'width': size + 'px',
			'height': size + 'px',
			'background-color': colors[colorid]
		});
	});
	balloon.on('mouseleave', function() {
		size -= 5;
		if (size < 200)
			size = 200;
		colorid = (colorid - 1 + colors.length) % colors.length;
		console.log(colorid);
		balloon.css({
			'width': size + 'px',
			'height': size + 'px',
			'background-color': colors[colorid]
		});
	});
});

/*
const balloon = document.getElementById('balloon');

var size = 200;
var colorid = 0;
const colors = ['red', 'green', 'blue'];

balloon.addEventListener('click', function() {
	size += 10;
	if (size > 420)
		size = 200;
	colorid = (colorid + 1) % colors.length;
	balloon.style.width = size + 'px';
	balloon.style.height = size + 'px';
	balloon.style.backgroundColor = colors[colorid];
});

balloon.addEventListener('mouseleave', function() {
	size -= 5;
	if (size < 200)
		size = 200;
	colorid = (colorid - 1 + colors.length) % colors.length;
	console.log(colorid);
	balloon.style.height = size + 'px';
	balloon.style.width = size + 'px';
	balloon.style.backgroundColor = colors[colorid];
});*/