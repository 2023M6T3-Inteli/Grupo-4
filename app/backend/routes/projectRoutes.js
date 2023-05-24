// projectRoutes.js
const express = require('express');
const router = express.Router();
const { createProjectMiddleware } = require('../middlewares/projectMiddleware');

console.log('createProjectMiddleware');

router.post('/projects', createProjectMiddleware, (req, res) => {
  res.json(res.locals.project);
});

module.exports = router;

console.log('routers')

