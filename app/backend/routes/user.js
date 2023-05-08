const express = require("express");
const router = express.Router();
const { body, param, validationResult } = require("express-validator");

const userController = require("../controllers/user");

//Middlewares
const unsureAuthenticated = require("../middlewares/unsureAuthenticated");

router.post(
    "/auth",
    [body("email", "Email é necessário").exists({ checkFalsy: true })],
    [body("password", "Senha é necessária").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    userController.Authenticated
);

//Exporta o ROUTER
module.exports = router;