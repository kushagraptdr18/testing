
const userModel = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')


module.exports.landingPageController = (req,res)=>{
    res.render("index")
}

module.exports.registerPageController = (req,res)=>{
    res.render("register")
}

module.exports.postRegisterPageController = async (req,res)=>{
 
   try{
    console.log(req.body);
    
    let {name,username,password,email,age,number} = req.body

    let user = await userModel.findOne({email});
    
     
    if(user) res.send("already Registered")
    
    bcrypt.genSalt(10, function(err, salt) {
         bcrypt.hash(password, salt,  async function(err, hash) {
             user = await userModel.create({
                name,username,password:hash,email,age,number
            })
        });
    });

    res.redirect("/")
   }

   catch(err){
       console.log(err)
       res.send(err.message)
   }
    
}

module.exports.loginPageController=async (req,res)=>{
    let{email,password}=req.body
    let user = await userModel.findOne({email})
    if(!user)res.send("you are not registered")
    

    bcrypt.compare(password,user.password, function(err, result) {
      if(result){

        var token = jwt.sign({ id:user._id ,email:user.email }, 'shhhhh');  
        res.cookie('token',token)
        res.redirect("/profile")    
        
      } 
      else res.send("invalid credentials") ; 
    })
  
}

module.exports.logoutPageController=(req,res)=>{
    res.cookie("token","");
    res.redirect("/")  
}

module.exports.profilePageController =(req,res)=>{
    let {name,age,phoneNumber,username}=req.user

    res.render("profile",{user:req.user})
}