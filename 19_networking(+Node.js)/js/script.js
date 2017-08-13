const express = require('express')
const app = express()
const fs = require('fs');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

function respondUser(user) {
	let userObj = {};
	for(let prop in user) {
		if (prop !== "password") {
			userObj[prop] = user[prop];
		}
	}
	return userObj;
}

app.post('/users', function (req, res) {
  	let user = req.body;
  	fs.readFile('storage.data','utf8',(err,result) => {
    	try {
			let users = JSON.parse(result);
			let isExist = false;
			for(let i = 0; i < users.length; i++) {
				if (users[i].username === user.username) {
					isExist = true;
					break;
				}
			}
			if(isExist) {
				res.writeHead(409, "User already exist", { 'Content-Type': 'text/plain'});
				res.end();
			} else {
				bcrypt.hash(user.password, 10, function(err, hash) {
					user.password = hash;
					users.push(user);
					users = JSON.stringify(users);
					fs.writeFile('storage.data', users);
					res.writeHead(201, "User created", { 'Content-Type': 'text/plain'});
					res.end();
				});				
			}
		} catch(err) {
			fs.writeFile('storage.data', user);
		}
	});
})


app.get('/users', function (req, res) {
	fs.readFile('storage.data','utf8',(err,result) => {
		try {
		let users = [];
		JSON.parse(result).forEach(el => {
			let obj = {};
			for(let prop in el) {
				if (prop !== "password") {
					obj[prop] = el[prop];
				}
			}
			users.push(obj);
			});
			res.send(users);
		} catch(err) {
			res.send([]);
		}
	});
})


app.get('/users/:userId', function (req, res) {
	let userId = req.params.userId;
	fs.readFile('storage.data','utf8',(err,result) => {
		try { 
			let users = JSON.parse(result);
			let user;
			let isExist = false;
			for(let i = 0; i < users.length; i++) {
				if (users[i].id == userId) {
					isExist = true;
					let user = respondUser(users[i]);
					res.send(user);
					break;
				}
			}
			if (!isExist) {
				res.writeHead(404, "User hasn't been found", { 'Content-Type': 'text/plain'});
				res.end();
			}
		} catch(err) {
			res.send(err);
		}
	})
})


app.put('/users/:userId', function (req, res) {
  	let id = req.params.userId;
	let user = req.body;
	fs.readFile('storage.data','utf8',(err,result) => {
		try { 
			let users = JSON.parse(result);
			// console.log(users);
			let isExist = false;
			let userProps = Object.keys(user);
			for(let i = 0; i < users.length; i++) {
				if (users[i].id == id) {
					isExist = true;		
					userProps.forEach(prop => {
						if (users[i][prop] !== user[prop] && prop !== "password" && prop !== "id") {
							users[i][prop] = user[prop];
							console.log(users[i]);
						}
					});	
					res.send(respondUser(users[i]));
					users = JSON.stringify(users);
					fs.writeFile('storage.data', users);
					break;
				}
			}
			if (!isExist) {
				res.writeHead(404, "User hasn't been found", { 'Content-Type': 'text/plain'});
				res.end();
			}
		} catch(err) {
			res.send(err);
		}
	})
})


app.delete('/users/:userId', function (req, res) {
  	let id = req.params.userId;
	fs.readFile('storage.data','utf8',(err,result) => {
		try { 
			let users = JSON.parse(result);
			let isExist = false;
			for(let i = 0; i < users.length; i++) {
				if (users[i].id === id) {
					isExist = true;
					users.splice(i,1);

					let message = {
						message:"User has been successfully removed."
					}
					res.send(message);
					users = JSON.stringify(users);
					fs.writeFile('storage.data', users);
					break;
				}
			}
			if (!isExist) {
				res.writeHead(404, "User hasn't been found", { 'Content-Type': 'text/plain'});
				res.end();
			}
			
		} catch(err) {
			res.send(err);
		}
	})
})


app.listen(3000, function () {
  	console.log('App is listening on port 3000!')
})