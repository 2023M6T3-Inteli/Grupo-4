const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const contentController = require('../controllers/content');

//Middlewares
const unsureAuthenticated = require('../middlewares/unsureAuthenticated');
const unsureAdmin = require('../middlewares/unsureAdmin');

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
 *     security:
 *       - BearerAuth: []
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
 *     security:
 *       - BearerAuth: []
 *     description: Get all content
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/getContent",
  unsureAuthenticated.unsureAuthenticated,
  contentController.GetAllContent
);
/**
 * @swagger
 * /v1/project/update/{id}:
 *   put:
 *     security:
 *       - BearerAuth: []
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
 *     security:
 *       - BearerAuth: []
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

/**
 * @swagger
 * /v1/content/report/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Report content
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
  "/report/:id", 
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  contentController.Report
);

/**
 * @swagger
 * /v1/content/rate:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     description: Rate content
 *     parameters:
 *       - name: contentId
 *         description: Content ID
 *         in: body
 *         required: true
 *         type: string
 *       - name: rate
 *         description: Rating
 *         in: body
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.post(
  "/rate",
  [body("contentId", "Id do projeto é necessário").exists({ checkFalsy: true })],
  [body("rate", "Nota é necessária").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  contentController.rateContent
);

/**
 * @swagger
 * /v1/content/getRating/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get content rating
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
  "/getRating/:id",
  [param("id", "Id do Conteúdo é necessário").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  contentController.getRating
);

router.get(
  "/getRecommendation/:tag",
  [param("tag", "Tag do usuário é necessário").exists({ checkFalsy: true })],
  // unsureAuthenticated.unsureAuthenticated,
  contentController.getRecommendation
);

router.get(
  "/getReported",
  unsureAuthenticated.unsureAuthenticated,
  unsureAdmin.unsureAdmin,
  contentController.getAllReportedContent
)

router.get(
  "/closeReport/:id",
  [param("id", "Id do Conteúdo é necessário").exists({ checkFalsy: true })],
  unsureAuthenticated.unsureAuthenticated,
  unsureAdmin.unsureAdmin,
  contentController.closeReport
)


module.exports = router;
