const express = require('express');
const { homepage, getQuestionsByYear } = require('../controllers/questions.controler');
const router = express.Router();



router.get('/year', getQuestionsByYear);





module.exports = router;
