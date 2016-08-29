exports.list = function(req, res){
	req.getConnection(function(err, connection){
		var query = connection.query('select * from customer', function(err, rows){
			if(err){
				console.log("Error Selecting : %s", err);
			};
			res.render('customers', {page_title:"Custoemrs - Node.js", data:rows});
		});
	});
};

exports.add = function(req, res){
	res.render('add_customer', {page_title:"Add Customers - Node.js"});
};

exports.edit = function(req, res){
	var id = req.params.id;

	req.getConnection(function(err, connection){
		var query = connection.query('select * from customer where id = ?', [id], function(err, rows){
			if(err){
				console.log("Error Selecting : %s", err);
			};
			res.render('edit_customer', {page_title:"Edit Customers - Node.js", data:rows});
		});
	});
};

exports.save = function(req, res){
	var input = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function(err, connection){
		var data = {
			name : input.name,
			address : input.address,
			email : input.email,
			phone : input.phone
		};

		var query = connection.query("insert into customer set ? ", data, function(err, rows){
			if(err){
				console.log("Error inserting : %s", err);
			};
			res.redirect('/customers');
		});
	});
};

exports.save_edit = function(req, res){
	var input = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;

	req.getConnection(function (err, connection){
		var data = {
			name : input.name,
			address : input.address,
			email : input.email,
			phone : input.phone
		};

		connection.query("update customer set ? where id = ?", [data, id], function(err, rows){
			if(err){
				console.log("Error Updating : %s", err);
			};
			res.redirect('/customers');
		});
	});
};

exports.delete_customer = function(req, res){
	var id = req.params.id;

	req.getConnection(function (err, connection){
		connection.query("delete from customer where id = ?", [id], function(err, rows){
			if(err){
				console.log("Error deleting : %s", err);
			};
			res.redirect('/customers');
		});
	});
};