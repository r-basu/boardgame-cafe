const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameCategory extends Model { }

GameCategory.init({

}, {
    sequelize
});

module.exports = GameCategory