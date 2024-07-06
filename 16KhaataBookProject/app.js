const express = require('express')
const app = express()
const path = require('path')

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/create", (req, res) => {
   fs.writeFIle()
});

app.get("/", (req, res) => {
    res.send("hey")
});

app.listen(3001)