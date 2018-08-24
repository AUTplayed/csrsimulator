module.exports.save = save;
module.exports.del = del;
module.exports.getAll = getAll;

var msgworker = require("../messaging/msgworker.js");
var method = require("../messaging/method.js");

function save(obj) {
	var msg = { method: method.save, data: obj };
	return msgworker.send(msg);
}

function del(obj) {
	var msg = { method: method.del, data: obj };
	return msgworker.send(msg);
}

function getAll(sortProp) {
	var msg = { method: method.getAll, data: sortProp };
	return msgworker.send(msg);
}