var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

$("#text").onkeydown = (ev) => {
	if (ev.keyCode == 13) {
		var text = $("#text").value;
		var obj = { text: text, id: Math.round(Math.random() * 100) }
		request("POST", "/api/item/" + obj.id, obj);
		$("#text").setAttribute("disabled", "true")
		var spinner = document.createElement("span");
		spinner.setAttribute("class", "spinner");
		$("#input").appendChild(spinner);
	}
};

$("#text").focus();

function request(method, url, body) {
	var req = new XMLHttpRequest();
	req.open(method, url)
	req.setRequestHeader("Content-Type", "application/json")
	req.send(JSON.stringify(body));
	req.onload = () => {
		console.log(req.response);
		ldf.locchange();
	}
}