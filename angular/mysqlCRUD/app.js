var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var customers = require('./routes/customers');
var app = express();

var connection = require('express-myconnection');
var mysql = require('mysql');

app.set('port', process.env.PORT || 4300);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverried());

app.use(express.static('public'));

if('development' == app.get('env')){
	app.use(express.errorHandler());
}

app.use(
	connection(mysql, {
		host: 'localhost',
		user: 'root',
		password: '870915',
		port: 3306,
		database:'nodetest'
	},'pool')
);

app.get('/', routes.index);
app.get('/customers', customers.list);
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id', customers.save_edit);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port' + app.get('port'));
});
