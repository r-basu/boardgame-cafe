//Import the models
const Games = require(`../models/Games`);
const Categories = require(`../models/Categories`);
const Shops = require(`../models/Shops`);
const Users = require(`../models/Users`);
const Reviews = require(`../models/Reviews`);

//Require sequelize through the connection file
const sequelize = require(`../config/connection`);

// Add Data
const categoryData = [
    {
        name: `Abstract Strategy`
    },
    {
        name: `Action`
    },
    {
        name: `Adventure`
    },
    {
        name: `Age of Reason`
    },
    {
        name: `Educational`
    },
    {
        name: `Puzzle`
    },
    {
        name: `Ancient`
    },
    {
        name: `Fighting`
    },
    {
        name: `Horror`
    },
    {
        name: `Party Game`
    },
    {
        name: `Bluffing`
    },
    {
        name: `Card Game`
    },
    {
        name: `City Building`
    },
    {
        name: `Animals`
    },
    {
        name: `Dice`
    },
    {
        name: `Economic`
    },
    {
        name: `Movies`
    },
    {
        name: `Mythology`
    },
];

const gameData = [
    {
        title:`Here to Slay`,
        minPlayers: 2,
        maxPlayers: 6,
        minAge: 10,
        minTime: 30,
        maxTime: 60,
        isAvailable: true,
        description: `Here to Slay is a competitive role-playing fantasy strategy card game that's all about assembling a party of Heroes and slaying monsters (and sometimes sabotaging your friends too) from the creators of Unstable Unicorns.`,
        userId: null,
    },
    {
        title: `Secret Hitler`,
        minPlayers: 5,
        maxPlayers: 10,
        minAge: 13,
        minTime: 25,
        maxTime: 45,
        isAvailable: true,
        description: `Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930s Germany. Each player is randomly and secretly assigned to be a liberal or a fascist, and one player is Secret Hitler.`,
        userId: null,
    },
    {
        title: `Battleship`,
        minPlayers: 2,
        maxPlayers: 2,
        minAge: 8,
        minTime: 25,
        maxTime: 60,
        isAvailable: true,
        description: `Each player deploys his ships (of lengths varying from 2 to 5 squares) secretly on a square grid. Then each player shoots at the other's grid by calling a location.`,
        userId: null,
    },
    {
        title: `Risk`,
        minPlayers: 2,
        maxPlayers: 6,
        minAge: 10,
        minTime: 60,
        maxTime: 80,
        isAvailable: true,
        description: `Possibly the most popular, mass market war game. The goal is conquest of the world.`,
        userId: null,
    },
    {
        title: `Dominos`,
        minPlayers: 2,
        maxPlayers: 10,
        minAge: 5,
        minTime: 15,
        maxTime: 30,
        isAvailable: true,
        description: `The timeless family classic of placing matching tiles`,
        userId: null,
    },
    {
        title: `Coup`,
        minPlayers: 2,
        maxPlayers: 6,
        minAge: 13,
        minTime: 5,
        maxTime: 20,
        isAvailable: true,
        description: `Bluff (and call bluffs!) to victory in this card game with no third chances. `,
        userId: null,
    },
    {
        title: `Codenames`,
        minPlayers: 2,
        maxPlayers: 8,
        minAge: 14,
        minTime: 15,
        maxTime: 30,
        isAvailable: true,
        description: `Give your team clever one-word clues to help them spot their agents in the field. `,
        userId: null,
    },
    {
        title: `Monopoly`,
        minPlayers: 2,
        maxPlayers: 8,
        minAge: 8,
        minTime: 60,
        maxTime: 240,
        isAvailable: true,
        description: `In this competitive real estate market, there's only one possible outcome: Monopoly!`,
        userId: null,
    },
    {
        title: `Telestrations`,
        minPlayers: 4,
        maxPlayers: 8,
        minAge: 12,
        minTime: 30,
        maxTime: 60,
        isAvailable: true,
        description: `Guess what they drew, then draw what they guessed, and see how funny the changes get.`,
        userId: null,
    },
    {
        title: `Uno`,
        minPlayers: 2,
        maxPlayers: 10,
        minAge: 6,
        minTime: 10,
        maxTime: 30,
        isAvailable: true,
        description: `Get rid of your cards first, but don't forget to say "UNO!"`,
        userId: null,
    },
    {
        title: `Jenga`,
        minPlayers: 1,
        maxPlayers: 8,
        minAge: 6,
        minTime: 5,
        maxTime: 20,
        isAvailable: true,
        description: `How high can you go before your tower comes crashing down!?`,
        userId: null,
    },
    {
        title: `Rummikub`,
        minPlayers: 2,
        maxPlayers: 4,
        minAge: 8,
        minTime: 25,
        maxTime: 30,
        isAvailable: true,
        description: `Race to play all your tiles by forming runs or sets, even if they're not your own!`,
        userId: null,
    },
    {
        title: `Chess`,
        minPlayers: 2,
        maxPlayers: 2,
        minAge: 6,
        minTime: 50,
        maxTime: 120,
        isAvailable: true,
        description: `Checkmate your opponent in this timeless abstract.`,
        userId: null,
    },
    {
        title: `Checkers`,
        minPlayers: 2,
        maxPlayers: 2,
        minAge: 6,
        minTime: 30,
        maxTime: 60,
        isAvailable: true,
        description: `Players move pieces diagonally to "jump" opponent pieces 'til one side is eliminated.`,
        userId: null,
    },
    {
        title: `Connect Four`,
        minPlayers: 2,
        maxPlayers: 2,
        minAge: 6,
        minTime: 10,
        maxTime: 20,
        isAvailable: true,
        description: `Take turns dropping pieces to be the first player to connect four in a row!`,
        userId: null,
    },
    {
        title: `Clue`,
        minPlayers: 2,
        maxPlayers: 6,
        minAge: 8,
        minTime: 30,
        maxTime: 50,
        isAvailable: true,
        description: `Catch the culprit of a crime by identifying who did it, with what, and where.`,
        userId: null,
    },
    {
        title: `Pictionary`,
        minPlayers: 3,
        maxPlayers: 16,
        minAge: 12,
        minTime: 60,
        maxTime: 90,
        isAvailable: true,
        description: `Guess what you team is drawing so you can Win, Lose, or Draw.`,
        userId: null,
    },
    {
        title: `Werewolf`,
        minPlayers: 8,
        maxPlayers: 24,
        minAge: 8,
        minTime: 40,
        maxTime: 90,
        isAvailable: true,
        description: `Suspicious townsfolk try to identify the murderous outsiders hiding in their group.`,
        userId: null,
    },
    {
        title: `Exploding Kittens`,
        minPlayers: 2,
        maxPlayers: 5,
        minAge: 7,
        minTime: 10,
        maxTime: 15,
        isAvailable: true,
        description: `Ask for favors, attack friends, see the future- whatever it takes to avoid exploding!`,
        userId: null,
    },
    {
        title: `Guess Who?`,
        minPlayers: 2,
        maxPlayers: 2,
        minAge: 6,
        minTime: 10,
        maxTime: 20,
        isAvailable: true,
        description: `Find your opponent's character by narrowing down what his or her features are.`,
        userId: null,
    },
    {
        title: `Labyrinth`,
        minPlayers: 2,
        maxPlayers: 4,
        minAge: 8,
        minTime: 10,
        maxTime: 25,
        isAvailable: true,
        description: `Hunt for treasure in an ever-changing maze. Will you open a path? Or block a rival?`,
        userId: null,
    },
    {
        title: `5 Second Rule`,
        minPlayers: 3,
        maxPlayers: 6,
        minAge: 10,
        minTime: 20,
        maxTime: 30,
        isAvailable: true,
        description: `Think quickly, while under the pressure of your opponents staring at you waiting!`,
        userId: null,
    },
    {
        title: `Acquire`,
        minPlayers: 2,
        maxPlayers: 6,
        minAge: 12,
        minTime: 90,
        maxTime: 120,
        isAvailable: true,
        description: `Invest, divest, and stage hostile takeovers in this classic real estate game. `,
        userId: null,
    },
    {
        title: `7 Wonders`,
        minPlayers: 2,
        maxPlayers: 7,
        minAge: 10,
        minTime: 30,
        maxTime: 60,
        isAvailable: true,
        description: `Draft cards to develop your ancient civilization and build its Wonder of the World. `,
        userId: null,
    },
    {
        title: `Flash Point: Fire Rescue`,
        minPlayers: 2,
        maxPlayers: 6,
        minAge: 10,
        minTime: 45,
        maxTime: 60,
        isAvailable: true,
        description: `Smoke! Fire! Work as a team to save as many as you can from a blazing inferno.`,
        userId: null,
    },
    {
        title: `Zombie Dice`,
        minPlayers: 2,
        maxPlayers: 99,
        minAge: 10,
        minTime: 10,
        maxTime: 20,
        isAvailable: true,
        description: `Eat as many tasty brains as you dare, without getting shotgunned.`,
        userId: null,
    },
    {
        title: `Yahtzee`,
        minPlayers: 2,
        maxPlayers: 10,
        minAge: 6,
        minTime: 20,
        maxTime: 45,
        isAvailable: true,
        description: `Yes the dice are fickle, but score your combos strategically to max out on points.`,
        userId: null,
    },
    {
        title: `Drunk Stoned or Stupid: A Party Game (2014)`,
        minPlayers: 4,
        maxPlayers: 10,
        minAge: 17,
        minTime: 15,
        maxTime: 30,
        isAvailable: true,
        description: `Name and shame your friends in this game of embarrassing accusations`,
        userId: null,
    },
    {
        title: `Vikings`,
        minPlayers: 2,
        maxPlayers: 4,
        minAge: 10,
        minTime: 45,
        maxTime: 90,
        isAvailable: true,
        description: `Different-colored Vikings have different responsibilities. Which do you need most?`,
        userId: null,
    },
    {
        title: `Ticket to Ride`,
        minPlayers: 2,
        maxPlayers: 5,
        minAge: 8,
        minTime: 30,
        maxTime: 60,
        isAvailable: true,
        description: `Build your railroad across North America to connect cities and complete tickets.`,
        userId: null,
    },
    {
        title: `Sushi Roll`,
        minPlayers: 2,
        maxPlayers: 5,
        minAge: 8,
        minTime: 10,
        maxTime: 20,
        isAvailable: true,
        description: `Draft the most valuable collection of sushi dice as the conveyor belt rolls by.`,
        userId: null,
    },
];

const shopData = [
    {
        name: `The Adventures Guild`
    },
    {
        name: `Games On Tap`
    },
    {
        name: `The Round Table`
    },
];

const userData = [
    {
        username: `David Rodriguez`,
        password: `Password#1`,
        currentGame: null
    },
    {
        username: `Maria Afzal`,
        password: `Password#2`,
        currentGame: null
    },
    {
        username: `Rahul Basu`,
        password: `Password#3`,
        currentGame: null
    },
    {
        username: `Manjot Padda`,
        password: `Password#4`,
        currentGame: null
    },
];

const reviewData = [
    {
        rating: 3,
        review: `Really good game!`,
    },
    {
        rating: 2,
        review: `Boooring`,
    },
    {
        rating: 1,
        review: `Worst game ever!`,
    },
    {
        rating: 5,
        review: `Instant favorite!`
    },
];

//Seeds function
const seedMe = async () => {
	await sequelize.sync({force: true});
	await Games.bulkCreate(gameData);
    await Categories.bulkCreate(categoryData);
    await Shops.bulkCreate(shopData);
    await Users.bulkCreate(userData);

	console.log(`Seeding completed :)`);
	process.exit(0)
};

//call the function
seedMe();