$(function () {
	$('.user').on({
		mouseenter: function () {
			$('#drop-down-menu').removeClass('hide-menu');
		},
		mouseleave: function () {
			$('#drop-down-menu').addClass('hide-menu');
		}
	});
	var students;

	var data = new Object();
	data.master_id = 1;
	var jsonData = JSON.stringify(data);
	console.log(jsonData);	

	$.ajax({
		method:"GET",
		async : true,
		crossDomain : true,
		url : "http://localhost:8080/students/0/6",
		"processData": false,
		"data": jsonData,
		"timeout" : 10000,
		success: function (data, textStatus, xhr) {
			students = data.student;
			for(var i=0;i<6;i++){
				console.log(students[i].id);
				console.log(students[i]);
			}
			var mytable = $('.table');
			var tr = [];
			for(var i=0;i<6;i++){
				var row=$('<tr></tr>').attr({class: ["tabledata"]}).appendTo(mytable);
				// for(var j=0;j<4;j++){
				$('<td></td>').text(i+1).appendTo(row);
				$('<td></td>').text(students[i].username).appendTo(row);
				$('<td></td>').text(students[i].name).appendTo(row);
				$('<td></td>').text(students[i].lastname).appendTo(row);
				var button = $('<a></a>').attr({class: ["button", "font"].join(' '), href: "/edit/student?id="+students[i].id+""}).text('Edit');
				var t = $('<td></td').attr({class: "no-border"});
				button.appendTo(t);
				t.appendTo(row);
				var button = $('<a></a>').attr({ class: ["button", "delete", "font"].join(' '), href: "/delete/student?id="+students[i].id}).text('Delete');
				var t = $('<td></td').attr({class: "no-border"});
				button.appendTo(t);
				t.appendTo(row);
				// }
			}
			// mytable.appendTo('')
			console.log(data.student);
		}
	});

	$('.add').on('click',function () {
		window.location.replace('/add/student');
	});
});