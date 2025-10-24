const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log("DataBase Connected");
        
    } catch (error) {
        
    }
}

module.exports = connectDB;
