const express = require('express')
const app = express()
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user")
const debuglog = require("debug")("development:app")


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", function(req, res, next){
    res.send("hey")
})

app.post("/create", async function(req, res, next){
   let   {name, email, password, username} = req.body;

  let createUser = await userModel.create({
    name,
    username,
    email,
    password
   })

   res.send(createUser)
})


/* read
app.get("/read", async function(req, res, next){
    let user = await userModel.findOne({name: "Ashish"});
    console.log("readed")
    res.send(user)
})  */

/* update    
app.get("/update", async function(req, res, next){
   let user = await userModel.findOneAndUpdate({name: "Sharma"}, {name: "Abhineet"},{new: true})
   res.send(user)
}) */

   /* delete
app.get("/delete", async function(req, res){
    let user = await userModel.findOneAndDelete({name: "Sharma"})
    res.send(user)
}) */

// create
// app.get("/create", async function(req, res, next){
//    let createdUser = await userModel.create({
//         username: "Ashish",
//         name: "Ashish",
//         email: "ashish@gmail.com",
//         password: "pass"
//     })
//     debuglog("user created")
//     res.send(createdUser)
// })

app.listen(3000)