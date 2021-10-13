const mongoose = require('mongoose')

const category_schema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    }
},{versionKey:false});

const Category = mongoose.model('Category',category_schema);
module.exports = Category