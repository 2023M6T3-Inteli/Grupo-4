const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const applyController = require('../controllers/apply');

//Middlewares
const unsureAuthenticated = require('../middlewares/unsureAuthenticated');

/**
 * @swagger
 * /v1/apply/create:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     description: Create new application
 *     parameters:
 *       - name: why
 *         description: Reason for application
 *         in: body
 *         required: true
 *         type: string
 *       - name: projectId
 *         description: ID of the project
 *         in: body
 *         required: true
 *         type: string
 *       - name: offerId
 *         description: ID of the offer
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.post(
    "/create", 
    [body("why", "Porque é necessário").exists({ checkFalsy: true })], 
    [body("projectId", "ID do projeto é necessário").exists({ checkFalsy: true })], 
    [body("offerId", "ID da oferta é necessário").exists({ checkFalsy: true })], 
    unsureAuthenticated.unsureAuthenticated, 
    applyController.Create
);

/**
 * @swagger
 * /v1/apply/getApplyByProjectId/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get application by project ID
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
    "/getApplyByProjectId/:id",
    [param("id", "Id do projeto é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.GetApplyByProjectId
);

/**
 * @swagger
 * /v1/apply/getApplyByUserId/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get application by user ID
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
    "/getApplyByUserId/:id",
    [param("id", "Id do usuário é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.GetApplyByUserId
);

/**
 * @swagger
 * /v1/apply/getApplyByOfferId/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     description: Get application by offer ID
 *     parameters:
 *       - name: id
 *         description: Offer ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
    "/getApplyByOfferId/:id",
    [param("id", "Id da oferta é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.GetApplyByOfferId
);

router.get(
    "/getUserApplied/:id",
    [param("id", "Id da oferta é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.GetByOfferIdAndUserId
)

/**
 * @swagger
 * /v1/apply/updateStatus/{id}:
 *   put:
 *     security:
 *       - BearerAuth: []
 *     description: Update application status
 *     parameters:
 *       - name: id
 *         description: Offer ID
 *         in: path
 *         required: true
 *         type: string
 *       - name: status
 *         description: Status of the application
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *        description: Success
 */
router.put(
    "/updateStatus/:id",
    [param("id", "Id da oferta é necessário").exists({ checkFalsy: true })],
    [body("status", "Status é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.UpdateStatus
);

/**
 * @swagger
 * /v1/apply/delete/{id}:
 *   delete:
 *     security:
 *       - BearerAuth: []
 *     description: Delete application
 *     parameters:
 *       - name: id
 *         description: Offer ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.delete(
    "/delete/:id",
    [param("id", "Id da oferta é necessário").exists({ checkFalsy: true })],
    unsureAuthenticated.unsureAuthenticated,
    applyController.deleteApply
);


module.exports = router;
