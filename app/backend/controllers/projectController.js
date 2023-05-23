const projectService = require('../services/projectService')

async function createProject(req, res) {
  const project = await projectService.createProject(req.body)
  res.json(project)
}
const GetProjectbyID = async (req, res) => {
  const { id } = req.params

  //Valida se algum paremetro é inválido
  const errors = validationResult(req)

const GetAllProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findAll() // Consulta todos os projetos

    res.status(200).json(projects)
    
  } catch (error) {
    console.error(error)
    res.status(500).json({ error:'Error to get projects' })
  }
}

  if (!errors.isEmpty()) {
      return res.status(400).json({
          error: errors.errors[0].msg,
      })
  }

  //Chamada para o service
  try {
      //Tratamento das respostas do método da classe
      const result = await User.GetProject(id)
      res.send(result)
  } catch (err) {
      const date = new Date()
      if (err.message) {
          console.log(`[${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()} | ${date.getHours()-3}:${date.getMinutes()}]`,err.message)
      }
      res.status(500).send(err.message)
  }
}
module.exports = {
  createProject,
  GetProjectbyID,
}
