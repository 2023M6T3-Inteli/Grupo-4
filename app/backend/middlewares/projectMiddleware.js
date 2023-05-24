
const { createProject } = require('../services/projectService');
console.log('createProject');

async function createProjectMiddleware(req, res, next) {
  try {
    const project = await createProject(req.body);
    res.locals.project = project;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProjectMiddleware,
};
console.log('createProjectMiddleware')