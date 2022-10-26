const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,requird:true},
    image:{type:String,requird:true},
    attendence:{type:String,required:true}
    
})

const userModel=new mongoose.model('users',userSchema)

module.exports=userModel