const mongoose = require('mongoose')
const Joi = require('joi');

mongoose.connect("mongodb://127.0.0.1:27017/joitestdb");

const userSchema = mongoose.Schema({
    username: {
       type: String,
       minLength: 3,
       required: true
    },
    name:{
        type: String,
        minLnegth: 3,
        required: true
    },
    age:{
        type: Number,
        min: 18,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    email:{
        type: String
    }
})

function validateModel(data){
   let schema = Joi.object({
        username: Joi.string().min(3).required(),
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        age: Joi.number().required(),
        contact: Joi.number().required()
    })

  let { error } =  schema.validate(data)
  return error
}

let userModel = mongoose.model("User", userSchema);;

module.exports = {validateModel, userModel}