const express = require("express");
const router = express.Router();
const { Review, User, Game } = require("../models");

// Get All Reviews by Single GameID
router.get("/game/:gameId", (req, res) => {
  Review.findAll(
    {
      where: { GameId: req.params.gameId },
      include: [User, Game]
    })
    .then((dbReviews) => {
      res.json(dbReviews);
    })
    .catch((err) => {
      res.status(500).json({ msg: "oh no!", err });
    });
});

//Modified route for single board game to redirect user to reviews page
router.get("/game/:gameId", (req, res) => {
  res.redirect(`/game/${req.params.gameId}/reviews`);
});

// Added this route to render review data for games
router.get("/game/:gameId/reviews", (req, res) => {
  res.render("review", 
  { 
    where: { GameId: req.params.gameId },
    include: [User, Game] 
  });
});

// Get All Reviews by Single UserID
router.get("/user/:userId", (req, res) => {
  Review.findAll(
    {
      where: { UserId: req.params.userId },
      include: [Game, User]
    })
    .then(dbReviews => {
      if (!dbReviews) {
        res.status(404).json({ msg: "no such reviews" })
      } else {
        res.json(dbReviews)
      }
    }).catch(err => {
      res.status(500).json({ msg: "oh no!", err })
    })
})

// Create Review
// TODO: Add protected route
router.post("/addReview", (req, res) => {
  Review.create({
    rating: req.body.rating,
    text: req.body.text,
    UserId: req.body.userId,
    GameId: req.body.gameId
  }).then(newReview => {
    res.json(newReview)
  }).catch(err => {
    res.status(500).json({ msg: "oh no!", err })
  })
})

// Edit Review
// TODO: Add protected route
router.put("/editReview/:reviewId", (req, res) => {
  Review.update({
    rating: req.body.rating,
    text: req.body.text,
    UserId: req.body.userId,
    GameId: req.body.gameId
  }, {
    where: {
      reviewId: req.params.reviewId
    }
  }).then(editReview => {
    res.json(editReview)
  }).catch(err => {
    res.status(500).json({ msg: "oh no!", err })
  })
})

// Delete Review
// TODO: Add protected route
router.delete("/deleteReview/:reviewId", (req, res) => {
  Review.destroy({
    where: {
      reviewId: req.params.reviewId
    }
  }).then(delReview => {
    if (!delReview) {
      res.status(404).json({ msg: "no such user!" })
    } else {
      res.json(delReview)
    }
  }).catch(err => {
    res.status(500).json({ msg: "oh no!", err })
  })
})

module.exports = router;