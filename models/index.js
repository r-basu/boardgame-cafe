const Users = require("./Users");
const Games = require("./Games");
const Reviews = require("./Reviews");
const Shops = require("./Shops");
const Categories = require("./Categories")

Users.hasMany(Games);
Games.belongsTo(Users,);

Users.hasMany(Reviews, {
    onDelete: 'CASCADE',
});
Reviews.belongsTo(Users);

Games.hasMany(Reviews, {
    onDelete: 'CASCADE'
});
Reviews.belongsTo(Games)

Shops.hasMany(Games);
Games.belongsTo(Shops);

Games.belongsToMany(Categories, {
    through: `GamesCategories`,
});

Categories.belongsToMany(Games, {
    through: `GamesCategories`,
});

module.exports = {
    Users,
    Games,
    Reviews,
    Shops,
    Categories,

};