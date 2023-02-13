const {DataTypes} =require('sequelize')
const sequelize = require('../databaseConfig/config')

const course = sequelize.define('Course', {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        defaultValue : 1
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
    },
},{
    timestamps: false
})

module.exports = course;