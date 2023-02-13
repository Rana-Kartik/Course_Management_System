const Course = require("../models/coursemodel");
const Courses  = require("../models/coursemodel");


exports.getAddCoursePage = (req,res) => {

        const viewsData = {
            pageTitle:  'Add Course',
            edit: false
        };
    res.render('CourseAdding',viewsData)
    
    }

exports.postAddCoursePage = (req,res) => {
    console.log(req.body)
    const course = {
        coursename: req.body.coursename,
        courseduration: req.body.courseduration,
        coursefees: req.body.coursefees
    }
  console.log(course)
    const courseObj = Course.build(course);
    courseObj.save().then(() => {
        console.log('Course added successfully')
    }).catch((error) => {
         console.log(error)
    })

}

exports.getEditCoursePage = (req,res) => {
    const courseId = req.params.courseId;

    Courses.findByPk(courseId)
    .then((Course) => {
        const viewsData = {
        edit: true,
        Course,
        pageTitle:  'Edit Course'
    }
    res.render('CourseEditing',viewsData)
 }).catch((error) => {
    console.log(error)
 })


}

exports.postEditCoursePage = (req,res) => {

    const courseId = req.params.courseId;
    const course = {

        coursename: req.body.coursename,
        courseduration: req.body.courseduration,
        coursefees: req.body.coursefees
    }

    Courses.update(course, {where: {id: courseId}}).then(() => {
        res.redirect('/')
    }).catch((error) => {
        console.log(error)
     })

}

exports.postDeleteCoursePage = (req,res) => {
    const courseId = req.params.courseId;
        console.log(courseId)
        Courses.findByPk(courseId)
        .then((Course)=> {
            return Course.destroy();

        })
        .then(() => {
            res.redirect('/')
        }).catch((error) => {
            console.log(error)
         })

}