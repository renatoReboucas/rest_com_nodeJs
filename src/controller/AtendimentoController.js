// const connection = require('../../config/connection')
const Atendimento = require('../models/Atendimento')
module.exports = {
   store(req, res) {
    const data = req.body
        console.log("data: ",data);
        // Atendimento.store(data)
        return res.json(data)
    }
}

