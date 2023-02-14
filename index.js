const express = require("express")
const path = require('path')

const bodyPasrer = require('body-parser');

const adminRoutes = require('./routes/admin_route')
const homeRoutes = require('./routes/home_route')
const sequelize = require('./databaseConfig/config');
//const Course = require('./models/coursemodel')

const Course = require('./models/coursemodel')

const app = express();

//set the template
app.set('view engine', 'ejs')
app.set('views', 'views');
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyPasrer.urlencoded({ extended: false }));

//use the middlewhere
app.use(homeRoutes)
app.use('/courses', adminRoutes);

app.use((req, res) => {

    const viewsData = {

        pageTitle: 'Page is not access'
    };

    res.status(404).render('404', viewsData);
})


sequelize.authenticate().then(async () => {
    await sequelize.sync({ force: false })
    console.log('Connection are successfully created');

}).catch((error) => {

    console.log(error);
    console.log("Error in connection")
})

app.listen(8080, () => {

    console.log("Server is running")
})

