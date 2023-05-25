const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const contentController = require('../controllers/content');

//Middlewares
const unsureAuthenticated = require('../middlewares/unsureAuthenticated');

router.post(
  "/create",
  [body("title", "Titulo é necessário").exists({ checkFalsy: true })],
  [body("description", "Descrição é necessária").exists({ checkFalsy: true })],
  [body("tags", "Tags são necessárias").exists({ checkFalsy: true })],
  // [body("ownerId", "Id do Owner é necessário").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  contentController.Create
);

router.get(
  "/getContent/:id",
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
  // unsureAuthenticated.unsureAuthenticated,
  contentController.GetContentByID
);
router.get(
  "/getContent",
  // unsureAuthenticated.unsureAuthenticated,
  contentController.GetAllContent
);


module.exports = router;



