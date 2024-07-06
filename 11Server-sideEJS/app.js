const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    console.log(req.query)
    res.render("index")
})

// app.get("/profile", function(req, res) {
//     res.render("profile")
// })

app.get("/check", function(req, res) {
   res.send("Working")
})

app.listen(3000)