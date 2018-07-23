var  express= require("express");
var router = express.Router();
var config = require("../config/config.js");
var crud = require("../mysql/crud.js");
var url = require("url");


router.all(config.url.login, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all("/collect", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
// 获取收藏信息
router.get("/collect",function(req,res){
	var sql = "select * from musicinfo";
	crud(sql,null,function(data){
		if(data.length > 0){
			res.json(data)
		}else{
			res.json({
				msg:"暂无数据"
			})
		}
	})
})


router.all("/addcollect", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
router.get("/addcollect",function(req,res){
	var sql = "insert into musicinfo values (null,?,?,?)";
	var path_url = url.parse(req.url,true);
	var query = path_url.query;
	var musicid = query.musicid;
	var musicname = query.musicname;
	var musicauthor = query.musicauthor;
	var currentArr = [musicid,musicname,musicauthor];
	crud(sql,currentArr,function(data){
		if(data.affectedRows){
			res.json({
				msg:"收藏成功"
			})
		}else{
			res.json({
				msg:"收藏失败"
			})
		}
	})
})


router.all(config.url.login, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
// 登录
router.post(config.url.login,function(req,res){
  // 获取参数
  var username = req.body.username;
  var password = req.body.password;

  var sql = "select * from user where `username`=? and `password`=?";
  var arr = [username,password];
  crud(sql,arr,function(data){
    if(data.length>0){
      res.json(data)
    }else{
      res.json({
        msg:"登录失败"
      })
    }
  })
})


router.all(config.url.register, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
// 注册
router.post(config.url.register,function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  var sql = "insert into user values(null,?,?)";
  var arr = [username,password];
  crud(sql,arr,function(data){
    if(data.affectedRows){
      res.json({
        "msg":"注册成功",
        "code":200
      })
    }else{
      res.json({
        "msg":"注册失败",
        "code":100
      })
    }
  })
})

router.all(config.url.resetpwd, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
// 修改密码
router.post(config.url.resetpwd,function(req,res){
  // id 要修改的值
  var pwd = req.body.pwd;
  var userid = req.body.userid;
  var arr = [pwd,userid];
  var sql = "update user set `password`=? where id=?";
  crud(sql,arr,function(data){
    if(data.affectedRows){
      res.json({
        "msg":"修改成功",
        "code":200
      })
    }else{
      res.json({
        "msg":"修改失败",
        "code":100
      })
    }
  })
})


var helloData = require("../data/hello.json");
router.get("/demo",function(req,res){
	res.json(helloData)
})

var Mock = require('mockjs')
router.get("/hellomock",function(req,res){

	var data =Mock.mock({
	  "object|1-4": {
	    "310000": "上海市",
	    "320000": "江苏省",
	    "330000": "浙江省",
	    "340000": "安徽省"
	  }
	})
	res.json(data)
})

module.exports = router;
