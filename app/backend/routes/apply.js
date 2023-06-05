const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const applyController = require('../controllers/apply');

//Middlewares
const unsureAuthenticated = require('../middlewares/unsureAuthenticated');

router.post(
    "/create",
    [body("why", "Porque é necessário").exists({ checkFalsy: true })],
    [body("projectId", "ID do projeto é necessário").exists({ checkFalsy: true })],
    [body("offerId", "ID da oferta é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.Create
);

module.exports = router;
