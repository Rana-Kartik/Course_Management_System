const {DataTypes} =require('sequelize')
const sequelize = require('../utils/db')

const course = sequelize.define('Course', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    coursename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseduration:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    coursefees:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = course;