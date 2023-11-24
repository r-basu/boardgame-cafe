const User = require("./User");
const Game = require("./Game");
const Review = require("./Review")

User.belongsTo(Game, {
    onDelete: 'CASCADE'
});
Game.hasMany(User)
Game.hasMany(Review)
Review.belongsTo(User, {
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Game,
    Review
}