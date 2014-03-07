var content_area = $("#content_area");
function load_content() {
	$.get("/getdata", function(data) {
		content_area.html('0'+data);
		load_content();
	});
}
load_content();