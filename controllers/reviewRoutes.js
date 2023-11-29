const express = require("express");
const router = express.Router();
const { Review, User } = require("../models");

// Get All Reviews
router.get("/", (req, res) => {
  Review.findAll({
    include: [User]
  })
    .then((dbReviews) => {
      res.json(dbReviews);
    })
    .catch((err) => {
      res.status(500).json({ msg: "oh no!", err });
    });
});

// Find One Review by UserID
router.get("/:userId", (req, res) => {
  Review.findAll({ where: { UsgerId: req.params.userId } })
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

module.exports = router;