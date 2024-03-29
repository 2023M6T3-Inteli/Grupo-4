const express = require("express");
const router = express.Router();
const { body, param, validationResult } = require("express-validator");


const userController = require("../controllers/user");

//Middlewares
const unsureAuthenticated = require("../middlewares/unsureAuthenticated");
const { unsureAdmin } = require("../middlewares/unsureAdmin");

/**
 * @swagger
 * /v1/user:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get the authenticated user
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", unsureAuthenticated.unsureAuthenticated, userController.GetUserCalling);

/**
 * @swagger
 * /v1/user/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get a user by ID
 *     parameters:
 *       - name: id
 *         description: User ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get
        ("/getUserByID/:id", 
        unsureAuthenticated.unsureAuthenticated, 
        userController.GetUser);

/**
 * @swagger
 * /v1/user/register:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     description: Register a new user
 *     parameters:
 *       - name: email
 *         description: User's email
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password
 *         in: body
 *         required: true
 *         type: string
 *       - name: name
 *         description: User's name
 *         in: body
 *         required: true
 *         type: string
 *       - name: area
 *         description: User's area
 *         in: body
 *         required: true
 *         type: string
 *       - name: tags
 *         description: User's tags
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.post(
    "/register", 
    [body("email", "Email é necessário").exists({ checkFalsy: true })], 
    [body("password", "Senha é necessária").exists({ checkFalsy: true })], 
    [body("name", "Nome é necessária").exists({ checkFalsy: true })], 
    [body("area", "Area é necessária").exists({ checkFalsy: true })], 
    [body("tags", "Tags é necessária").exists({ checkFalsy: true })],
    async (req, res, next) => {
        try {
            const result = await userController.Create(req, res);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
);

         

/**
 * @swagger
 * /v1/user/auth:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     description: Authenticate a user
 *     parameters:
 *       - name: email
 *         description: User's email
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.post
        ("/auth", 
        [body("email", "Email é necessário").exists({ checkFalsy: true })], 
        [body("password", "Senha é necessária").exists({ checkFalsy: true })], 
        userController.Auth);

/**
 * @swagger
 * /v1/user/update/{id}:
 *   put:
 *     security:
 *       - BearerAuth: []
 *     description: Update a user by ID
 *     parameters:
 *       - name: id
 *         description: User ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description:Success
 */
router.put
        ("/update/:id", 
        [param("id", "ID é necessário").exists({ checkFalsy: true })],
        unsureAuthenticated.unsureAuthenticated, 
        userController.Update);

/**
 * @swagger
 * /v1/user/delete/{id}:
 *   delete:
 *     security:
 *       - BearerAuth: []
 *     description: Delete a user by ID
 *     parameters:
 *       - name: id
 *         description: User ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
    "/getAll", 
    unsureAuthenticated.unsureAuthenticated, 
    userController.getAll
);

router.get(
    "/verifyAdmin",
    unsureAdmin,
    userController.verifyAdmin
)

//Exporta o ROUTER
module.exports = router;
