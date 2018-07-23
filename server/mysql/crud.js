var Client = require("./sqlconnection.js");

function mysqlFn(sql,arr,callback){
  Client.query(sql,arr,function(error,result){
    if(error){
      return;
    }
    callback(result);
  })
}

module.exports = mysqlFn;
