const express = require('express')
const app = express()
const fs = require('fs');

app.post('/users', function (req, res) {
  res.send('user created');
})
app.get('/users', function (req, res) {
  res.send('list of users')
})
app.get('/users/:userId', function (req, res) {
  res.send(`user ${req.params.userId}`);
})
app.put('/users/:userId', function (req, res) {
  res.send(`user ${req.params[0]} has been updated`);
})
app.delete('/users/:userId', function (req, res) {
  res.send(`user ${req.params[0]} has been deleted`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})