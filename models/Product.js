// require mongoose
const mongoose = require('mongoose')

// creating product schema
const product_schema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    qtyPerUnit: Number,
    unitPrice:Number,
    unitInStock:Number,
    discontinued:Boolean,
    categoryID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
},{versionKey:false});

//  creating product model
const Product = mongoose.model('Product',product_schema);

// exporting product model
module.exports = Product