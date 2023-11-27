const Users = require("./Users");
const Games = require("./Games");
const Reviews = require("./Reviews");
const Shops = require("./Shops");
const RecentGames = require("./RecentGames");
const Categories = require("./Categories")

Users.hasMany(Games);
Games.belongsTo(Users, {
    foreignKey: `userId`
});

Users.hasMany(Reviews, {
    onDelete: 'CASCADE',
});
Reviews.belongsTo(Users, {
    foreignKey: `userId`
});

Games.hasMany(Reviews, {
    onDelete: 'CASCADE'
});
Reviews.belongsTo(Games, {
    foreignKey: `gameId`
})

Shops.hasMany(Games);
Games.belongsTo(Shops, {
    foreignKey: `shopId`
});

Games.belongsToMany(Categories, {
    through: `GamesCategories`
});

Categories.belongsToMany(Games, {
    through: `GamesCategories`
});

// Users.hasMany(RecentGames);
// RecentGames.belongsTo(Users);

// Games.hasMany(RecentGames);
// RecentGames.belongsTo(Games);

module.exports = {
    Users,
    Games,
    Reviews,
    Shops,
    Categories,
    RecentGames
};