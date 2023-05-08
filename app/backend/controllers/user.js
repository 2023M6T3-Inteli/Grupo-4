const { validationResult } = require('express-validator')
//const preSub = require('../services/preSub')
require('express-async-errors')
const jwt = require('jsonwebtoken')

const service = require('../services/user')

const User = new service.User()

const Authenticated = async (req, res) => {
    const { email, password } = req.body

    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    //Chamada para o service
    try {
        //Tratamento das respostas do método da classe
        const result = await User.Auth(email, password)
        res.send(result)
    } catch (err) {
        // const date = new Date()
        // if (err.message) {
        //     console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
        // }
        res.status(500).send(err.message)
    }
}

//Exporta as funções do controller para o ROUTER
module.exports = {
    Authenticated
}
