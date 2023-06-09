const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const content = require("./schema");
const Content = require("./schema");
const port = process.env.port|| 5000


app.get("/",(req,res)=>{
    res.send("API started.")
})

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://Lokesh1452739:Lokesh1452739@cluster0.s8qbfbt.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("DataBase started Sucessfully...")
    })
    .catch((err)=>{
        console.log(err)
    })
console.log(Content)

app.post("/store",(req,res)=>{
    const {username,password} = req.body
    console.log(username+password)
    const newData = new Content({
        username,password
    })
    newData.save()
})
app.get("/users",(req,res)=>{
    Content.find()
        .then((found)=>{
            res.json(found)
        })
})

app.listen(port,()=>{
    console.log("Server started Sucessfully...")
})