const routes = require('express').Router();
const storage = "./storage.data";
const fs = require('fs');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true })); 

routes.post('/', function (req, res) {
  	let user = req.body;
  	fs.readFile(storage,'utf8',(err,result) => {
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
				res.status(409).send();
			} else {
				bcrypt.hash(user.password, 10, function(err, hash) {
					user.password = hash;
					users.push(user);
					users = JSON.stringify(users);
					fs.writeFile(storage, users);
					res.status(201).send();
				});				
			}
		} catch(err) {
			let users = [];
			users.push(user);
			users = JSON.stringify(users);
			fs.writeFile(storage, users);
			res.status(201).send();
		}
	});
})


routes.get('/', (req, res) => {
	fs.readFile(storage,'utf8',(err,result) => {
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
			res.status(200).send(users);
		} catch(err) {
			res.status(200).send([]);
		}
	});
})
module.exports = routes;