var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const { error } = require("console");
const mongoose = require("mongoose");
require('dotenv').config();


var app = Express();
app.use(cors());

const API = process.env.DB_API

var CONNECTION_STRING = API

mongoose.connect(CONNECTION_STRING)
    .then(() => console.log('connected'))
    .catch(e => console.log(e));




const UserSchema = new mongoose.Schema({
    Fname: String,
    address: String,
    phone: Number
});

const Usermodel = mongoose.model("infos", UserSchema);



//this is the code that gets data from the database and pass it to the front end
app.get("/getUsers", (req, res)=>{
    Usermodel.find().lean()             //this will fetch all the data from the database
     .then((users)=>res.json(users))
     .catch(error=>console.log(error))
    // console.log("hello world")
});


// app.post('/api/todoapp/AddNotes', multer().none, (request, response)=>{
//     database.collecction("todoappcollection").count({}, function(error, numofDoc){
//         database.collecction("todoappcollection").insertOne({
//             id:(numofDoc+1).toString(),
//             description:request.body.newNotes
//         });
//         response.json("Added Successfully");
//     })
// });

//collection name = todoappcollection
app.delete('/api/todoapp/DeleteNotes', (response, request)=>{
    database.collecction("todoappcollection").deleteOne({
        id:request.query.id
    });
    response.json("Delete successfully")
})


app.listen(5000, () => {
    console.log("server is listening at port 5000");
});