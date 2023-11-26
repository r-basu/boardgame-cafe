const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecentGames extends Model { }

RecentGames.init({

}, {
    sequelize
});

module.exports = RecentGames