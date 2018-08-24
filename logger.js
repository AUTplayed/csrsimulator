module.exports = function (id) {
	return {
		d: (...text) => {
			arguments.callee();
			log(LEVEL.DEBUG, id, text);
		},
		e: (...text) => {
			log(LEVEL.ERROR, id, text);
		}
	};
};

function log(loglvl, id, text) {
	console.log(`[${id}] ${getFileWithLine()} ${loglvl}`, ...text)
}
var sep = require("path").sep;

function getFileWithLine() {
	let stack = new Error().stack.split(" at ")[4];
	stack = stack.split(sep).pop().trim();
	return stack.substr(0, stack.length - 1);
}

var LEVEL = { DEBUG: "%s", ERROR: "\x1b[31m%s\x1b[0m" };