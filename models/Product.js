const mongoose = require('mongoose')

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

const Product = mongoose.model('Product',product_schema);
module.exports = Product