// require category model
const Category = require('../../../models/Category');

// controller function for creating new category
module.exports.create = (req,res)=>{
    // creating new category with request body
    let category = new Category(req.body);

    // save category in db
    category.save((err)=>{
        if(err){
            res.status(401).json({success:0,message:err});
        }
        else{
            res.status(201).json({success:1,message:"Category created successfully"});
        }
    });
};
// controller function  for read all category
module.exports.readAll = (req,res)=>{

    // finding all category from db
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
// controller function for read particular category
module.exports.read = (req,res)=>{

    // find particular category using category id
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
// controller function for updating particular category
module.exports.update = (req,res)=>{

    // find particular category from db and update it
    Category.findByIdAndUpdate(req.params.id,req.body,(err,category_data)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        if(category_data){
            res.status(201).json({success:1,message:"Category updated successfully!"});
        }
    })
}

// controller function for deleting category
module.exports.delete = (req,res)=>{

    // find category from db and delete
    Category.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.status(400).json({success:0,message:err});
        }
        else{
            res.status(202).json({success:1,message:"Category deleted successfully!"});
        }
    })
}