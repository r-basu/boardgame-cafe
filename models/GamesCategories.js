const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GamesCategories extends Model { }

GamesCategories.init({

}, {
    sequelize
});

module.exports = GamesCategories