$(function () {
	$('body').css('display', 'none');
    $("body").fadeIn("slow");
	var root = 'https://ams1412.herokuapp.com';
	root = "http://localhost:8080";
	var u = Cookies.get("username"),
		p = Cookies.get("password"),
		t = Cookies.get("role");

	// if(u != undefined && p != undefined && t!= undefined){
	// 	$.ajax({
	// 		"async" : true,
	// 		"crossDomain" : true,
	// 		"url" : root + "/login/" + t.toLowerCase(),
	// 		"method" : "GET",
	// 		headers: {
	// 		    "Authorization": "Basic " + btoa(u + ":" + p)
	// 		},
	// 		"processData": false,
	// 		"data": "",
	// 		"timeout" : 8000,
	// 		success: function (data, textStatus, xhr) {
	// 			if(data.status == 200){
	// 				window.location.replace("/setcookie");
	// 			}
	// 		}
	// 	});
	// }

	$("input[type='password']").on("click" , function () {
		$(this).select();
		console.log(role);
	});
	// }

	$('#login').on("click", function () {
		// event.preventDefault();
		$('#invalid-username').removeClass("show-error");
		$('#wrong-password').removeClass("show-error");
		$('#null-username').removeClass("show-error");
		$('#null-password').removeClass("show-error");
		var username = $('#username').val();
		var password = $('#password').val();
		if(username.length == 0){
			$('#null-username').addClass("show-error");
		}
		else if (password.length == 0) {
			$('#null-password').addClass("show-error");
		}
		else{
			password = $.md5(password, 'ams3393!$!@yms##(#s28');
			// console.log(password);
			$.ajax({
				"async" : true,
				"crossDomain" : true,
				"url" : root + "/login/" + role.toLowerCase(),
				"method" : "GET",
				headers: {
				    "Authorization": "Basic " + btoa(username + ":" + password)
				},
				"processData": false,
				"data": "",
				"timeout" : 8000,
				success: function (data, textStatus, xhr) {
					if(data.status == 200){
						Cookies.set("username", username, {expires : 7});
						Cookies.set("role", role.toLowerCase(), {expires : 7});
						Cookies.set("password",password , {expires: 7});
						Cookies.set("id",data.id, {expires: 7});
						window.location.replace("/setcookie");
					}
					else if(data.status == 404){
						if(data.message == "Invalid username")
							$('#invalid-username').addClass("show-error");
						else if(data.message == "Wrong password")
							$('#wrong-password').addClass("show-error");
					}
				}
			});
		}
	});

	$('#password').on('keydown', function (event) {
		if(event.which == 13){
			$('#login').click();
		}
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
		});


	});
});