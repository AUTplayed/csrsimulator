var express = require("express");
var router = express.Router()
module.exports = router;

var db = require("../data/mockdb.js");
var wrap = require("./asyncwrap.js");

router.post("/item/:id", wrap(async (req, res) => {
	if (!req.body) {
		req.body = {};
	}
	req.body.timestamp = Date.now();
	req.body.id = req.params.id;
	var response = await db.save(req.body);
	res.send(response);
}));

router.delete("/item/:id", wrap(async (req, res) => {
	if (!req.body) {
		req.body = {};
	}
	req.body.timestamp = Date.now();
	req.body.id = req.params.id;
	var response = await db.del(req.body);
	res.send(response);
}));

router.get("/item", wrap(async (req, res) => {
	var sort = req.query.sort;
	if (!sort) {
		sort = "timestamp";
	}
	var response = await db.getAll(sort);
	res.send(response);
}));