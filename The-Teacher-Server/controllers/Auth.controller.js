const User = require("../Models/authModle")
const express = require("express");
const connectDB = require("../database/db")

connectDB()

exports.signUp = async (req , res) =>{
    const {number} = req.body;
    res.send("manish")
}