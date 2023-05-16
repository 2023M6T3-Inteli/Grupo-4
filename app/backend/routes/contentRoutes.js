const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const { validateContent } = require('../middlewares/validateContent');

router.post('/content', validateContent, contentController.createContent);

module.exports = router;
