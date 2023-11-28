const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model { }

Game.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    minPlayers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxPlayers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minAge: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minTime: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxTime: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize
});

module.exports = Game