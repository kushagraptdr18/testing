const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/testingIshita').then(function(){
    console.log("Connected to MongoDB");
})

module.exports=mongoose.connection;

