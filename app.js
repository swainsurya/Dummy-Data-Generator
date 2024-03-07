
const express = require("express");
const mongoose = require("mongoose");
const employee = require("./models/employee.js");

let app = express();
const port = 5000;

app.set('view engine', 'ejs');

const conn = mongoose.connect("mongodb://localhost:27017/company");

app.get('/', (req, res) => {
    res.render("index");
});

let generateRandom = (arr) => {
    let rdn = Math.floor(Math.random() * (arr.length));
    return arr[rdn];
};

let nameArr = ["Suryakanta", "Nithun", "Jogendra", "Crys lyne"];
let langArr = ["Js", "Python", "Java", "Kotlin"];
let cityArr = ["Baluagaon", "Bhubaneswar", "Cuttack", "Khordha"];

app.get('/generate', async (req, res) => {
    await employee.deleteMany({});
    // Generate random data
    for (let i = 0; i < 5; i++) {
        const emp = new employee({
            name: generateRandom(nameArr),
            salary: Math.floor(Math.random() * (100000 - 20000 + 1) + 20000),
            language: generateRandom(langArr),
            city: generateRandom(cityArr),
            isManager: (Math.random() > 0.5) ? true : false
        })
        emp.save();
    }
    res.send("Data generated Successfully");
})

app.listen(port, () => {
    console.log("Port Started");
});