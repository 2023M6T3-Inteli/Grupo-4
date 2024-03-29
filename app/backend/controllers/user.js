const { validationResult } = require('express-validator')
require('express-async-errors')
const jwt = require('jsonwebtoken')

const service = require('../services/user')

const User = new service.User()

const Create = async (req, res) => {
    const { email, password, name, area, tags } = req.body

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
        const result = await User.Create(email, password, name, area, tags)
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const Auth = async (req, res) => {
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
        const result = await User.Authenticate(email, password)
        res.send(result)
    } catch (err) {
        const date = new Date()
        if (err.message) {
            console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
        }
        res.status(500).send(err.message)
    }
}

const Update = async (req, res) => {
    const { id } = req.params

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
        const result = await User.update(id, req.body)
        res.send(result)
    } catch (err) {
        const date = new Date()
        if (err.message) {
            console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
        }
        res.status(500).send(err.message)
    }
}

const Delete = async (req, res) => {
    const { id } = req.params

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
        const result = await User.delete(id)
        res.send(result)
    } catch (err) {
        const date = new Date()
        if (err.message) {
            console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
        }
        res.status(500).send(err.message)
    }
}

const GetUser = async (req, res) => {
    const { id } = req.params

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
        const result = await User.getUser(id)
        res.send(result)
    } catch (err) {
        const date = new Date()
        if (err.message) {
            console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
        }
        res.status(500).send(err.message)
    }
}

const GetUserCalling = async (req, res) => {
    //Chamada para o service
    try {
        //Tratamento das respostas do método da classe
        const result = await User.getUser(req.id)
        res.send(result)
    } catch (err) {
        const date = new Date()
        if (err.message) {
            console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
        }
        res.status(500).send(err.message)
    }
}

const getAll = async (req, res) => {
    //Chamada para o service
    try {
        //Tratamento das respostas do método da classe
        const result = await User.getAllUsers()
        res.send(result)
    } catch (err) {
        const date = new Date()
        if (err.message) {
            console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
        }
        res.status(500).send(err.message)
    }
}

const verifyAdmin = async (req, res, next) => {
    res.status(200).send(`User ${req.id} is admin`)
}

//Exporta as funções do controller para o ROUTER
module.exports = {
    Create,
    Auth,
    Update,
    Delete,
    GetUser,
    GetUserCalling,
    getAll,
    verifyAdmin
}
