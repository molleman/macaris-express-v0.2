
/*
 * GET home page.
 */

facebook = require('../facebook');


exports.index = function(req, res){
	
    res.render('index', { title: 'title' });
};

exports.getData = function (req,res) {
	var json = facebook.getLikes(res);
}