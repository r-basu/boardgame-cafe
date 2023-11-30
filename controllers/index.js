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

router.get("/boardgames", async (req, res) => {
  try{
    // get data, delete all the extra sequelize info and put it as a single object
    const boardgamesData = await Game.findAll();
    const categoriesData = await Category.findAll();
    // const boardgames = boardgamesData.get({ plain : true })
    // const categories = categoriesData.get({ plain : true })

    const gamesPageData = {
      boardgames: boardgamesData,
      categories: categoriesData
    }; 
    res.render("boardgames", gamesPageData)
    console.log(gamesPageData)     
  } 
  catch {
    res.status(500).json(err);
  };
})

router.get("/profile", (req, res) => {
  res.render("profile")
  console.log("profile")
  // res.status(200).json("Youre on profile")
})

router.get("/reviews", (req, res) => {
  res.render("reviews")
  console.log("reviews")
  // res.status(200).json("Youre on reviews")
})


module.exports = router;