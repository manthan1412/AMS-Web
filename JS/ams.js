$(function () {

	$("#demo").append(" test");
	$("#demo").append(" test");

	$('#submit').click(function OnButtonCLick() {
		var data = $('#name').val();
		$('#demo').append(data);
		// $.toJSON(data);
		// var data  = jQuery.parseJSON('{ "name" : "dat" }');
		$('#demo').append("  " + data);
		$("#demo").append(" test");
		// $.getJSON("http://localhost:5000/test",data,function (result) {
		// 	$.each(result, function (i, field) {
		// 		$("form").append(field + " ");
		// 	});
		// });
		// $.ajax({
		// 	type: 'POST',
		// 	url: 'http://localhost:5000/test',
		// 	data: { get_param: 'value' }, 
		// 	name: data,
		// 	dataType: 'json'
		// });
		$.post("http://localhost:5000/test", { "name" : data })
			.done(function (data) {
				alert("Data sent : " + data);
			});
	});
});