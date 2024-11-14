const express=require("express")
const app=express()
const path=require("path")
const route = require("./routes/indexpage")
const db = require("./config/mogooseConfig")
const cookieParser = require('cookie-parser');


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())


app.use('/',route)


app.listen(3000);
