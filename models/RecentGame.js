const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecentGame extends Model { }

RecentGame.init({

}, {
    sequelize
});

module.exports = RecentGame