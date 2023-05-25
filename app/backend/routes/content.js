const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const contentController = require('../controllers/content');

//Middlewares
const unsureAuthenticated = require('../middlewares/unsureAuthenticated');

/**
 * @swagger
 * /v1/content/create:
 *   post:
 *     description: Create new content
 *     parameters:
 *       - name: title
 *         description: Content title
 *         in: body
 *         required: true
 *         type: string
 *       - name: description
 *         description: Content description
 *         in: body
 *         required: true
 *         type: string
 *       - name: tags
 *         description: Content tags
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.post
    ("/create", 
    [body("title", "Titulo é necessário").exists({ checkFalsy: true })], 
    [body("description", "Descrição é necessária").exists({ checkFalsy: true })], 
    [body("tags", "Tags são necessárias").exists({ checkFalsy: true })], 
    unsureAuthenticated.unsureAuthenticated, 
    contentController.Create);

/**
 * @swagger
 * /v1/content/getContent/{id}:
 *   get:
 *     description: Get content by ID
 *     parameters:
 *       - name: id
 *         description: Content ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get
    ("/getContent/:id", 
    [param("id", "Id do conteudo é necessário").exists({ checkFalsy: true })],
     contentController.GetContentByID);

/**
 * @swagger
 * /v1/content/getContent:
 *   get:
 *     description: Get all content
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getContent", contentController.GetAllContent);

module.exports = router;
