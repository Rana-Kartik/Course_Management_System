//Set the homepage of course
const express = require('express')
const router = express.Router();
const { getHomePage } = require('../controller/homecontroller');
router.get('/', getHomePage)
module.exports = router;
