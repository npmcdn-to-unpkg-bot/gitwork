module.exports = function(app, mysqlClient, passport, session)
{
	app.get('/userPage', function(req, res){
		res.render('userPage/userPage.html', {
			session: req.session
		});
	});
}