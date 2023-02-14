const { getAllCourses, Course } = require("../models/coursemodel");
const Courses = require("../models/coursemodel");

//This method showing the dashboard with data
exports.getHomePage = (req, res) => {

    Courses.findAll()
        .then(courses => {
            const viewsData = {
                courses,
                pageTitle: 'Home page - CMS'
            };
            res.render('dashboard', viewsData)

        }).catch((error) => {

            console.log(error)
        })

} 