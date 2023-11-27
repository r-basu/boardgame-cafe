const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Users = require("./Users");
const Games = require("./Games");

class Reviews extends Model { }

Reviews.init({
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateSubmitted: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize
});

module.exports = Reviews