const Sequelize = require('sequelize')
const sequelize = require('./app')

const car = sequelize.define('Car',{
    id:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    created: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
    }
})

car.sync()