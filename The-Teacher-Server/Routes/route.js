const express = require("express");
const authRouter = express.Router()
const authController =  require("../controllers/Auth.controller")

authRouter.post("/signin" , authController.signUp)
