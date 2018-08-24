//globals
global.nodeid = process.env.nodeid;
global.LOG = require("./logger.js")(nodeid);
global.pj = require("path").join;
global.dirroot = __dirname;
global.pubroot = pj(dirroot, "public");
//start web
require("./routers/webrouter.js");