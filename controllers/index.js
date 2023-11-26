const express = require('express');
const router = express.Router();
const {User,Game, Review} = require("../models")
const gameRoutes = require("./gameRoutes");
const userRoutes = require("./userRoutes")

router.get("/",(req,res)=>{
  res.render("home")
})

router.get("/login",(req,res)=>{
  if(req.session.user){
      res.redirect("/profile")
  }
  res.render("login")
})

module.exports = router;