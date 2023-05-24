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

router.post(
    "/auth",
    [body("email", "Email é necessário").exists({ checkFalsy: true })],
    [body("password", "Senha é necessária").exists({ checkFalsy: true })],
    userController.Auth
);

router.put(
    "/update/:id",
    [param("id", "ID é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    userController.Update
);

router.delete(
    "/delete/:id",
    [param("id", "ID é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    userController.Delete
);

router.get(
    "/getUserByID/:id",
    [param("id", "ID é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    userController.GetUser
);

router.get(
    "/",
    unsureAuthenticated.unsureAuthenticated,
    userController.GetUserCalling
);


//Exporta o ROUTER
module.exports = router;