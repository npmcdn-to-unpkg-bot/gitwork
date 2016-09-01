module.exports = function(app, mysqlClient)
{
	app.get('/login', function(req,res){
		res.render('login/login.html');
	});
}