const User = require("./User");
const Game = require("./Game");
const Review = require("./Review")
const Shop = require("./Shop");

User.belongsTo(Game, {
    onDelete: 'CASCADE'
});
Game.hasMany(User)
Game.hasMany(Review)
Game.belongsTo(Shop)
Review.belongsTo(User, {
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Game,
    Review,
    Shop
}