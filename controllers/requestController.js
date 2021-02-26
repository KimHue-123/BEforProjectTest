var Task = require('../models/customer.js');
exports.list = function(req, res) {
    Task.getAllRequests(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};

exports.updateCustomer = function(req, res) {
    Task.updateCustomer(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};

exports.getCustomerById = function(req, res) {
    Task.getCustomerById(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};
exports.deleteCustomer = function(req, res) {
    Task.deleteCustomer(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};

exports.addCustomer = function(req, res) {
    Task.addCustomer(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};

//DataTest
exports.getListDataTest = function(req, res) {
    Task.getListDataTest(function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};

exports.deleteDataTest = function(req, res) {
    Task.deleteDataTest(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};

exports.getDataTestById = function(req, res) {
    Task.getDataTestById(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};

exports.UpdateDataTest = function(req, res) {
    Task.UpdateDataTest(req.body, function(err, response) {
        if (err) {
            res.send(err);
        }
        res.send(response);
    });
};