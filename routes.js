module.exports = function (app) {
    var request = require('./controllers/requestController');

    
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
    // app.route('/requests/accept')
    //     .post(request.accept)
    // app.route('/requests/refuse')
    //     .post(request.refuse)
    // app.route('/requests/finish')
    //     .post(request.finish)
};