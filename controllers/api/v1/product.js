const Product = require('../../../models/Product');

module.exports.create =(req,res)=>{
    let product_data = new Product(req.body);
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

module.exports.readAll = (req,res)=>{
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

module.exports.read = (req,res)=>{
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

module.exports.update = (req,res)=>{
    Product.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        else{
            res.status(201).json({success:1,message:"Category updated successfully!"});
        }
    })
}

module.exports.delete = (req,res)=>{
    Product.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        else{
            res.status(202).json({success:1,message:"Category deleted successfully!"});
        }
    })
}