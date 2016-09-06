module.exports = function(app, mysqlClient, passport)
{
	app.get('/userPage', function(req, res){
		res.render('userPage/userPage.html');
	});
}