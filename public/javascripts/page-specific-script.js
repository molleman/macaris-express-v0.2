var content_area = $("#content_area");
function load_content() {
	$.get("/getdata", function(data) {
		if(!isNaN(data)){
			content_area.html('0'+data);
		}
	});
}

setInterval(load_content,1000);

