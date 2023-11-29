const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Game, Review } = require('../models');

// Logout of Session
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("logged out!")
})

// Create User
router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(newUser => {
        res.json(newUser)
    }).catch(err => {
        res.status(500).json({ msg: "oh no!", err })
    })
})

// Login
router.post("/login", (req, res) => {
    //1. find the user who is trying to login
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(foundUser => {
        if (!foundUser) {
            res.status(401).json({ msg: "Invalid username/password" })
        } else {
            if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
                res.status(401).json({ msg: "Invalid username/password" })
            } else {
                req.session.user = {
                    id: foundUser.id,
                    username: foundUser.username
                }
                res.json(foundUser)
            }
        }
    })
})

// Add Current Game
router.post("/:userId/addCurrentGame/:gameId",(req,res)=>{
  User.findByPk(req.params.userId).then(dbUser=>{
    dbUser.addGame(req.params.gameId).then(data=>{
        res.json(data)
    })
  })
})

// Find One User
router.get("/:id", (req, res) => {
    User.findByPk(req.params.id, {
      include: [Game, Review]
    }).then(dbUser => {
      if (!dbUser) {
        res.status(404).json({ msg: "no such user!" })
      } else {
        res.json(dbUser)
      }
    }).catch(err => {
      res.status(500).json({ msg: "oh no!", err })
    })
  })
  

module.exports = router;