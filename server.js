// Imported modules
var express = require('express');
var bodyParser = require('body-parser');

// New server
var app = new express();

// Using a static webpage
app.use(express.static('public'));

// Enable you to get data from the front-end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Array where data will be stored
var arr = [];

// GET Request
app.get("/get_arr", function(req, res) {
	res.json(arr);
});

// POST Request
app.post("/get_arr", function(req, res) {
	var item = req.body.item;
	arr.push(item);
	console.log(arr);
});

// PUT Request
app.put("/get_arr", function(req, res) {
	var update = req.body.update;
	arr.pop();
	arr.push(update);
	console.log(arr);
});

// DELETE Request
app.delete("/get_arr", function(req, res) {
	arr = [];
	console.log(arr);
});

app.listen(8080);