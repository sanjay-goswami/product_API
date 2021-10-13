// require mongoose
const mongoose = require('mongoose')

// creating category schema
const category_schema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    }
},{versionKey:false});

//  creating category model
const Category = mongoose.model('Category',category_schema);

// exporting category model
module.exports = Category