console.log("Tut 73 DANCE WEBSITE");

const fs = require('fs');
const express = require('express');
const path = require('path');
const { fail } = require('assert');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/DanceWebContact');

// var contactSchema = new mongoose.Schema({
//     name:String,
//     number:String,
//     email:String,
//     address:String,
//     concern:String
// });
// var contact = mongoose.model('contact',contactSchema);


const app = express();

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));


app.get("/", (req, res) => {
    const con = {}
    res.status =200;
    res.render('index.pug', con);
});
app.get("/about", (req, res) => {
    const con = {}
    res.status =200;
    res.render('about.pug', con);
});
app.get("/services", (req, res) => {
    const con = {}
    res.status =200;
    res.render('services.pug', con);
});
app.get("/contact", (req, res) => {
    const con = {}
    res.status =200;
    res.render('contact.pug', con);
});

app.post('/contact',(req,res) =>{
    student_name = req.body.name; 
    student_number = req.body.number; 
    student_email = req.body.email; 
    student_address = req.body.address; 
    student_concern = req.body.concern; 
    let output_text = `Name:${student_name},  Number:${student_number},  Email:${student_email},  Address:${student_address},  Concern:${student_concern}\n`
    
    fs.appendFileSync("OutputDetails.txt",output_text);
});


app.post("/contact", (req, res) => {
    var contactItem = new contact(req.body);
    contactItem.save().then(() =>{
        res.status(200).send("Details successfully entered in database")
    }).catch(()=>{
        res.status(400).send("Error,try again")
    });
});


const port = 80;
  app.listen(port,()=>{
     console.log(`running server at ${port}/`);
  });
  