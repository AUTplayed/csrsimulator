var cluster = require("cluster");
var forksize = require("os").cpus().length;
var pj = require("path").join;
require("dotenv").config();

require("./messaging/msgmaster.js");

cluster.setupMaster({ exec: pj(__dirname, "clusternode.js") });
for (var i = 0; i < forksize; i++) {
	spawn(i);
}

function spawn(id) {
	var clusternode = cluster.fork({ nodeid: id, port: process.env.port });
	clusternode.on("exit", () => {
		console.log(`node ${id} died`);
		spawn(id);
	});
}