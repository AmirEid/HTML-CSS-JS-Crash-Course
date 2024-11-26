$(document).ready(function() {
    loadTasksFromCookies();
    
    $('#newBtn').on('click', function() {
        var task = prompt("Enter new task:");
        if (task !== null && task !== "") {
            var newItem = $('<div>').text(task);
            newItem.on('click', removeTask);
            $('#ft_list').prepend(newItem);
            saveTasksToCookies();
        }
    });
});

function removeTask() {
    if (confirm("Are you sure you want to remove this task?")) {
        $(this).remove();
        saveTasksToCookies();
    }
}

function saveTasksToCookies() {
    var tasks = [];
    $('#ft_list div').each(function() {
        tasks.push($(this).text());
    });
    document.cookie = "tasks=" + JSON.stringify(tasks) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function loadTasksFromCookies() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] === "tasks") {
            var tasks = JSON.parse(cookie[1]);
            for (var j = 0; j < tasks.length; j++) {
                var newItem = $('<div>').text(tasks[j]);
                newItem.on('click', removeTask);
                $('#ft_list').prepend(newItem);
            }
            break;
        }
    }
}


/*
window.onload = function() {
	loadTasksFromCookies();
	document.getElementById("newBtn").addEventListener("click", addNewTask);
};

function addNewTask() {
	var task = prompt("What's Your Task?");
	if (task !== null && task !== "") {
		var newItm = document.createElement("div");
		newItm.textContent = task;
		newItm.addEventListener("click", removeTask);
		document.getElementById("ft_list").prepend(newItm);
		saveTasksToCookies();
	}
}

function removeTask() {
	if(confirm("Are You Sure, You Are Not Drived By ADHD?")) {
		this.remove();
		saveTasksToCookies();
	}
}

function saveTasksToCookies() {
	var tasks = [];
	var taskElements = document.getElementById("ft_list").children;
	for(var i = 0; i < taskElements.length; i++) {
		tasks.push(taskElements[i].textContent);
	}
	document.cookie = "tasks=" + JSON.stringify(tasks) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function loadTasksFromCookies() {
	var cookies = document.cookie.split("; ");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].split("=");
	if (cookie[0] === "tasks") {
		var tasks = JSON.parse(cookie[1]);
		for (var j = 0; j < tasks.length; j++) {
			var newItem = document.createElement("div");
			newItem.textContent = tasks[j];
			newItem.addEventListener("click", removeTask);
			document.getElementById("ft_list").prepend(newItem);
			}
			break;
		}
	}
}
*/