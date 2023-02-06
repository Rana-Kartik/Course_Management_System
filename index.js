const express = require("express")
const path = require('path')
//const fs = require('fs')

const bodyPasrer = require('body-parser');

const adminRoutes = require('./routes/admin')
const homeRoutes = require('./routes/home')
const sequelize = require('./utils/db');
//const Course = require('./models/coursemodel')
const { Sequelize } = require("sequelize");
const Course = require('./models/coursemodel')

const app = express();

app.set('view engine','ejs')
app.set('views','views');
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyPasrer.urlencoded( { extended: false} ));


app.use(homeRoutes)
app.use('/courses',adminRoutes);

app.use((req,res) => {

    const viewsData = {

        pageTitle: 'page not found'
    };

    res.status(404).render('404',viewsData);
})

sequelize.authenticate().then(() => {

    console.log('Connection established successfully');

}).catch ((error) => {

    console.log(error);
    console.log("Error in connection")
})


//const course = Course.build(sampleCourse)
// console.log(course.coursename);

app.listen(8080,() =>{

    console.log("Server is running")
})

