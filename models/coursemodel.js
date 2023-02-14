const {DataTypes} =require('sequelize')
const sequelize = require('../databaseConfig/config')

const course = sequelize.define('Course', {

    // primaryKey: 'id', 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    coursename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseduration:{
        type: DataTypes.STRING,
        allowNull: false
    },
    coursefees:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    timestamps: false
})

module.exports = course;