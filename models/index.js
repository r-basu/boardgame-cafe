const User = require("./User");
const Game = require("./Game");
const Review = require("./Review");
const Shop = require("./Shop");
const Category = require("./Category")

User.hasMany(Game);
Game.belongsTo(User,);

User.hasMany(Review, {
    onDelete: 'CASCADE',
});
Review.belongsTo(User);

Game.hasMany(Review, {
    onDelete: 'CASCADE'
});
Review.belongsTo(Game)

Shop.hasMany(Game);
Game.belongsTo(Shop);

Game.belongsToMany(Category, {
    through: `GameCategory`,
});

Category.belongsToMany(Game, {
    through: `GameCategory`,
});

module.exports = {
    User,
    Game,
    Review,
    Shop,
    Category,
};