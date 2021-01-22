var Task = require('../models/sach.js');

//---------------------LOAI SACH------------------
exports.getListLoaiSach = function (req, res) {
    Task.getListLoaiSach(function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};
exports.addLoaiSach = function (req, res) {
    Task.addLoaiSach(req.body, function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};

//---------------------NHA XUAT BAN------------------
exports.getListNXB = function (req, res) {
    Task.getListNXB(function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};
exports.addNXB = function (req, res) {
    Task.addNXB(req.body, function (err, response) {
        if (err){
            res.send(err);
        }
        res.send(response);
    });
};
