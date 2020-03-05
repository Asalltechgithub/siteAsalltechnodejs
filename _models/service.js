
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema

const service = new Schema({

name:{
type:String,
required:true

}


})

Mongoose.model("service", service)