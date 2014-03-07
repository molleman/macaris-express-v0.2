var graph = require('fbgraph');


exports.getLikes = function (response) {
	graph.get("153299718040481", function(err, res) {
		response.json(res['likes']);
	    return res;
	});
}