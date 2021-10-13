// require mongoose
const mongoose = require('mongoose');

// require dotenv file 
require('dotenv').config();

// getting database URI from dotenv file 
const db_URI = process.env.DB_URI;

// connection with db collection
mongoose.connect(db_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err){
        // error in connecting db
        console.log(err);
    }
    else{
        // connected
        console.log("Connected to Database");
    }
});

// exporting the connected mongoose
module.exports = mongoose