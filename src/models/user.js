const mongoose = require("mongoose");


const User = mongoose.Schema({
    username : String, 
    password : Number,
});


module.exports = mongoose.model("Users" , User);