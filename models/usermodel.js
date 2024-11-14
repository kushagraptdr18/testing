const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    username: String,
    password:String,
    email: String,
    age:Number,
    phoneNumber:Number,
    profilePicture:String
})



module.exports = mongoose.model("User",userSchema)