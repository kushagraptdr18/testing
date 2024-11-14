const express = require('express');
const { landingPageController, registerPageController, postRegisterPageController, loginPageController, profilePageController, logoutPageController } = require('../controllers/indexPageController');
const { isLoggedIn } = require('../middlewares/Authentication');

const route = express.Router();


route.get("/",landingPageController)
route.get("/register",registerPageController)
route.post("/register",postRegisterPageController)
route.post("/login",loginPageController)
route.get("/logout",logoutPageController)
route.get("/profile",isLoggedIn,profilePageController)

 





module.exports = route