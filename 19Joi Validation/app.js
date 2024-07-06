const express = require('express');
const app = express();
const {userModel, validateModel} = require("./models/user-model")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', function(req, res){
  res.send("chal rha hai")
});

app.get("/create", async function(req, res) {
    let { name, username, age, contact, email } = req.body;

   let error = validateModel({name, username, age, contact, email})
   if(error) return res.status(500).send(error.message)

    res.send("everything worked")
});



app.listen(3000)