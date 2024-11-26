$(document).ready(function() {
    $('#calcbutton').on('click', function() {
        var topNum = parseInt($('#top').val());
        var operator = $('#operators select').val();
        var botNum = parseInt($('#bot').val());
        var result;

        if (isNaN(topNum) || isNaN(botNum)) {
            alert('What the fuck is wrong with you!');
            return;
        }
        
        switch(operator) {
            case '+':
                result = topNum + botNum;
                break;
            case '-':
                result = topNum - botNum;
                break;
            case '*':
                result = topNum * botNum;
                break;
            case '/':
                if (botNum === 0) {
                    alert("It's over 9000! Division by zero");
                    return;
                }
                result = topNum / botNum;
                break;
            case '%':
                if (botNum === 0) {
                    alert("It's over 9000! Division by zero");
                    return;
                }
                result = topNum % botNum;
                break;
        }

        console.log('The result is: ', result);
        alert('The result is: ' + result);
    });

    setInterval(function() {
        alert('Use me lazy ass...');
    }, 10000);
});


/*
window.onload = function() {
	var calcButton = document.getElementById('calcbutton');
	calcButton.addEventListener('click',function() {
		var topNum = parseInt(document.getElementById('top').value);
		var opertaor = document.querySelector('#operators select').value;
		var botNum = parseInt(document.getElementById('bot').value);
		var result;

		if(isNaN(topNum) || isNaN(botNum)) {
			alert('What the fuck is wrong with you!');
			return;
		}
		switch(opertaor) {
			case '+':
				result = topNum + botNum;
				break;
			case '-':
				result = topNum - botNum;
				break;
			case '*':
				result = topNum * botNum;
				break;
			case '/':
				if (botNum === 0) {
					alert("It's over 9000! Division by zero");
					return;
				}
				result = topNum / botNum;
				break;
			case '%':
				if (botNum === 0) {
					alert("It's over 9000! Division by zero");
					return;
				}
				result = topNum % botNum;
				break;
		}
		console.log('The result is: ', result);
		alert('The result is: ' + result);
	});
	setInterval(function() {
		alert('Use me lazy ass...');
	}, 10000);
};*/