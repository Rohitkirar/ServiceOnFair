/*
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer((req,res)=>{
    
    fs.readFile('./views/index.html' , (err,data)=>{
        if(err){
            
            res.writeHead(404, {'Conten-Type':'text/html'});
            return res.end("404 Page Not Found");
        }
        res.writeHead(200, {'Conten-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
*/

const express = require("express");
const app = express();
const hbs = require('hbs');
// const mongo = require("mongodb");
const mongoose = require("mongoose");

//importing
const User = require("./models/user");
const Detail = require("./models/Detail");
const registerDetails = require("./models/registration");
const routes = require('./routes/main');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//for using public folder file 
app.use('/static' ,express.static("public"));
0
//for using router folder
app.use('' ,routes );



//template engine
app.set('view engine', 'hbs');
app.set("views","views")

//partials path set
hbs.registerPartials("views/partials");


//db connection
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/mydb",(err,db)=>{
    if(err) throw err;
    else{ console.log("db connected");}
    
   
    // Detail.create({
    //     brandName: "Service  On Fair",
    //     brandurl : "www.google.com",
    //     links : [{
    //         label : "home",
    //         url : "/index"
    //     }]

    // })


    // User.create({
    //     username:"rk090@gmail.com",
    //     password: 12345
    // })   
})

const port = 090;
const hostname = 'localhost';
app.listen(port,hostname,()=>{
    console.log('server connected');
});