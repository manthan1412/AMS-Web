$(function () {
	$('#submit').click(function () {
		var data = new Object();
		data.name = $('#name').val();
		var jsonData = JSON.stringify(data);
		$.ajax({
			type: "POST",
			dataType: "json",
			data: jsonData,
			url: "http://localhost:5000/test",
			success: function (data) {
				alert("successfull");
			},
			error: function (xhr, ajaxOptions,thrownError) {
				// body...
				alert(xhr.status);
				alert(thrownError);
			}
		});
		$.post("http://localhost:5000/test", 
			jsonData).done(function (data) {
				var output = data.name;
				alert(output);
			});
	});
});