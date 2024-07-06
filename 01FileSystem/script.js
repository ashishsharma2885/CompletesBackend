const fs = require('fs')

// Write file
// read file
// update file
// append file
// delete file
// folder creation
// copy rename move

/* fs write complete
fs.writeFile("abcd.txt", "hey hello", function(err){
    if(err) console.log(err)
        else console.log("file created")
}) */

/* fs read complete
fs.readFile("abcd.txt", "utf8", function(err, data){
   if(err) console.log(err)
    else console.log(data)
}) */


/* Adding Data To Existing Files
fs.appendFile("abcd.txt", " appended data", function(err){
    if (err) console.log(err)
    else console.log("appended data")
}) */

/* file Anmes
fs.rename("abcd.txt", "hey.txt", function(err){
    if(err) console.log(err);
    else console.log("done")
}) */

/*Removing file
fs.unlink("hey.txt", function(err){
    if (err) console.log(err)
    else console.log("deleted")
}) */

/* Folder Creation
fs.mkdir("Ashish", function(err){
    if(err) console.log(err)
    else console.log("folder created")
}) */

/*
fs.readdir("Ashish", function(err, files){
    if (err) console.log(err);
    else console.log(files) }) */

/*
fs.mkdir("Ashish", {recursive : true}, function(err){
    if(err) console.log(err)
        else console.log("Deleted")
}) */