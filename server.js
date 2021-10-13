require("dotenv").config();
const express = require("express");
const db = require('./config/db')
const port = process.env.PORT || 8001;
const app = express();
app.use(require('./routes'));
app.use(express.json())

app.listen(port,(err)=>{
    if(err){
        console.log("Internal error");
        process.exit(1);
    }
    else{
        console.log(`API is listening on ${port} port`);
    }
})
