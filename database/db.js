'user strict';


var sql = require("mssql");

// config for your database
var config = {
    user: 'sa',
    password: '123456789',
    server: 'localhost', 
    database: 'DichVu' 
};

    // connect to your database
sql.connect(config, function (err) {
    
    if (err) console.log(err);

    // // create Request object
    // var request = new sql.Request();
           
    // // query to the database and get the records
    // request.query('select * from Student', function (err, recordset) {
            
    //     if (err) console.log(err)

    //     // send records as a response
    //     res.send(recordset);
            
    // });
});
module.exports = sql;