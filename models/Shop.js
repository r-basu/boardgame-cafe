const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shop extends Model { }

Shop.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize
});

module.exports = Shop