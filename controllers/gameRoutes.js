const express = require("express");
const router = express.Router();
const { Game, User } = require("../models");

//Find All Games
router.get("/", (req, res) => {
  Game.findAll()
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
    include: [User]
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