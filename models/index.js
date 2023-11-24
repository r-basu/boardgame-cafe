const User = require("./User");
const Game = require("./Game");

User.belongsTo(Game, {
    onDelete: 'CASCADE'
});
Game.hasMany(User)

module.exports = {
    User,
    Game
}