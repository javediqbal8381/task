const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    adminname:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,requird:true},
    
})

const adminModel=new mongoose.model('admin',adminSchema)

module.exports=adminModel