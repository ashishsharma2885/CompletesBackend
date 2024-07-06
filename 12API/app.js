const express = require('express')
const app = express()

app.get("/check", function(req, res){
  res.send("working")
})

app.post("/check", function(req, res){
    res.send("working")
  })
 app.put("/check", function(req, res){
    res.send("working")
  })
  app.patch("/check", function(req, res){
    res.send("working")
  })
  app.delete("/check", function(req, res){
    res.send("working")
  })

app.listen(3000)