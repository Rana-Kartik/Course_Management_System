const path = require('path')
const express = require('express')
const router = express.Router();
const { getHomePage } = require('../controller/homecontroller');


router.get('/', getHomePage)


module.exports = router;
