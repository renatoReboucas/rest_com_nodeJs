const connection = require('../../config/connection')
class Atendimento{
    store(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?'
        connection.query(sql, [atendimento], (error, results) => {
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