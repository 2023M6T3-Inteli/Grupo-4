const { validationResult } = require('express-validator')
require('express-async-errors')

const service = require('../services/project')

const Project = new service.Project()

const Create = async (req, res) => {
  const { title, description, projectType, deliveryTime, startDate, endDate, deadline, ownerId, roles } = req.body

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
    const result = await Project.Create(title, description, projectType, deliveryTime, startDate, endDate, deadline, ownerId, roles)
    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const GetProjectByID = async (req, res) => {
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
    const result = await Project.getProject(id)
    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const Update = async (req, res) => {
  const { id } = req.params
  const data = req.body

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
    const result = await Project.update(id, data)
    res.send(result)
  } catch (err) {
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
    const result = await Project.delete(id)
    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const GetAll = async (req, res) => {
  //Chamada para o service
  try {
    //Tratamento das respostas do método da classe
    const result = await Project.getAllProjects()
    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  Create,
  GetProjectByID,
  Update,
  Delete,
  GetAll
}
