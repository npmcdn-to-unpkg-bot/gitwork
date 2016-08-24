var express = require('express');
var app = express();
// body-parser : POST 데이터 처리
var bodyParser = require('body-parser');
// express-session : 세션 관리
var session = require('express-session');
var fs = require("fs");

app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

//bodyParser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//session config
app.use(session({
	secret: '@#@$MYSIGN#@$#$',
	resave: false,
	saveUninitialized: true
}));

var router = require('./router/main')(app, fs);

/*  port config  */
app.listen(3000, function(){
	console.log('listening on port 3000!');
});
