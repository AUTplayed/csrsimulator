module.exports.send = send;

function send(msg) {
	process.send(JSON.stringify(msg));
	return new Promise((resolve, reject) => {
		polling((reply) => {
			if (reply != null) {
				resolve(reply);
			} else {
				reject("error");
			}
		});
	});
}

function polling(cb) {
	if (msgstack.length == 0) {
		setTimeout(() => polling(cb), 10);
	} else {
		cb(msgstack.shift());
	}
}

var msgstack = [];
process.on("message", msg => {
	msgstack.push(JSON.parse(msg));
});

