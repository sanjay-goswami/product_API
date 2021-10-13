const mongoose = require('mongoose');
require('dotenv').config();

const db_URI = process.env.DB_URI;

mongoose.connect(db_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to Database");
    }
});