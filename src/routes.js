const express = require('express')


const routes = express.Router()

routes.get('/', (req, res) => res.send('Servidor  ok!'))

routes.post('/', (req, res) => {
  console.log(req.body);
  
  res.send("Realizando um POST")
})

module.exports = routes

// module.exports = app => {
//   app.get('/', (req, res) => res.send('Servidor  ok!'))
// }