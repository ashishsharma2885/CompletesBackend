const express = require('express')
const app = express()

app.use(function(req, res,next){
    console.log("hey hello")
    next();
})

app.use(function(req, res,next){
    console.log("hey hello kaise ho")
    next();
})

app.get('/', function(req, res){
    res.send("Something main about page")
})
app.get('/about', function(req, res){
    res.send("Something about page")
})


app.listen(3000)