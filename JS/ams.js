$(function () {

	$("#demo").append(" test");
	$("#demo").append(" test");

	$('#submit').click(function () {
		var dat = new Object();
		dat.name = $('#name').val();
		// var data = $('#name').val();
		$('#demo').append(dat);
		// $.toJSON(data);
		// var data  = jQuery.parseJSON('{ "name" : "dat" }');
		// $('#demo').append("  " + data);
		var jsonData = JSON.stringify(dat);
		$("#demo").append(" test");
		$("#demo").append(" " + jsonData +" test");
		// $.getJSON("http://localhost:5000/test",data,function (result) {
		// 	$.each(result, function (i, field) {
		// 		$("form").append(field + " ");
		// 	});
		// });
		// $.ajax({
		// 	type: 'POST',
		// 	url: 'http://localhost:5000/test',
		// 	headers: {'Access-Control-Allow-Origin: *'}
		// 	data: data,
		// 	dataType: 'json'
		// });
		$.ajaxSetup({
			headers: {'Content-Type' : 'application/json'}
		});
		$.post("http://localhost:5000/test", 
			jsonData).done(function (data) {
				var output = data.name;
				$('#demo').text(output);	
			});

		// $(document).ajaxSend(function () {
		// 	$('#submit').attr('disabled','disabled');
		// }).ajaxComplete(function () {
		// 	$('#submit').removeAttr('disabled');
		// });

		// $.ajax({
		// 	type: "POST",
		// 	headers: {
		// 		'Accept' : 'application/json',
		// 		'Content-Type' : 'text/plain'
		// 	},
		// 	dataType: "json",
		// 	url: "http://localhost:5000/test",
		// 	data: jsonData,
		// 	success: function (data) {
		// 		// body...
		// 		alert("successful");
		// 	}

		// });
	});
});