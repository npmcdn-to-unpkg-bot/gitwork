module.exports = function(app, mysqlClient)
{
	app.get('/', function(req, res){
		mysqlClient.query('select * from products', function(error, results){
			if(error){
				console.log('error : ', error.message);
			}else{
				res.render('list.html',{prodList : results});
			};
		})
	});

	app.get('/delete/:id', function(req, res){
		mysqlClient.query('delete from products where id = ?', [req.param.id], function(error, results){
			if(error){
				console.log('delete Error');
			}else{
				console.log('delete id = %d', req.params.id);
				res.redirect('/');
			}
		});
	});

	app.get('/insert', function(req, res){
		res.render('insert.html');
	});

	app.get('/edit/:id', function(req, res){
		mysqlClient.query('select * from products where id = ?', [req.params.id], function(error, result){
			if(error){
				console.log('readFile Error');
			}else{
				res.render('edit.html', {product : result[0]});
			}
		});
	});
	app.post('/insert', function(req, res){
		var body = req.body;
		mysqlClient.query('insert into products(name, modelnumber, series) values(?,?,?)', [body.name, body.modelnumber, body.series],
			function(error, result){
				if(error){
					console.log('insert error : ', error.message);
				}else{
					res.redirect('/');
				}
			});
	});

app.post( '/edit/:id', function(req, res){
	var body = req.body;
	
	mysqlClient.query( 'update products set name=?, modelnumber=?, series=? where id=?',
			[ body.name, body.modelnumber, body.series, body.id ], 
			function(error, result){
				if(error){
					console.log('update error : ', error.message );
				}else{
					res.redirect('/');
				}
	});
});


}