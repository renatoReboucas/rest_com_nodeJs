const express = require('express')
const routes = express.Router()

const AtendimentoController = require('./controller/AtendimentoController')

routes.get('/', (req, res) => res.send('Servidor  ok!'))

routes.post('/atendimentos', AtendimentoController.store)

module.exports = routes

// module.exports = app => {
//   app.get('/', (req, res) => res.send('Servidor  ok!'))
// }