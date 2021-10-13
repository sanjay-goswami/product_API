# product_API
## Install
Install all the required dependecies "npm install".

## Edit .env file
add PORT=<portno> DB_URI=<mongodburl> in .env file

## Run the API
Enter the command "node server.js"

## CREATE Category 
### Request
`POST /api/v1/category/create`content-type: applicatio/json`
 Body- { "categoryName":<category name> }
### Response
{
  "success": 1,
  "message": "Category created successfully"
}
## READALL  Category
### Request
`GET  `/api/v1/category/readAll`content-type: applicatio/json`
### Response
{
  "success": 1,
  "data": [
    {
      "_id": <id>,
      "categoryName": <category name>
    }
  ]
}

## READ particular Category
### Request
`GET  `/api/v1/category/read/<categoryID>`content-type: applicatio/json`
### Response
{
  "success": 1,
  "data":{
      "_id": <id>,
      "categoryName": <category name>
    }
}

## UPDATE Category
### Request
  `PATCH `/api/v1/category/update/<categoryID>`content-type: applicatio/json`
  Body  {"categoryName":<new category name> }
  
### Response
{
  "success": 1,
  "message": "Category updated successfully!"
}

### DELETE Category
### Request
  `DELETE `/api/v1/category/delete/<categoryID>`content-type: applicatio/json`
  
### Response
{
  "success": 1,
  "message": "Category deleted successfully!"
}


## CREATE Product
### Request
`POST /api/v1/product/create`content-type: applicatio/json`
 Body- 
 {  "productName":<product name >,
    "qtyPerUnit":<qty of the product>,
    "unitPrice": <unit price of the product>,
    "unit in stock":<Unit in stock>,
    "dicontinued":<Boolean>,
    "categoryID":<Category id>
 }
### Response
{
  "success": 1,
  "message": "Product added successfully"
}
## READALL  Product
### Request
`GET  `/api/v1/product/readAll`content-type: applicatio/json`
### Response
{
  "success": 1,
  "data": [
    {   "_id": <id>
        "productName":<product name >,
        "qtyPerUnit":<qty of the product>,
        "unitPrice": <unit price of the product>,
        "unit in stock":<Unit in stock>,
        "dicontinued":<Boolean>,
        "categoryID":<Category id>
 }
  ]
}

## READ particular Product
### Request
`GET  `/api/v1/product/read/<productID>`content-type: applicatio/json`
### Response
{
  "success": 1,
  "data":{   "_id": <id>
        "productName":<product name >,
        "qtyPerUnit":<qty of the product>,
        "unitPrice": <unit price of the product>,
        "unit in stock":<Unit in stock>,
        "dicontinued":<Boolean>,
        "categoryID":<Category id>
 }
}

## UPDATE Product
### Request
  `PATCH `/api/v1/product/update/<productID>`content-type: applicatio/json`
  Body  {add the details which you want to update in JSON format}
  
### Response
{
  "success": 1,
  "message": "Product updated successfully!"
}

### DELETE Product
### Request
  `DELETE `/api/v1/product/delete/<productID>`content-type: applicatio/json`
  
### Response
{
  "success": 1,
  "message": "Product deleted successfully!"
}

