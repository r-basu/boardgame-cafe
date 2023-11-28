const express = require('express');
const router = express.Router();
const {Users, Games, Reviews} = require("../models")


const gameRoutes = require("./gameRoutes");
router.use('/api/games',gameRoutes)


const userRoutes = require("./userRoutes")
router.use('/api/users',userRoutes)

router.get("/",(req,res)=>{
  res.render("home")
  console.log("Homepage")
  res.status(200).json("Youre on homepage")
})

router.get("/login",(req,res)=>{
  if(req.session.user){
      res.redirect("/profile")
      console.log("Profile")
      res.status(200).json("Youre on profile")
  }
  res.render("login")
  console.log("Login")
  res.status(200).json("Youre on login page")
})



module.exports = router;