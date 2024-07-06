const express = require('express');
const app = express();
const userModel = require("./models/user-model")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/create", async (req, res) => {
   let createuser = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    res.send(createuser)
});

app.post("/:username/create/post", async (req, res) => {
    let user = await userModel.findOne({ username: req.params.username})
    user.posts.push({content: "hey dosto ye mera pahla post hai"});
   await user.save();
    res.send(user)
 })

app.listen(3000)