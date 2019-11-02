const express = require('express')
// const consign = require('consign')
const bodyParser = require('body-parser')

const routes = require('./src/routes')
const connection = require('./config/connection')
const Tabelas = require('./config/Tabelas')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
// app.use(express.json())

connection.connect( erro => {
  if(erro){
    console.log(erro);
  }else{
    console.log("Banco conectado!")
    //cria tabela
    // Tabelas.init(connection)
    app.use('/api', routes)
    app.listen(3333, () => console.log('Servidor rodando na porta 3333')) 
  }
})


