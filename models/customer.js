'user strict';
var sql = require('../database/db.js');

//Task object constructor
var Task = function(task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

var request = new sql.Request();
Task.getAllRequests = function(params, result) {
    var request = new sql.Request();
    // var a= 1, b = 5;
    // a = pageIndex;
    // b = pageSize;

    request.input("pageIndex", sql.Int, params.pageIndex);
    request.input("pageSize", sql.Int, params.pageSize);
    request.input("textSearch", sql.NVarChar(50), params.textSearch);
    request.output("totalRecord", sql.Int)
    console.log("pageIndex: ", params.pageIndex);
    console.log("pageIndex: ", params.pageSize);
    console.log("textSearch: ", params.textSearch);
    //console.log("totalRecord: ", params.totalRecord);
    // console.log("pageIndex: " )
    request.execute("customerPhanTrang").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
    //request.query("EXEC customerPhanTrang @a , @b", function (err, res) {

}

Task.updateCustomer = function(params, result) {
    var request = new sql.Request();
    // var a= 1, b = 5;
    // a = pageIndex;
    // b = pageSize;

    request.input("Id", sql.Int, params.Id);
    request.input("FullName", sql.NVARCHAR(50), params.datajson.FullName);
    request.input("Sex", sql.NVARCHAR(10), params.datajson.Sex);
    request.input("AddressCustomer", sql.NVARCHAR(100), params.datajson.AddressCustomer);
    request.input("PhoneNumber", sql.VARCHAR(10), params.datajson.PhoneNumber);

    request.execute("UpdateCustomer").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
    //request.query("EXEC customerPhanTrang @a , @b", function (err, res) {

}

Task.getCustomerById = function(params, result) {
    var request = new sql.Request();
    // var a= 1, b = 5;
    // a = pageIndex;
    // b = pageSize;

    request.input("Id", sql.Int, params.Id);
    console.log("params.Id truyen vao: " + params.Id);
    request.execute("getCustomerById").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
    //request.query("EXEC customerPhanTrang @a , @b", function (err, res) {

}

Task.deleteCustomer = function(params, result) {
    var request = new sql.Request();

    request.input("Id", sql.Int, params.Id);
    request.execute("DeleteCustomer").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
}

Task.addCustomer = function(params, result) {
    var request = new sql.Request();

    request.input("FullName", sql.NVARCHAR(50), params.FullName);
    request.input("Sex", sql.NVARCHAR(10), params.Sex);
    request.input("AddressCustomer", sql.NVARCHAR(100), params.AddressCustomer);
    request.input("PhoneNumber", sql.VARCHAR(10), params.PhoneNumber);
    request.execute("THEM_KH").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
}

//DataTest
Task.getListDataTest = function(result) {
    var request = new sql.Request();
    request.execute("getListDataTest").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
}

Task.deleteDataTest = function(param, result) {
    var request = new sql.Request();

    request.input("id", sql.Int, param.id);
    console.log("id: ", param.id);
    request.execute("DeleteDataTest").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
}
Task.getDataTestById = function(param, result) {
    var request = new sql.Request();

    request.input("id", sql.Int, param.id);
    console.log("id: ", param.id);
    request.execute("getDataTestById").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
}
Task.UpdateDataTest = function(param, result) {
    var request = new sql.Request();

    request.input("id", sql.Int, param.id);
    request.input("roles", sql.NVARCHAR(10), param.roles);
    request.input("firstName", sql.NVARCHAR(20), param.firstName);
    request.input("lastName", sql.NVARCHAR(20), param.lastName);

    console.log("id: ", param.id);
    request.execute("UpdateDataTest").then(function(res) {
        result(null, res);
    }).catch(function(err) {
        console.log(err);
    });
}


module.exports = Task;