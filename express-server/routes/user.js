const express = require('express')
const route = express.Router()

const users = ["Utkarsh", "Agarwal"]

route.get('/users', function(req,res) {
  res.send(users)
})

console.log(module.exports, '1')
module.exports = route
console.log(module.exports.route, '2')