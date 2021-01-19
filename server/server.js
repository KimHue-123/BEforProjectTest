var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())
app.options('*', cors())
bodyParser = require('body-parser');
app.listen(5000)
console.log('API server started on: 5000');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../routes'); //importing route
routes(app); //register the route