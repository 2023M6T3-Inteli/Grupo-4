// projectRoutes.js
const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const projectController = require('../controllers/project');

/**
 * @swagger
 * /v1/project/create:
 *   post:
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
router.post
    ("/create", 
    [body("title", "Titulo é necessária").exists({ checkFalsy: true })], 
    [body("description", "Descrição é necessária").exists({ checkFalsy: true })],
    [body("projectType", "Tipo do projeto é necessária").exists({ checkFalsy: true })], 
    [body("startDate", "Area é necessária").exists({ checkFalsy: true })], 
    [body("endDate", "Area é necessária").exists({ checkFalsy: true })], 
    [body("deadline", "Area é necessária").exists({ checkFalsy: true })], 
    [body("deliveryTime", "Area é necessária").exists({ checkFalsy: true })], 
    [body("ownerId", "Id do Owner é necessária=o").exists({ checkFalsy: true })], 
      projectController.Create);

/**
 * @swagger
 * /v1/project/getProject/{id}:
 *   get:
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
router.get
    ("/getProject/:id", 
    [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })], 
    projectController.GetProjectByID);

module.exports = router;
