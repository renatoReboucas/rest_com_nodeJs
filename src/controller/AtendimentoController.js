// const connection = require('../../config/connection')
const Atendimento = require('../models/Atendimento')
module.exports = {
   store(req, res) {
      const data = res.body
        // console.log(data);
        Atendimento.store(data)
        return res.json(data)
    }
}

