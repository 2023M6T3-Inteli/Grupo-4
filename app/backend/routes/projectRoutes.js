// projectRoutes.js
const express = require('express');
const router = express.Router();
const { createProjectMiddleware } = require('../middlewares/projectMiddleware');

router.post('/projects', createProjectMiddleware, (req, res) => {
  res.json(res.locals.project);
});


router.get(
  "/getProjectByID/:id",
  [param("id", "ID é necessário").exists({ checkFalsy: true })],
  // unsureAuthenticated.unsureAuthenticated,
  projectController.GetProject
);

router.get(
  "/getAllProjects",
  projectController.GetAllProjects
);

module.exports = router;



