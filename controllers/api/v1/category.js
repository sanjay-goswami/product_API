const Category = require('../../../models/Category');

module.exports.create = (req,res)=>{
    const category = new Category(req.body);
    category.save((err)=>{
        if(err){
            res.status(401).json({success:0,message:err});
        }
        else{
            res.status(201).json({success:1,message:"Category created successfully"});
        }
    });
};

module.exports.readAll = (req,res)=>{
    Category.find((err,category_data)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        if(category_data){
            res.status(200).json({
                success:1,
                data:category_data
            });
        }
    })
}

module.exports.read = (req,res)=>{
    Category.findById(req.params.id,(err,category_data)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        if(category_data){
            res.status(200).json({
                success:1,
                data:category_data
            });
        }
    })
}

module.exports.update = (req,res)=>{
    Category.findByIdAndUpdate(req.params.id,req.body,(err,category_data)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        if(category_data){
            res.status(201).json({success:1,message:"Category updated successfully!"});
        }
    })
}

module.exports.delete = (req,res)=>{
    Category.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        else{
            res.status(202).json({success:1,message:"Category deleted successfully!"});
        }
    })
}