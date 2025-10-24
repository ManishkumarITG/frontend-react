const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    number: Number,
    password : String,
    role: String
})

module.exports = mongoose.model("User", userSchema);