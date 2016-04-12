$(function () {

	var change = 1;
	var root = 'https://ams1412.herokuapp.com';
	root = "http://localhost:8080"

	if(change){
		$("input[type='password']").on("click" , function () {
			$(this).val('');
			change = 0;
			console.log(type);
		});
	}

	$('#login').on("click", function (event) {
		event.preventDefault();
		var username = $('#username').val();
		var password = $('#password').val();
		console.log(username);
		console.log(password);
		$.ajax({
			"async" : true,
			"crossDomain" : true,
			"url" : root + "/login/" + type.toLowerCase(),
			"method" : "POST",
			headers: {
			    "Authorization": "Basic " + btoa(username + ":" + password)
			},
			"processData": false,
			"data": ""
		}).done(function (data) {
			alert(data.message);
		});
	});

	$('#submit').click(function () {
		var data = new Object();
		data.name = $('#name').val();
		var jsonData = JSON.stringify(data);
		console.log(jsonData);
		

		$.ajax({
		  "async": true,
		  "crossDomain": true,
		  "url": root + "/test",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json"
		  },
		  "processData": false,
		  "data": jsonData
		}).then(function(data) {
		  console.log(data);
		});

		root = "http://localhost:8080"

		$.ajax({
		  "async": true,
		  "crossDomain": true,
		  "url": root + "/login",
		  "method": "POST",
		  headers: {
		    "Authorization": "Basic " + btoa("c" + ":" + "dgfsg")
		  },
		  "processData": false,
		  "data": ""
		}).then(function (data) {
			alert(data);
		});

		

		$.ajax({
		  "async": true,
		  "crossDomain": true,
		  "url": root + "/test",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json"
		  },
		  "processData": false,
		  "data": jsonData
		}).then(function(data) {
			console.log(data);
			if(data.name == $('#name').val())
				alert("successfull");
			// JSON.parse(data, function (k,v) {
			// 	console.log(k);
			// 	return v;
			// });
		  	
		  	// console.log(response);
		});


	});
});