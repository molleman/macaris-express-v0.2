var graph = require('fbgraph');

function fetchLikes(){
	graph.get("153299718040481", function(err, res) {
		likes = res['likes'];
		console.log("fetch likes +"+res['likes']);
	    return res;
	});
}

fetchLikes();

exports.getLikes = function (response) {
    // the below was set to removed 304 error code , 304 just means the content is the same
	// must check on the browser side 
	
	response.header("Cache-Control", "no-cache, no-store, must-revalidate");
    response.header("Pragma", "no-cache");
    response.header("Expires", 0);
	
	if(likes === undefined){
		response.json("10000");
		console.log('likes is undefined')
		return 'err';
	}else{
		console.log('likes is '+likes);
		response.json(likes);
		return likes;
	}
}

setInterval(fetchLikes,1000); 