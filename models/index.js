const User = require("./User");
const Game = require("./Game");
const Review = require("./Review");
const Shop = require("./Shop");
const RecentGame = require("./RecentGame");
const GameCategory = require("./GameCategory");
const Category = require("./Category")

User.belongsTo(Game, {
    onDelete: 'CASCADE'
});
User.hasMany(RecentGame)
RecentGame.belongsTo(Game)
Game.hasMany(User)
Game.hasMany(Review)
Game.belongsTo(Shop)
Game.belongsToMany(Category)
Category.belongsToMany(Game)
GameCategory.belongsTo(Game)
GameCategory.belongsTo(Category)
Review.belongsTo(User, {
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Game,
    Review,
    Shop,
    Category,
    GameCategory,
    RecentGame
}