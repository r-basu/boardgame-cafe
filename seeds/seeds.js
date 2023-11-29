//Import the models
const {Game, Category, Shop, User, Review} = require(`../models`);

//Require sequelize through the connection file
const sequelize = require(`../config/connection`);

// Add Data
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
    {
        name: `Deduction`
    }
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
    },
];

const reviewData = [
    {
        rating: 3,
        text: `Really good game!`,
        UserId: 1,
        GameId: 1,
    },
    {
        rating: 2,
        text: `Boooring`,
        UserId: 1,
        GameId: 2,
    },
    {
        rating: 1,
        text: `Worst game ever!`,
        UserId: 3,
        GameId: 3,
    },
    {
        rating: 5,
        text: `Instant favorite!`,
        UserId: 4,
        GameId: 3,
    },
];

//Seeds function
const seedMe = async () => {
	await sequelize.sync({force: true});
    const dbShops = await Shop.bulkCreate(shopData);
    const dbGames = await Game.bulkCreate(gameData);
    const dbCategories = await Category.bulkCreate(categoryData);
    const dbUsers = await User.bulkCreate(userData);
    await Review.bulkCreate(reviewData);
    await dbUsers[0].addGames([1, 2]);
    await dbGames[0].addCategories([8, 12, 14, 15]);
    await dbGames[0].addShops([1, 2, 3])
	console.log(`Seeding completed :)`);
	process.exit(0)
    
};

//call the function
seedMe();