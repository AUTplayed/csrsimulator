var cluster = require("cluster");
var method = require("./method.js");
var store = require("../data/memstore.js");

var data = [];
cluster.on("message", (worker, msg) => {
	msg = JSON.parse(msg);
	handleMessage(msg, worker);
});

function handleMessage(msg, worker) {
	var value = "no valid method";
	switch (msg.method) {
		case method.save: {
			value = store.save(msg.data);
			break;
		}
		case method.del: {
			value = store.del(msg.data);
			break;
		}
		case method.getAll: {
			value = store.getAll(msg.data);
			break;
		}
	}
	worker.send(JSON.stringify(value));
}