const Users = require("./Users");
const Games = require("./Games");
const Reviews = require("./Reviews");
const Shops = require("./Shops");
const RecentGames = require("./RecentGames");
const GamesCategories = require("./GamesCategories");
const Categories = require("./Categories")

Users.hasMany(Games);
Games.belongsTo(Users);

Users.hasMany(Reviews);
Reviews.belongsTo(Users, {
    onDelete: 'CASCADE'
});

Users.hasMany(RecentGames);
RecentGames.belongsTo(Users);

Games.hasMany(RecentGames);
RecentGames.belongsTo(Games);

Games.hasMany(Reviews);
Reviews.belongsTo(Games, {
    onDelete: 'CASCADE'
})

Shops.hasMany(Games);
Games.belongsTo(Shops);

// Games.belongsToMany(Categories);

// Categories.belongsToMany(Games);
// GamesCategories.belongsTo(Games);

// GamesCategories.belongsTo(Categories);

module.exports = {
    Users,
    Games,
    Reviews,
    Shops,
    Categories,
    GamesCategories,
    RecentGames
}