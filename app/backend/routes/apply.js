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

router.get(
    "/getApplyByProjectId/:id",
    [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.GetApplyByProjectId
);

router.get(
    "/getApplyByUserId/:id",
    [param("id", "Id do usuário é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.GetApplyByUserId
);

router.get(
    "/getApplyByOfferId/:id",
    [param("id", "Id da oferta é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.GetApplyByOfferId
);

router.put(
    "/updateStatus/:id",
    [param("id", "Id da oferta é necessário").exists({ checkFalsy: true })],
    [body("status", "Status é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.UpdateApply
);

router.delete(
    "/delete/:id",
    [param("id", "Id da oferta é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.Delete
);

module.exports = router;
