var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');

app.use(bodyParser.json());
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", pubroot)

app.use(require("./filter.js"));

app.get("/helloworld", (req, res) => {
	res.send("Hello World from " + nodeid);
});
app.use("/api", require("./apirouter.js"));
app.use(require("./staticrouter.js"));

app.listen(process.env.port, LOG.d("started web server"));