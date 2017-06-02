var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));


require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);


app.listen(PORT, function() {
	console.log("Listening on port: " + PORT)
});