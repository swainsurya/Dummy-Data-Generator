
const mongoose = require("mongoose") ;

let empSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
}) ;

const employee = mongoose.model("employee",empSchema) ;
module.exports = employee ;