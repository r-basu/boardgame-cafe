const express = require("express");
const router = express.Router();
const { Game, User, Category } = require("../models");

//Find All Games
router.get("/", (req, res) => {
  Game.findAll({
    include: [Category]
  })
    .then((dbGames) => {
      res.json(dbGames);
    })
    .catch((err) => {
      res.status(500).json({ msg: "oh no!", err });
    });
});

// Find all the game categories
router.get("/categories", (req, res) => {
  Category.findAll()
    .then((dbCategories) => {
      res.json(dbCategories);
    })
    .catch((err) => {
      res.status(500).json({ msg: "oh no!", err });
    });
});

//Find One Game
router.get("/:id", (req, res) => {
  Game.findByPk(req.params.id, {
    include: [User, Category]
  }).then(dbGames => {
    if (!dbGames) {
      res.status(404).json({ msg: "no such Boardgame!" })
    } else {
      res.json(dbGames)
    }
  }).catch(err => {
    res.status(500).json({ msg: "oh no!", err })
  })
})


//Find Random Game
const Roll = require('roll')
roll = new Roll();
let randomGameId = roll.roll('d31')
console.log(randomGameId)

router.get("/random/:id", (req, res) => {
  Game.findByPk(req.params.id, {
    include: [User, Category]
  }).then(dbGames => {
    if (!dbGames) {
      res.status(404).json({ msg: "no such Boardgame!" })
    } else {
      res.json(dbGames)
    }
  }).catch(err => {
    res.status(500).json({ msg: "oh no!", err })
  })
})


module.exports = router;