const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get("/", function(req, res){

})

app.listen(3000)