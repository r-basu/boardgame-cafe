const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecentGames extends Model { }

RecentGames.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull:true,
        references: {
            model: Users,
            key: `id`
        }
    },
    gameId: {
        type: DataTypes.INTEGER,
        allowNull:true,
        references: {
            model: Games,
            key: `id`
        }
    },
}, {
    sequelize
});

module.exports = RecentGames