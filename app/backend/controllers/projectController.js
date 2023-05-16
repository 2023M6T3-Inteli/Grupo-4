const projectService = require('./projectService')

async function createProject(req, res) {
  const project = await projectService.createProject(req.body)
  res.json(project)
}

module.exports = {
  createProject,
}
