const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const userModel = require("../models/usermodel")

module.exports.isLoggedIn = async function(req, res, next) {

     const token = req.cookies.token;
    
    if(token){
       
        jwt.verify(token,"shhhhh", async function(err,decoded){
            let{id,email} = decoded       
            let user = await userModel.findOne({email})
            
            if(user){
                req.user = user
                next()      
            }else{
                res.redirect("/")
            }
         })
            
    }else{
        res.redirect("/")

    }
        

}

