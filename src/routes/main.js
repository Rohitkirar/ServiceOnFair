const express = require('express');
const bcrypt = require('bcrypt');

const routes = express.Router();


const User = require("../models/user");
const Detail = require("../models/Detail");

routes.get('/' , (req , res)=>{
    res.render('index')
})

routes.get('/login', async (req,res)=>{

    const user = await User.findOne({"_id":"63f4da63a48ba256f6237af5"});
    res.render('login', {
        user:user
    });
    
})

//login validation
routes.post("/login", async (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const username = await User.findOne({username:email}) ;
        console.log(username)
        
        const isMatch = await bcrypt.compare(password , username.password);
        
        if(isMatch){
            res.status(201).render("/");

        }
        else{
            res.send("invalid Password details");
        }
    }
    catch(error){
        res.status(400).send("invalid username")

    }
})

routes.get('/service',(req,res)=>{
    res.render('service')
})

routes.get('/registration',(req,res)=>{
    res.render('multi_level_reg_form');
})


module.exports = routes;