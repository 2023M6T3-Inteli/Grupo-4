// projectRoutes.js
const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const projectController = require('../controllers/project');

//Middlewares
const unsureAuthenticated = require('../middlewares/unsureAuthenticated');

/**
 * @swagger
 * /v1/project/create:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     description: Create a new project
 *     parameters:
 *       - name: title
 *         description: Project title
 *         in: body
 *         required: true
 *         type: string
 *       - name: description
 *         description: Project description
 *         in: body
 *         required: true
 *         type: string
 *       - name: projectType
 *         description: Type of the project
 *         in: body
 *         required: true
 *         type: string
 *       - name: startDate
 *         description: Start date of the project
 *         in: body
 *         required: true
 *         type: string
 *       - name: endDate
 *         description: End date of the project
 *         in: body
 *         required: true
 *         type: string
 *       - name: deadline
 *         description: Deadline of the project
 *         in: body
 *         required: true
 *         type: string
 *       - name: deliveryTime
 *         description: Delivery time of the project
 *         in: body
 *         required: true
 *         type: string
 *       - name: ownerId
 *         description: Owner ID of the project
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.post(
  "/create", 
  [body("title", "Titulo é necessária").exists({ checkFalsy: true })], 
  [body("description", "Descrição é necessária").exists({ checkFalsy: true })],
  [body("projectType", "Tipo do projeto é necessária").exists({ checkFalsy: true })], 
  [body("startDate", "Start é necessária").exists({ checkFalsy: true })], 
  [body("endDate", "End é necessária").exists({ checkFalsy: true })], 
  [body("deadline", "DeadLine é necessária").exists({ checkFalsy: true })], 
  [body("ownerId", "Id do Owner é necessário").exists({ checkFalsy: true })],
  [body("tags", "Tags é necessário").exists({ checkFalsy: true })],
  [body("roles", "Vagas é necessário").exists({ checkFalsy: true })],
  projectController.Create
);

/**
 * @swagger
 * /v1/project/getProject/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get a project by ID
 *     parameters:
 *       - name: id
 *         description: Project ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/get/:id", 
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })], 
  projectController.GetProjectByID
);

/**
 * @swagger
 * /v1/project/update/{id}:
 *   put:
 *     security:
 *       - BearerAuth: []
 *     description: Update a project by ID
 *     parameters:
 *       - name: id
 *         description: Project ID
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
  // unsureAuthenticated.unsureAuthenticated,
  projectController.Update
);

/**
 * @swagger
 * /v1/project/{id}:
 *   delete:
 *     security:
 *       - BearerAuth: []
 *     description: Delete a project by ID
 *     parameters:
 *       - name: id
 *         description: Project ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.delete(
  "/:id",
  [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
  // unsureAuthenticated.unsureAuthenticated,
  projectController.Delete
);

/**
 * @swagger
 * /v1/project/getAll:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get all projects
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/getAll",
  // unsureAuthenticated.unsureAuthenticated,
  projectController.GetAll
);

module.exports = router;
