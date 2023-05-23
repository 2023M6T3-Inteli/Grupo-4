// projectRoutes.js
const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project');

// router.post('/projects', createProjectMiddleware, (req, res) => {
//   res.json(res.locals.project);
// });


router.post(
  "/create",
  [body("title", "Titulo é necessária").exists({ checkFalsy: true })],
  [body("description", "Descrição é necessária").exists({ checkFalsy: true })],
  [body("projectType", "Tipo do projeto é necessária").exists({ checkFalsy: true })],
  [body("startDate", "Area é necessária").exists({ checkFalsy: true })],
  [body("endDate", "Area é necessária").exists({ checkFalsy: true })],
  [body("deadline", "Area é necessária").exists({ checkFalsy: true })],
  [body("deliveryTime", "Area é necessária").exists({ checkFalsy: true })],
  // unsureAuthenticated.unsureAuthenticated,
  projectController.Create
);

module.exports = router;



