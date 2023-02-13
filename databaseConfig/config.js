const {Sequelize}  = require("sequelize");

const sequelize = new Sequelize("ranaka","ranaka","eKc3b9iA4Iid0WiA7GxxigYK",{
    host: '15.206.7.200',
    port: 3310,
    dialect: 'mysql'
  })

  module.exports = sequelize;
