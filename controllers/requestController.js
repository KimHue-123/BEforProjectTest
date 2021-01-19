var Task = require('../models/customer.js');
exports.list = function (req, res) {
    Task.getAllRequests(req.body, function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};

exports.updateCustomer = function (req, res) {
    Task.updateCustomer(req.body, function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};

exports.getCustomerById = function (req, res) {
    Task.getCustomerById(req.body, function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};
exports.deleteCustomer = function (req, res) {
    Task.deleteCustomer(req.body, function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};

exports.addCustomer = function (req, res) {
    Task.addCustomer(req.body, function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};