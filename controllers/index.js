const express = require('express');
const router = express.Router();
const { User, Game, Review } = require("../models")


const gameRoutes = require("./gameRoutes");
router.use('/api/games', gameRoutes)


const userRoutes = require("./userRoutes")
router.use('/api/users', userRoutes)

const reviewRoutes = require("./reviewRoutes")
router.use('/api/reviews', reviewRoutes)

router.get("/", (req, res) => {
  res.render("home")
  console.log("Homepage")
  res.status(200).json("Youre on homepage")
})

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/profile")
    console.log("profile")
    res.status(200).json("Youre on profile")
  } else {
    res.render("login")
    console.log("Login")
    res.status(200).json("Youre on login page")
  }
})

router.get("/boardgames", (req, res) => {
  res.render("boardgames")
  console.log("Boardgames")
  res.status(200).json("Youre on boardgames")
})

router.get("/profile", (req, res) => {
  res.render("profile")
  console.log("profile")
  res.status(200).json("Youre on profile")
})

router.get("/reviews", (req, res) => {
  res.render("reviews")
  console.log("reviews")
  res.status(200).json("Youre on reviews")
})


module.exports = router;