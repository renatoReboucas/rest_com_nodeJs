const express = require('express')
const bodyParser = require('body-parser')
// const consign = require('consign')

const routes = require('./src/routes')
const connection = require('./config/connection')
const Tabelas = require('./config/Tabelas')

const app = express()


app.use(bodyParser.urlencoded({ extended: true}) )
app.use( bodyParser.json() )
// app.use( express.urlencoded({ extended: true }) );
// app.use( express.json() )
app.use('/api', routes)
connection.connect( erro => {
  if(erro){
    console.log(erro);
  }else{
    console.log("Banco conectado!")
    //cria tabela
    Tabelas.init(connection)
    app.listen(3333, () => console.log('Servidor rodando na porta 3333')) 
  }
})


