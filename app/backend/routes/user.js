const express = require("express");
const router = express.Router();
const { body, param, validationResult } = require("express-validator");

const userController = require("../controllers/user");

//Middlewares
const unsureAuthenticated = require("../middlewares/unsureAuthenticated");

router.post(
    "/register",
    [body("email", "Email é necessário").exists({ checkFalsy: true })],
    [body("password", "Senha é necessária").exists({ checkFalsy: true })],
    [body("name", "Nome é necessária").exists({ checkFalsy: true })],
    [body("area", "Area é necessária").exists({ checkFalsy: true })],
    [body("tags", "Tags é necessária").exists({ checkFalsy: true })],
    userController.Create
);

//Exporta o ROUTER
module.exports = router;