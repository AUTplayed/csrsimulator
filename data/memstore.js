module.exports.save = save;
module.exports.del = del;
module.exports.getAll = getAll;

var dataStore = [];

function save(obj) {
	let id = obj.id;
	if (!validId(id)) {
		return "no valid id"
	}
	let index = findIndex(id);
	if (index >= 0) {
		dataStore[index] = obj;
	} else {
		dataStore.push(obj);
	}
	return "ok";
}

function del(obj) {
	let id = obj.id;
	if (!validId(id)) {
		return "no valid id"
	}
	let index = findIndex(id);
	delete dataStore[index];
	return "ok";
}

function getAll(sortProp) {
	let copy = [...dataStore];
	copy.sort((a, b) => compare(a, b, sortProp));
	return copy;
}

function validId(id) {
	return !(id === undefined || id === null)
}

function compare(a, b, prop) {
	if (a[prop] < b[prop])
		return -1;
	if (a[prop] > b[prop])
		return 1;
	return 0;
}

function findIndex(id) {
	return dataStore.findIndex((entry) => {
		return entry.id == id
	});
}