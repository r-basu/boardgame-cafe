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
    //TODO: ensure user isnt logged in
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(401).json({
                msg: "Invalid login credentials"
            })
        }
        else if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.status(401).json({
                msg: "Invalid login credentials"
            })
        }
        req.session.user = {
            id: foundUser.id,
            username: foundUser.username
        }
        res.json(foundUser)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp womp", err })
    })
})


// Add Current Game
//PROTECTED ROUTE
router.put("/addCurrentGame/:gameId", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
            msg: "Please login to claim a game"
        })
    } else {
        User.findByPk(req.session.user.id, {
            include: [Game]
        }).then(dbUser => {
            if (!dbUser.currentGame === null) {
                res.status(401).json({
                    msg: "Please unclaim game first"
                })
            } else {
                dbUser.update({
                    currentGame: req.params.gameId
                })
                Game.findByPk(req.params.gameId).then(dbGame => {
                    dbGame.update({
                        isAvailable: false
                    })
                })
                // TODO: LOOK INTO HOW TO AVOID DUPLICATING ENTRY CRASH ERROR IF TRYING TO CLAIM GAME
                // if (!dbUser.Games.id === req.params.gameId) {
                dbUser.addGame(req.params.gameId)
                res.status(200).json({
                    msg: "Game successfully claimed"
                })
                // }
            }

        })
    }
})

// Delete Current Game
//PROTECTED ROUTE
router.put("/deleteCurrentGame/:gameId", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
            msg: "Please login to unclaim a game"
        })
    } else {
        User.findByPk(req.session.user.id, {
            include: [Game]
        }).then(dbUser => {
            if (dbUser.currentGame === null) {
                res.status(401).json({
                    msg: "Please claim game first"
                })
            } else {
                dbUser.update({
                    currentGame: null
                })
                Game.findByPk(req.params.gameId).then(dbGame => {
                    dbGame.update({
                        isAvailable: true
                    })
                })
                res.status(200).json({
                    msg: "Game successfully unclaimed"
                })
            }

        })
    }
})


// Show all users
router.get(`/`, (req, res) => {
    User.findAll().then((dbUsers) => {
        res.json(dbUsers);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: `Something went wrong :(`,
            err
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
});

// Find Session User
router.get("/session/:id", (req, res) => {
    User.findByPk(req.session.user.id, {
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
});


module.exports = router;