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
	var class_id = [] ;
	if(class_id == []){
		console.log('class');
	}

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

	var uname = $("#uname").last().val();
	if(uname.length === 0){
		// empty uname
	}
	else{
		var name = $("#name").last().val();
		if(name.length === 0){
			// empty name
		}
		else{
			var lname = $("#lname").last().val();
			if(lname.length === 0){
				// empty lname
			}
			else{
				var pwd = $("#pwd").last().val();
				var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
				if(re.test(pwd)){
					// invalid password
				}
				else{
					var mail = $("#mail").last().val();
					re = new RegExp('^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');
					if(re.test(mail)){
						// invalid email
					}
					else{
						var image = $("#image").last().val();
						var ext = image.split('.').pop().toLowerCase();
						if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
							// invalid extesion
						}	
						if(image[0].files[0].size < 524288){
							// invalid size
						}
					}
				}
			}	
		}
	}
});