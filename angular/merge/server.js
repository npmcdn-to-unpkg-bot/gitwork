var express = require('express');
var app = express();
// body-parser : POST 데이터 처리
var bodyParser = require('body-parser');
// express-session : 세션관리
var session = require('express-session');
// fs 파일 입출력
var fs = require('fs');
// mysql
var mysql = require('mysql');
// mysql config
var mysqlClient = mysql.createConnection({
	user:'root',
	password: '870915',
	database : 'nodetest'
});


//view 파일 경로 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// js, css, img 파일 경로 설정
app.use(express.static('public'));

//bodyParser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//session config
app.use(session({
	secret: '@#@#MYSIGN#@#@#',
	resave: false,
	saveUninitialized: true
}));

// route 파일 설정
var main = require('./router/main')(app, mysqlClient);
var login = require('./router/login')(app, mysqlClient);

app.listen(3000, function(){
	console.log('listening on port 3000!');
});