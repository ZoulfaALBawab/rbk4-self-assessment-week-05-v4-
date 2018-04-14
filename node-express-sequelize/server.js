var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
app.get('/users',function(req , res)
{
	if (!User)
	{
		console.error('The User is not existe!');
	}
	console.log();
	res.send('User');
});

 // When i made a GET req from the server ,, the server will send to the DataBase ..
// Then, i have to compare if the user is existe in my database to get the users i want ,, otherwise will be error ..  

module.exports = { 
  app: app,
  User: User
};


 