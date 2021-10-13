// require dotenv for storing PORT no on which API runs and database URI
require("dotenv").config();

// require express
const express = require("express");
const app = express();

// require db file from config for databse connectivity
const db = require('./config/db');

// fetching port no from dotenv file
const port = process.env.PORT || 8001;

// use JSON for passing json data 
app.use(express.json());

// Use express router
app.use(require('./routes'));


// listening on specified port
app.listen(port,(err)=>{
    if(err){
        console.log("Internal error");
        process.exit(1);
    }
    else{
        console.log(`API is listening on ${port} port`);
    }
})
