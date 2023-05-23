// projectMiddleware.js
const projectService = require('../services/projectService');

async function createProjectMiddleware(req, res, next) {
  try {
    const project = await projectService.createProject(req.body);
    res.locals.project = project;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProjectMiddleware,
};
