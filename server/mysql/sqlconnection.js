var config = require("../config/config.js");
var sql = require("mysql");
// 链接数据库
var Client = sql.createConnection(config.sqlconfig);


module.exports = Client;
