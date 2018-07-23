var express = require("express");
var app = express();
var router = require("./router/router.js");
var config = require("./config/config.js")
var bodyParser = require("body-parser");
// ./ 和 ../的区别

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(config.url.baseUrl,router);

app.listen(3000,function(){
  console.log("服务器运行在3000端口上");
})
