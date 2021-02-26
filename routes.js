module.exports = function(app) {
    var request = require('./controllers/requestController');
    var requestSach = require('./controllers/sachController');


    // todoList Routes
    app.route('/requests')
        .post(request.list)
    app.route('/edit')
        .post(request.updateCustomer)
    app.route('/getById')
        .post(request.getCustomerById)
    app.route('/deleteCustomer')
        .post(request.deleteCustomer)
    app.route('/addCustomer')
        .post(request.addCustomer)
        //--------------LOAI SACH-------------
    app.route('/listLoaiSach')
        .get(requestSach.getListLoaiSach)
    app.route('/addLoaiSach')
        .post(requestSach.addLoaiSach)


    //--------------NXB-------------
    app.route('/listNXB')
        .get(requestSach.getListNXB)
    app.route('/addNXB')
        .post(requestSach.addNXB)

    app.route('/listDataTest')
        .get(request.getListDataTest)
    app.route('/deleteDataTest')
        .post(request.deleteDataTest)
    app.route('/getDataTestById')
        .post(request.getDataTestById)
    app.route('/updateDataTest')
        .post(request.UpdateDataTest)
        // app.route('/requests/accept')
        //     .post(request.accept)
        // app.route('/requests/refuse')
        //     .post(request.refuse)
        // app.route('/requests/finish')
        //     .post(request.finish)
};