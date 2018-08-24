var express = require("express");
var router = express.Router()
module.exports = router;

var wrap = require("./asyncwrap.js");
var db = require("../data/mockdb.js");

router.get("/pages/index/index.html", wrap(async (req, res) => {
	var sort = req.query.sort;
	if (!sort) {
		sort = "timestamp";
	}
	var data = await db.getAll(sort);
	data = { items: data };
	res.render(pj("pages", "index", "index"), data);
}));

router.use(express.static(pubroot));

router.get("/:page", (req, res) => {
	res.sendFile(pj(pubroot, "index.html"));
});