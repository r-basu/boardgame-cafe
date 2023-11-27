const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shops extends Model { }

Shops.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize
});

module.exports = Shops