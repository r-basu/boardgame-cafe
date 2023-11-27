const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Categories extends Model { }

Categories.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize
});

module.exports = Categories