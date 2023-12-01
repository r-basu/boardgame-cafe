const express = require('express');
const router = express.Router();
const { User, Game, Review, Category } = require("../models")


const gameRoutes = require("./gameRoutes");
router.use('/api/games', gameRoutes)


const userRoutes = require("./userRoutes")
router.use('/api/users', userRoutes)

const reviewRoutes = require("./reviewRoutes")
router.use('/api/reviews', reviewRoutes)

router.get("/", (req, res) => {
  res.render("home")
  console.log("Homepage")
  // res.status(200).json("Youre on homepage")
})

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/profile")
    console.log("profile")
    // res.status(200).json("Youre on profile")
  } else {
    res.render("login")
    console.log("Login")
    // res.status(200).json("Youre on login page")
  }
})

// Render games page
router.get("/boardgames", async (req, res) => {
  try{
    // get boardgames & categories data, delete all the extra sequelize info and put it as a single object
    const boardgamesData = await Game.findAll();
    const categoriesData = await Category.findAll();
    const boardgames = boardgamesData.map((boardgames) => boardgames.get({ plain : true }))
    const categories = categoriesData.map((categories) => categories.get({ plain : true }))

    // add the ages
    const ages = [5, 6, 7, 8, 9, 10, 11, 12, 14, 17];
    let minAges = [];
    for (let i = 0; i < ages.length; i++){
      minAges.push({
        index: i + 1,
        age: ages[i]
      })
    };

    // add the players
    const players = [];
    const minPlayers = 1;
    let maxPlayers = 2;
    for (let i = 0; i < boardgames.length; i ++){
      // get the max number of players that any boardgame has
      if (boardgames[i].maxPlayers > maxPlayers){
        maxPlayers = boardgames[i].maxPlayers
      }
    };
    for (let i = 1; i <= maxPlayers; i++){
      players.push({
        index: i,
        player: i
      })
      console.log(players);
    }

    // add the game duration
    const times = [5, 10, 15, 20, 30, 60, 90, 120, 150, 180];
    let gameDuration = [];
    for (let i = 0; i < times.length; i++){
      gameDuration.push({
        index: i + 1,
        time: times[i]
      })
    };

    const gamesPageData = {
      boardgames: boardgames,
      categories: categories,
      minAges: minAges,
      players: players,
      duration: gameDuration
    }; 

    res.render("boardgames", gamesPageData)
    console.log(gamesPageData)     
  } 
  catch (err){
    console.log(err);
    res.status(500).json(err);
  };
})

router.get("/profile", (req, res) => {
  res.render("profile")
  console.log("profile")
  // res.status(200).json("Youre on profile")
})

// Render the individual boardgame page
router.get("/game/:id", async (req, res) => {
  try{
    // get the respective boardgame data, delete all the extra sequelize info and put it as a single object
    const boardgameData = await Game.findByPk(req.params.id,{
      include: [Review, Category]
    });
    if (!boardgameData){
      res.status(404).json({message: 'No boardgame with this id!'});
      return;
    };
    const boardgame = boardgameData.get({ plain : true })
    console.log(boardgame);
    res.render("singleboardgame", boardgame)   
  } 
  catch (err){
    console.log(err);
    res.status(500).json(err);
  };
});

router.get("/reviews", (req, res) => {
  res.render("reviews")
  console.log("reviews")
  // res.status(200).json("Youre on reviews")
})


module.exports = router;