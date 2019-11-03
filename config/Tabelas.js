class Tabelas {
    init(connection){
        console.log('tabelas foram chamadas');
        this.connection = connection
        this.createTableAtendimentos()
    }
    createTableAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos(id int NOT NULL AUTO_INCREMENT, 
            cliente varchar(255), pet varchar(255), 
            servico varchar(255),
            data datetime not null,
            data_criacao datetime not null,
            status varchar(255), 
            observacoes text, 
            PRIMARY KEY(id))`
        this.connection.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela atendimentos criada com sucesso');
            }
        })
    }
}

module.exports = new Tabelas