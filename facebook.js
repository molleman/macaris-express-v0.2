var graph = require('fbgraph');

var likes;



exports.getLikes = function (response) {
	if(likes === undefined){
		response.json("10000");
		console.log('likes is undefined')
		return likes;
	}else{
		console.log('likes is '+likes['likes']);
		response.json(likes['likes']);
		return likes;
	}
}

function fetchLikes(){
	graph.get("153299718040481", function(err, res) {
		likes = res['likes'];
	    return res;
	});
}

setInterval(fetchLikes,1000); 