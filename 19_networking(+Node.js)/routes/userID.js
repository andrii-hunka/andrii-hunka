const routes = require('express').Router();
const storage = "./storage.data";
const fs = require('fs');
const bodyParser = require('body-parser');
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true })); 

function respondUser(user) {
	let userObj = {};
	for(let prop in user) {
		if (prop !== "password") {
			userObj[prop] = user[prop];
		}
	}
	return userObj;
}

routes.get('/:userId', (req, res) => {
	let userId = req.params.userId;
	fs.readFile(storage,'utf8',(err,result) => {
		try { 
			let users = JSON.parse(result);
			let user;
			let isExist = false;
			for(let i = 0; i < users.length; i++) {
				if (users[i].id == userId) {
					isExist = true;
					let user = respondUser(users[i]);
					res.status(200).send(user);
					break;
				}
			}
			if (!isExist) {
				res.status(404).send();
			}
		} catch(err) {
			res.status(404).send();
		}
	})
})


routes.put('/:userId', (req, res) => {
  	let id = req.params.userId;
	let user = req.body;
	fs.readFile(storage,'utf8',(err,result) => {
		try { 
			let users = JSON.parse(result);
			let isExist = false;
			let userProps = Object.keys(user);
			for(let i = 0; i < users.length; i++) {
				if (users[i].id == id) {
					isExist = true;		
					userProps.forEach(prop => {
						if (users[i][prop] !== user[prop] && prop !== "password" && prop !== "id") {
							users[i][prop] = user[prop];
						}
					});	
					res.status(200).send(respondUser(users[i]));
					users = JSON.stringify(users);
					fs.writeFile(storage, users);
					break;
				}
			}
			if (!isExist) {
				res.status(404).send();
			}
		} catch(err) {
			res.status(404).send();
		}
	})
})


routes.delete('/:userId', (req, res) => {
  	let id = req.params.userId;
	fs.readFile(storage,'utf8',(err,result) => {
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
					res.status(200).send(message);
					users = JSON.stringify(users);
					fs.writeFile(storage, users);
					break;
				}
			}
			if (!isExist) {
				res.status(404).send();
			}
			
		} catch(err) {
			res.status(404).send();
		}
	})
})
module.exports = routes;