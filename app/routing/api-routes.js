var friends = require("../data/friends.js")

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		friends.push(req.body);
	})
}