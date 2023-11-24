const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const {User} = require('../models');

// Logout of Session
router.get("/logout",(req,res)=>{
  req.session.destroy();
  res.send("logged out!")
})

// Create User
router.post("/",(req,res)=>{
  User.create({
      username:req.body.username,
      password:req.body.password
  }).then(newUser=>{
      res.json(newUser)
  }).catch(err=>{
      res.status(500).json({msg:"oh no!",err})
  })
})

// Login
router.post("/login",(req,res)=>{
  //1. find the user who is trying to login
  User.findOne({
      where:{
          username:req.body.username
      }
  }).then(foundUser=>{
      if(!foundUser){
          res.status(401).json({msg:"Invalid username/password"})
      } else {
          if(!bcrypt.compareSync(req.body.password,foundUser.password)){
              res.status(401).json({msg:"Invalid username/password"})
          } else {
              req.session.user = {
                  id:foundUser.id,
                  username:foundUser.username
              }
              res.json(foundUser)
          }
      }
  })
})

module.exports = router;