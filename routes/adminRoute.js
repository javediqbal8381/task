const express = require("express");
const router = express.Router();
const Admin = require("../models/AdminModle")
const User=require('../models/UserModles')


router.post("/adminlogin", async(req, res) => {

      const {email} = req.body

      try {
          const admin = await Admin.findOne({email})
          if(admin) {
              res.send(admin)
          }
          else{
              return res.status(400).json(error);
          }
      } catch (error) {
        return res.status(400).json(error);
      }
  
});

router.post("/adminregister", async(req, res) => {
    const {email}= req.body
 try {
     const admin=await Admin.findOne({email})
  if (admin) {
     return res.status(400).json('admin already exists');

  } else {
     const newadmin = new Admin(req.body)
     await newadmin.save()
     res.send('Admin registered successfully')
  }
     
 } catch (error) {
   return res.status(400).json(error)   
 }

});



router.get('/allusersdata',async(req,res)=>{
  const alldata=await User.find()
  res.json(alldata)
})


module.exports = router

