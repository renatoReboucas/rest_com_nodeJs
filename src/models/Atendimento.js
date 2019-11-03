const moment = require('moment')
const connection = require('../../config/connection')
class Atendimento{
    store(atendimento) {
        console.log(atendimento);
        
        const data_criacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = { ...atendimento, data_criacao, data}
        console.log("atendiment: ",atendimentoDatado);
        
        const sql = 'INSERT INTO atendimentos SET ?'
        connection.query(sql, atendimentoDatado , (error, results) => {
            if (error){
                console.log(error);
            }else{
                console.log(results);
                return results
                
            }
        })
    }
}
module.exports = new Atendimento