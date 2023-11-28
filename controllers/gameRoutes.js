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

// Add Category to one game
// Add Current Game
router.post("/:gameId/addCategory/:categoryId", (req, res) => {
  Game.findByPk(req.params.gameId).then(dbGame => {
    dbGame.addCategory(req.params.categoryId).then(data => {
      res.json(data)
    })
  })
})

module.exports = router;