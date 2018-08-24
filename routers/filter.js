var express = require("express");
var filter = express.Router();

module.exports = filter;

filter.use((req, res, next) => {
	res.setHeader("Server-Node", nodeid);
	next();
});