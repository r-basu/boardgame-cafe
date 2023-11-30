const express = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
const app = express();
const { Game, User, Category } = require("../models");

// Set the handlebars engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Find All Games
router.get("/", (req, res) => {
  Game.findAll({
    include: [Category]
  })
    .then((dbGames) => {
      res.render("games", { games: dbGames });
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

module.exports = router;