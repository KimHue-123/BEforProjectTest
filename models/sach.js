'user strict';
var sql = require('../database/db.js');

//Task object constructor
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

var request = new sql.Request();
//----------------------LOAI SACH-----------------------------
Task.getListLoaiSach = function(result){
    var request = new sql.Request();
    request.execute("getListLoaiSach").then(function (res) {
        result(null, res);
    }).catch(function(err){
        console.log(err);
    });
}
Task.addLoaiSach = function(params, result){
    var request = new sql.Request();

    request.input("TENLOAISACH", sql.NVARCHAR(30), params.TENLOAISACH);
    request.input("CHUDE", sql.NVARCHAR(30), params.CHUDE);
    request.execute("THEM_LS").then(function (res) {
        result(null, res);
    }).catch(function(err){
        console.log(err);
    });
}


//----------------------NHA XUAT BAN-----------------------------

Task.getListNXB = function(result){
    var request = new sql.Request();
    request.execute("getListNXB").then(function (res) {
        result(null, res);
    }).catch(function(err){
        console.log(err);
    });
}
Task.addNXB = function(params, result){
    var request = new sql.Request();

    request.input("TENNXB", sql.NVARCHAR(30), params.TENNXB);
    request.input("DIACHI", sql.NVARCHAR(50), params.DIACHI);
    request.execute("THEM_NXB").then(function (res) {
        result(null, res);
    }).catch(function(err){
        console.log(err);
    });
}
module.exports = Task;