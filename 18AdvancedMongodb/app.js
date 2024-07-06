const express = require("express");
const app = express();
const userModel = require("./models/user");

const dummyUsers = [
  {
    username: "johndoe",
    name: "John Doe",
    password: "password123",
    age: "28",
    isMarried: false,
    email: "johndoe@example.com",
  },
  {
    username: "janedoe",
    name: "Jane Doe",
    password: "password123",
    age: "32",
    isMarried: true,
    email: "janedoe@example.com",
  },
  {
    username: "alicewonder",
    name: "Alice Wonder",
    password: "wonder123",
    age: "25",
    isMarried: false,
    email: "alice@example.com",
  },
  {
    username: "bobsmith",
    name: "Bob Smith",
    password: "smithy123",
    age: "30",
    isMarried: true,
    email: "bobsmith@example.com",
  },
  {
    username: "charliebrown",
    name: "Charlie Brown",
    password: "charlie123",
    age: "27",
    isMarried: false,
    email: "charliebrown@example.com",
  },
  {
    username: "danielking",
    name: "Daniel King",
    password: "kingdan123",
    age: "35",
    isMarried: true,
    email: "danielking@example.com",
  },
  {
    username: "emilyrose",
    name: "Emily Rose",
    password: "roseem123",
    age: "24",
    isMarried: false,
    email: "emilyrose@example.com",
  },
  {
    username: "frankwhite",
    name: "Frank White",
    password: "whitefrank123",
    age: "29",
    isMarried: true,
    email: "frankwhite@example.com",
  },
  {
    username: "gracehill",
    name: "Grace Hill",
    password: "hillgrace123",
    age: "31",
    isMarried: true,
    email: "gracehill@example.com",
  },
  {
    username: "harrypotter",
    name: "Harry Potter",
    password: "potterharry123",
    age: "26",
    isMarried: false,
    email: "harrypotter@example.com",
  },
  {
    username: "irismiller",
    name: "Iris Miller",
    password: "milleriris123",
    age: "28",
    isMarried: false,
    email: "irismiller@example.com",
  },
  {
    username: "jacksonford",
    name: "Jackson Ford",
    password: "fordjack123",
    age: "34",
    isMarried: true,
    email: "jacksonford@example.com",
  },
  {
    username: "katherinejones",
    name: "Katherine Jones",
    password: "joneskat123",
    age: "27",
    isMarried: false,
    email: "katherinejones@example.com",
  },
  {
    username: "liamlucas",
    name: "Liam Lucas",
    password: "lucasliam123",
    age: "33",
    isMarried: true,
    email: "liamlucas@example.com",
  },
  {
    username: "miawilliams",
    name: "Mia Williams",
    password: "williamsmia123",
    age: "22",
    isMarried: false,
    email: "miawilliams@example.com",
  },
];

app.get("/", (req, res) => {
  res.send("working");
});

/*
app.get('/createMany', async(req, res) => {
   let data = await userModel.insertMany(dummyUsers)
   res.send(data)
})*/

/* Equal operator in mongoDB
app.get("/users", async (req, res) => {
    let users = await userModel.find({age: {$eq: 30}});
    res.send(users)
}) */

/* Not-equal operator in mongoDB
app.get("/users", async (req, res) => {
 let users = await userModel.find({age: {$ne: 30}});
 res.send(users)
 }) */

/* Less-than operator in mongoDB
 app.get("/users", async (req, res) => {
    let users = await userModel.find({age: {$lt: 30}});
    res.send(users)
}) */

/* Less-than operator or Equal  operator in mongoDB
 app.get("/users", async (req, res) => {
        let users = await userModel.find({age: {$lte: 30}});
        res.send(users)
}) */

/* Greater-than operator or Equal  operator in mongoDB
 app.get("/users", async (req, res) => {
     let users = await userModel.find({age: {$gt: 27}});
     res.send(users)
    }) */

/* in operator or Equal  operator in mongoDB
app.get("/users", async (req, res) => {
let users = await userModel.find({age: {$in: [25, 27, 30]}});
 res.send(users)
 }) */

/* Not-in operator or Equal  operator in mongoDB
 app.get("/users", async (req, res) => {
    let users = await userModel.find({age: {$nin: [25, 27, 30]}});
     res.send(users)
     }) */

/* Exists operator or Equal  operator in mongoDB
app.get("/users", async (req, res) => {
let users = await userModel.find({isAdmin: {$exists: false}});
res.send(users)
 })  */

/* And & Or operator or Equal  operator in mongoDB
app.get("/users", async (req, res) => {
    let users = await userModel.find({$and: [{isMarried: false},{age: {$gte: 20}}]});
    res.send(users)
}) */ 

/* Regular Expressions operator or Equal  operator in mongoDB
app.get("/users", async (req, res) => {
    let users = await userModel.find({name: {$regex: /.*h$/i}});
    res.send(users) 
}) */

app.listen(3000);
