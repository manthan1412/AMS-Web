$(function (){
	
	var f = $('#form');
	$('<input />').attr({type: "submit" ,id: "added", value: "Added"}).appendTo(f);
	$('#submit').on('click',function (event) {
		event.preventDefault();
		var data = new Object();
		var male = $('#male').is(':checked');
		var female = $('#female').is(':checked');
		data.male = male;
		data.female = female;
		var pwd = $('#name').val();
		var md5 = $.md5(pwd, 'ams3393!$!@yms##(#s28');
		data.hash = md5;
		console.log(data);
		var jsonData = JSON.stringify(data);
		console.log(jsonData);
	});

	var files;
	$('input[type=file]').on('change', function (event) {
		files = event.target.files;
		console.log(files);
	});

	var root= "https://api.dropboxapi.com/2/files/";
	$('#added').on('click',function (event) {
		console.log('clicked');

		var data = new Object();
		data.path="/document 34.pdf";
		var jsonData = JSON.stringify(data);
		console.log(jsonData);
		
		// create_folder
		// $.ajax({
		// 	method: "POST",
		// 	crossDomain: true,
		// 	url: root + "create_folder",
		// 	headers: {
		// 		"Authorization": "Bearer x89U71X7LXAAAAAAAAAAKNcuxbCT-2ZJwQo5p7FcD3E1QaRLiGSwhqzZuhZK8W3R",
		// 		"Content-Type": "application/json",
		// 	},
		// 	data: jsonData,
		// 	success: function (data, textStatus, xhr) {
		// 		console.log(data);
		// 	}
		// });

		//delete

		// $.ajax({
		// 	method: "POST",
		// 	crossDomain: true,
		// 	url: root + "delete",
		// 	headers: {
		// 		"Authorization": "Bearer x89U71X7LXAAAAAAAAAAKNcuxbCT-2ZJwQo5p7FcD3E1QaRLiGSwhqzZuhZK8W3R",
		// 		"Content-Type": "application/json",
		// 	},
		// 	data: jsonData,
		// 	success: function (data, textStatus, xhr) {
		// 		console.log(data);
		// 	}
		// });

// 		$.ajaxTransport("+binary", function(options, originalOptions, jqXHR){
//     // check for conditions and support for blob / arraybuffer response type
//     if (window.FormData && ((options.dataType && (options.dataType == 'binary')) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob)))))
//     {
//         return {
//             // create new XMLHttpRequest
//             send: function(_, callback){
// 		// setup all variables
//                 var xhr = new XMLHttpRequest(),
//                     url = options.url,
//                     type = options.type,
// 		// blob or arraybuffer. Default is blob
//                     dataType = options.responseType || "blob",
//                     data = options.data || null;
				
//                 xhr.addEventListener('load', function(){
//                     var data = {};
//                     data[options.dataType] = xhr.response;
// 		// make callback and send data
//                     callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
//                 });

//                 xhr.open(type, url, true);
//                 xhr.responseType = dataType;
//                 xhr.send(data);
//             },
//             abort: function(){
//                 jqXHR.abort();
//             }
//         };
//     }
// });

		//download
		// root = "https://content.dropboxapi.com/2/files/";
		// $.ajax({
		// 	method: "POST",
		// 	crossDomain: true,
		// 	url: root + "download",
		// 	headers: {
		// 		"Authorization": "Bearer x89U71X7LXAAAAAAAAAAKNcuxbCT-2ZJwQo5p7FcD3E1QaRLiGSwhqzZuhZK8W3R",
		// 		"Dropbox-API-Arg" : jsonData
		// 	},
		// 	data: "",
		// 	success: function (result) {
		// 		// console.log(result);
		// 	// 	var url = URL.createObjectURL(result);
		// 	// 	var a = $('<a />',{
		// 	// 		'href': url,
		// 	// 		'download' : data.name,
		// 	// 		'text': "click"
		// 	// 	}).hide().appendTo("body")[0].click();
		// 	// 	setTimeout(function(){
		// 	// 		URL.revokeObjectURL(url);
		// 	// 	}, 10000);
		// 		var url = $('#my').src();
		// 		console.log(url);
		// 		$()
		// 		// $('<img />').attr({src: result}).appendTo($('body'));
		// 	}
		// });

		// var file = $('#file').prop('files');
		// if(file){
		// 	var  reader = new FileReader();
		// 	reader.readAsText(file);
		// 	reader.onload = function (e) {
		// 		console.log(e.target.result);
		// 	};
		// }

		//get_metadata

		// console.log(file);
		// root ="https://api.dropboxapi.com/2/files/";
		// $.ajax({
		// 	method: "POST",
		// 	crossDomain: true,
		// 	url: root + "get_metadata",
		// 	headers: {
		// 		"Authorization": "Bearer x89U71X7LXAAAAAAAAAAKNcuxbCT-2ZJwQo5p7FcD3E1QaRLiGSwhqzZuhZK8W3R",
		// 		"Content-Type": "application/json"
		// 	},
		// 	data: jsonData,
		// 	success: function (data, textStatus, xhr) {
		// 		console.log(data);
		// 	}
		// });

		//get_temporary_link

		 $.ajax({
			method: "POST",
			crossDomain: true,
			url: root + "get_temporary_link",
			headers: {
				"Authorization": "Bearer x89U71X7LXAAAAAAAAAAKNcuxbCT-2ZJwQo5p7FcD3E1QaRLiGSwhqzZuhZK8W3R",
				"Content-Type": "application/json"
			},
			data: jsonData,
			success: function (data, textStatus, xhr) {
				console.log(data);
				// $('<img />').attr({src: data.link}).appendTo($('body'));
				var a=$('<a></a>').attr({id: "image", href: data.link, download: "image" });
				a[0].click();
			}
		});

		//upload
		data.path="/test.txt";
		data.mode="add";
		data.autorename=true;
		data.mute=false;
		jsonData = JSON.stringify(data);
		console.log(jsonData);
		root ="https://content.dropboxapi.com/2/files/";
		// $.ajax({
		// 	method: "POST",
		// 	crossDomain: true,
		// 	url: root + "upload",
		// 	headers: {
		// 		"Authorization": "Bearer x89U71X7LXAAAAAAAAAAKNcuxbCT-2ZJwQo5p7FcD3E1QaRLiGSwhqzZuhZK8W3R",
		// 		"Dropbox-API-Arg" : jsonData,
		// 		"Content-Type": "application/octet-stream"
		// 	},
		// 	data: jsonData,
		// 	success: function (data, textStatus, xhr) {
		// 		console.log(data);
		// 		// $('<img />').attr({src: data.link}).appendTo($('body'));
		// 		var a=$('<a></a>').attr({id: "image", href: data.link, download: "image" });
		// 		a[0].click();
		// 	}
		// });
		// var d = new FormData($('form')[0]);
		// console.log(d);
		// var files;
		// files = event.target.files;
		console.log(files);
		// event.stopPropagation(); // Stop stuff happening
    	event.preventDefault();
		var d = new FormData();
		$.each(files, function (key, value) {
			d.append(key, value);
		})
		console.log(d);
		console.log(jsonData);
		$.ajax({
			method: "POST",
			crossDomain: true,
			url: root + "upload",
			headers: {
				"Authorization": "Bearer x89U71X7LXAAAAAAAAAAKNcuxbCT-2ZJwQo5p7FcD3E1QaRLiGSwhqzZuhZK8W3R",
				"Dropbox-API-Arg" : jsonData,
				"Content-Type": "application/octet-stream"
			},
			data: d,
			success: function (data, textStatus, xhr) {
				console.log(data);
				// $('<img />').attr({src: data.link}).appendTo($('body'));
				// var a=$('<a></a>').attr({id: "image", href: data.link, download: "image" });
				// a[0].click();
			}
		});

	});
});