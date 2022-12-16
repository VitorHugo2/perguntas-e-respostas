const Sequelize = require('sequelize')

const connection = new Sequelize('perguntas','root','konaly',{
    host:'localhost',
    dialect:'mysql',
})

module.exports = connection