const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/testingdbreferance");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    posts: [
    {
       content: String,
       date: {
        type: Date,
        default: Date.now()
       }
    }
]
})

module.exports = mongoose.model("User", userSchema)