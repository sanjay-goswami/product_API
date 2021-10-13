// require product model
const Product = require('../../../models/Product');

// controller function for creating new product
module.exports.create =(req,res)=>{

    // creating new product with request body
    let product_data = new Product(req.body);
    // save product in db
    product_data.save((err,data)=>{
        if(err){
            res.status(401).json({success:0,message:err});
        }
        else{
            res.status(201)
            res.json({success:1,message:"Product created successfully"});
        }
    })
}
// controller function  for read all product
module.exports.readAll = (req,res)=>{

    // finding all product from db
    Product.find((err,product_data)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        if(product_data){
            res.status(200).json({
                success:1,
                data:product_data
            });
        }
    })
}

// controller function for read particular product
module.exports.read = (req,res)=>{

    // find particular product using product id
    Product.findById(req.params.id,(err,product_data)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        if(product_data){
            res.status(200).json({
                success:1,
                data:product_data
            });
        }
    })
}

// controller function for updating particular product
module.exports.update = (req,res)=>{
    
    // find particular product from db and update it
    Product.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        else{
            res.status(201).json({success:1,message:"Category updated successfully!"});
        }
    })
}

// controller function for deleting product
module.exports.delete = (req,res)=>{

    // find product from db and delete
    Product.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        else{
            res.status(202).json({success:1,message:"Category deleted successfully!"});
        }
    })
}