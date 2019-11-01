const express = require('express')
const consign = require('consign')
// const routes = require('./src/routes')

module.exports = () => {
  const app = express()
  
// importa todos os arquivos de uma pasta

  consign().include('src').into(app)

  return app
}
