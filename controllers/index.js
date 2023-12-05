const express = require('express');
const router = express.Router();
const { User, Game, Review, Category, Shop } = require("../models")
const Roll = require('roll')
roll = new Roll();

const gameRoutes = require("./gameRoutes");
router.use('/api/games', gameRoutes)


const userRoutes = require("./userRoutes")
router.use('/api/users', userRoutes)

const reviewRoutes = require("./reviewRoutes")
router.use('/api/reviews', reviewRoutes)

router.get("/", async (req, res) => {
  // try{
    const dbShopData = await Shop.findAll();
    const shops = dbShopData.map((shop) => 
      shop.get({ plain: true})
    )
    const isLoggedIn = req.session.user !== undefined;
    res.render("home", {isLoggedIn, shops:shops});
    console.log("Homepage")
  // } catch (err){
  //   console.log(err);
  //   res.status(500).json(err);
  // }
})

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/profile")
    console.log("profile")
  } else {
    res.render("login")
    console.log("Login")
  }
})

// Render games page
router.get("/boardgames", async (req, res) => {
  try {
    // get boardgames & categories data, delete all the extra sequelize info and put it as a single object
    const boardgamesData = await Game.findAll();
    const categoriesData = await Category.findAll();
    const boardgames = boardgamesData.map((boardgames) => boardgames.get({ plain: true }))
    const categories = categoriesData.map((categories) => categories.get({ plain: true }))

    // add the ages
    const ages = [5, 6, 7, 8, 9, 10, 11, 12, 14, 17];
    let minAges = [];
    for (let i = 0; i < ages.length; i++) {
      minAges.push({
        index: i + 1,
        age: ages[i]
      })
    };

    // add the players
    const players = [];
    const minPlayers = 1;
    let maxPlayers = 2;
    for (let i = 0; i < boardgames.length; i++) {
      // get the max number of players that any boardgame has
      if (boardgames[i].maxPlayers > maxPlayers) {
        maxPlayers = boardgames[i].maxPlayers
      }
    };
    for (let i = 1; i <= maxPlayers; i++) {
      players.push({
        index: i,
        player: i
      })
      console.log(players);
    }

    // add the game duration
    const times = [5, 10, 15, 20, 30, 60, 90, 120, 150, 180];
    let gameDuration = [];
    for (let i = 0; i < times.length; i++) {
      gameDuration.push({
        index: i + 1,
        time: times[i]
      })
    };

    // get the random id 
    let randomRoll = roll.roll('d31')
    console.log(randomRoll.result)
    randomGameId = randomRoll.result

    const gamesPageData = {
      boardgames: boardgames,
      categories: categories,
      minAges: minAges,
      players: players,
      duration: gameDuration,
      randomGameId: randomGameId
    };

    res.render("boardgames", gamesPageData)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

//Profile Page
router.get("/profile", (req, res) => {
  try {
    User.findByPk(req.session.user.id, {
      include: [Game, Review]
    }).then(dbUser => {
      if (!dbUser) {
        res.status(404).json({ msg: "no such user!" })
      } else {
        const userData = {
          id: dbUser.id,
          username: dbUser.username,
          currentGame: dbUser.currentGame,
          currentGameTitle: dbUser.currentGameTitle,
          playedGames: dbUser.Games,
          reviews: dbUser.Reviews
        }
        res.render("profile", userData)
        console.log("profile")
      }
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render the individual boardgame page
router.get("/game/:id", async (req, res) => {
  try {
    // get the respective boardgame data, delete all the extra sequelize info and put it as a single object
    const boardgameData = await Game.findByPk(req.params.id, {
      include: [Review, Category]
    });
    if (!boardgameData) {
      res.status(404).json({ message: 'No boardgame with this id!' });
      return;
    };
    const boardgame = boardgameData.get({ plain: true })
    console.log(boardgame);
    res.render("singleboardgame", boardgame)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

router.get("/reviews", (req, res) => {
  res.render("reviews")
  console.log("reviews")
});


module.exports = router;