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
	var root = "http://localhost:8080/";
	// var data = new Object();
	var mid = Cookies.get('id');
	// var jsonData = JSON.stringify(data);
	console.log(mid);	

	if(type){
		$('#loading').removeClass('hide');
		$.ajax({
			method:"GET",
			async : true,
			crossDomain : true,
			url : root + type +"/0/6?master_id=" + mid,
			"processData": false,
			"data": "",
			"timeout" : 10000,
			success: function (data, textStatus, xhr) {
				console.log(data);
				if(type=="students")
					data = data.student;
				if(type=="teachers")
					data = data.teacher;
				console.log(data);
				var i;
				var mytable = $('.table');
				for (i in data){
					if(data.hasOwnProperty(i)){
						var row=$('<tr></tr>').attr({class: ["tabledata"]}).appendTo(mytable);
						$('<td></td>').text(i).appendTo(row);
						$('<td></td>').text(data[i].username).appendTo(row);
						$('<td></td>').text(data[i].name).appendTo(row);
						$('<td></td>').text(data[i].lastname).appendTo(row);
						$('<td></td>').text(data[i].email).appendTo(row);
						var button = $('<a></a>').attr({class: ["button", "button-style"].join(' '), href: "/edit/" + type +"?id="+data[i].id+""}).text('Edit');
						// var button = $('<input />').attr({class: ["button", "button-style"].join(' '), value: "Edit"});
						var t = $('<td></td').attr({class: "no-border"});
						button.appendTo(t);
						t.appendTo(row);
						var button = $('<a></a>').attr({ class: ["button", "delete", "button-style"].join(' '), href: "/delete/" + type +"?id="+data[i].id}).text('Delete');
						var t = $('<td></td').attr({class: "no-border"});
						button.appendTo(t);
						t.appendTo(row);
					}
				}
				if(i>0){
					$('#loading').addClass('hide');
					mytable.removeClass('hide');
				}
			}
		});
	}

	$('.add-image').on('click',function () {
		window.location.replace('/add/'+type);
	});
});