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
  contentController.Create
);

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
router.get(
  "/getContent/:id",
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
  // unsureAuthenticated.unsureAuthenticated,
  contentController.GetContentByID
);

/**
 * @swagger
 * /v1/content/getContent:
 *   get:
 *     description: Get all content
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/getContent",
  // unsureAuthenticated.unsureAuthenticated,
  contentController.GetAllContent
);
/**
 * @swagger
 * /v1/project/update/{id}:
 *   put:
 *     description: Update a content by ID
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
router.put(
  "/update/:id",
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  contentController.Update
);

/**
 * @swagger
 * /v1/project/delete/{id}:
 *   delete:
 *     description: Delete a content by ID
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
router.delete(
  "/delete/:id",
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  contentController.Delete
);

router.get(
  "/report/:id", 
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  contentController.Report
)

module.exports = router;
