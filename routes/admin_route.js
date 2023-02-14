const express = require('express')
const router = express.Router();
const {getAddCoursePage, postAddCoursePage, getEditCoursePage, postEditCoursePage,postDeleteCoursePage} = require('../controller/coursecontroller')

// Set the routes and call the controller method
router.get('/add', getAddCoursePage );

router.post('/add', postAddCoursePage);
router.get('/edit/:courseId',getEditCoursePage)
router.post('/edit/:courseId',postEditCoursePage)
router.get('/delete/:courseId',postDeleteCoursePage)


module.exports = router;