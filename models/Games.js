const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model { }

Games.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: true
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
    }
}, {
    sequelize
});

module.exports = Games