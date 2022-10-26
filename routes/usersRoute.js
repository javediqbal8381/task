const express = require("express");
const router = express.Router();
const User = require("../models/UserModles")



router.post("/userregister", async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({email})
    if (user) {
      return res.status(400).json('user already registred');
    } else {

     
          const newuser = new User({
            username: req.body.username,
            attendence:req.body.attendence,
            email: req.body.email,
            password: req.body.password,
            image: req.body.image
          })
          newuser.save()
          res.send('User registered successfully')
       


    }

  } catch (error) {
    return res.status(400).json(error)
  }

});

router.post("/userlogin", async (req, res) => {

  const { email, password } = req.body

  try {
    const user = await User.findOne({ email, password })
    if (user) {
      res.send(user)
    }
    else {
      return res.status(400).json(error);
    }
  } catch (error) {
    return res.status(400).json(error);
  }

});


router.post("/userattendence", async (req, res) => {
   try {

    const user = await User.findById(req.body.userid)
    user.attendence =req.body.attendence;
    await user.save();

  res.send(user.attendence)
   } 
   catch (error) {
    return res.status(400).json(error);
   }
  

});



router.post("/myattendence", async (req, res) => {
  try {

   const user = await User.findById(req.body.userid)
 res.send(user)
  } 
  catch (error) {
   return res.status(400).json(error);
  }
 

});






module.exports = router

