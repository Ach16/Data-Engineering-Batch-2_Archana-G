use retail_db
// switched to db retail_db
db.customers.insertMany([
{ customer_id:1, name:"Arjun", city:"Hyderabad" },
{ customer_id:2, name:"Rahul", city:"Bangalore" },
{ customer_id:3, name:"Sneha", city:"Mumbai" },
{ customer_id:4, name:"Amit", city:"Delhi" },
{ customer_id:5, name:"Priya", city:"Hyderabad" }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69dcc3d7c6144e953bfd5e76'),
//     '1': ObjectId('69dcc3d7c6144e953bfd5e77'),
//     '2': ObjectId('69dcc3d7c6144e953bfd5e78'),
//     '3': ObjectId('69dcc3d7c6144e953bfd5e79'),
//     '4': ObjectId('69dcc3d7c6144e953bfd5e7a')
//   }
// }
db.products.insertMany([
{ product_id:101, name:"Laptop", category:"Electronics", price:75000 },
{ product_id:102, name:"Phone", category:"Electronics", price:50000 },
{ product_id:103, name:"Desk", category:"Furniture", price:15000 },
{ product_id:104, name:"Chair", category:"Furniture", price:7000 },
{ product_id:105, name:"Tablet", category:"Electronics", price:30000 }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69dcc3e5c6144e953bfd5e7b'),
//     '1': ObjectId('69dcc3e5c6144e953bfd5e7c'),
//     '2': ObjectId('69dcc3e5c6144e953bfd5e7d'),
//     '3': ObjectId('69dcc3e5c6144e953bfd5e7e'),
//     '4': ObjectId('69dcc3e5c6144e953bfd5e7f')
//   }
// }
db.orders.insertMany([
{ order_id:1001, customer_id:1, product_id:101, quantity:1, order_date:"2024-03-01" },
{ order_id:1002, customer_id:2, product_id:102, quantity:1, order_date:"2024-03-02" },
{ order_id:1003, customer_id:1, product_id:105, quantity:2, order_date:"2024-03-03" },
{ order_id:1004, customer_id:3, product_id:103, quantity:1, order_date:"2024-03-05" },
{ order_id:1005, customer_id:5, product_id:102, quantity:3, order_date:"2024-03-07" }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69dcc3f8c6144e953bfd5e80'),
//     '1': ObjectId('69dcc3f8c6144e953bfd5e81'),
//     '2': ObjectId('69dcc3f8c6144e953bfd5e82'),
//     '3': ObjectId('69dcc3f8c6144e953bfd5e83'),
//     '4': ObjectId('69dcc3f8c6144e953bfd5e84')
//   }
// }
db.customers.find()
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e76'),
//   customer_id: 1,
//   name: 'Arjun',
//   city: 'Hyderabad'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e77'),
//   customer_id: 2,
//   name: 'Rahul',
//   city: 'Bangalore'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e78'),
//   customer_id: 3,
//   name: 'Sneha',
//   city: 'Mumbai'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e79'),
//   customer_id: 4,
//   name: 'Amit',
//   city: 'Delhi'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e7a'),
//   customer_id: 5,
//   name: 'Priya',
//   city: 'Hyderabad'
// }
db.products.find()
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7b'),
//   product_id: 101,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7c'),
//   product_id: 102,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7d'),
//   product_id: 103,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7e'),
//   product_id: 104,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7f'),
//   product_id: 105,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000
// }
db.orders.find()
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e80'),
//   order_id: 1001,
//   customer_id: 1,
//   product_id: 101,
//   quantity: 1,
//   order_date: '2024-03-01'
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e81'),
//   order_id: 1002,
//   customer_id: 2,
//   product_id: 102,
//   quantity: 1,
//   order_date: '2024-03-02'
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e82'),
//   order_id: 1003,
//   customer_id: 1,
//   product_id: 105,
//   quantity: 2,
//   order_date: '2024-03-03'
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e83'),
//   order_id: 1004,
//   customer_id: 3,
//   product_id: 103,
//   quantity: 1,
//   order_date: '2024-03-05'
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e84'),
//   order_id: 1005,
//   customer_id: 5,
//   product_id: 102,
//   quantity: 3,
//   order_date: '2024-03-07'
// }
db.customers.find({city:"Hyderabad"})
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e76'),
//   customer_id: 1,
//   name: 'Arjun',
//   city: 'Hyderabad'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e7a'),
//   customer_id: 5,
//   name: 'Priya',
//   city: 'Hyderabad'
// }
db.products.find({category:"Electronics"})
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7b'),
//   product_id: 101,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7c'),
//   product_id: 102,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7f'),
//   product_id: 105,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000
// }
db.products.find({price:{$gt:30000}})
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7b'),
//   product_id: 101,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7c'),
//   product_id: 102,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000
// }
db.orders.find({quantity:{$gt:1}})
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e82'),
//   order_id: 1003,
//   customer_id: 1,
//   product_id: 105,
//   quantity: 2,
//   order_date: '2024-03-03'
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e84'),
//   order_id: 1005,
//   customer_id: 5,
//   product_id: 102,
//   quantity: 3,
//   order_date: '2024-03-07'
// }
db.products.find().sort({price:-1})
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7b'),
//   product_id: 101,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7c'),
//   product_id: 102,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7f'),
//   product_id: 105,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7d'),
//   product_id: 103,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000
// }
// {
//   _id: ObjectId('69dcc3e5c6144e953bfd5e7e'),
//   product_id: 104,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000
// }
db.customers.find().sort({name:1})
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e79'),
//   customer_id: 4,
//   name: 'Amit',
//   city: 'Delhi'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e76'),
//   customer_id: 1,
//   name: 'Arjun',
//   city: 'Hyderabad'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e7a'),
//   customer_id: 5,
//   name: 'Priya',
//   city: 'Hyderabad'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e77'),
//   customer_id: 2,
//   name: 'Rahul',
//   city: 'Bangalore'
// }
// {
//   _id: ObjectId('69dcc3d7c6144e953bfd5e78'),
//   customer_id: 3,
//   name: 'Sneha',
//   city: 'Mumbai'
// }
db.orders.countDocuments()
//5
db.products.aggregate([{$group:{_id:null,avgPrice:{$avg:"$price"}}}])
// {
//   _id: null,
//   avgPrice: 35400
// }
db.products.aggregate([{$group:{_id:null,maxPrice:{$max:"$price"}}}])
// {
//   _id: null,
//   maxPrice: 75000
// }
db.orders.aggregate([{$group:{_id:"$product_id",totalQuantity:{$sum:"$quantity"}}}])
// {
//   _id: 103,
//   totalQuantity: 1
// }
// {
//   _id: 102,
//   totalQuantity: 4
// }
// {
//   _id: 101,
//   totalQuantity: 1
// }
// {
//   _id: 105,
//   totalQuantity: 2
// }
db.orders.aggregate([{$lookup:{from:"customers",localField:"customer_id",foreignField:"customer_id",as:"customer"}},{$unwind:"$customer"}])
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e80'),
//   order_id: 1001,
//   customer_id: 1,
//   product_id: 101,
//   quantity: 1,
//   order_date: '2024-03-01',
//   customer: {
//     _id: ObjectId('69dcc3d7c6144e953bfd5e76'),
//     customer_id: 1,
//     name: 'Arjun',
//     city: 'Hyderabad'
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e81'),
//   order_id: 1002,
//   customer_id: 2,
//   product_id: 102,
//   quantity: 1,
//   order_date: '2024-03-02',
//   customer: {
//     _id: ObjectId('69dcc3d7c6144e953bfd5e77'),
//     customer_id: 2,
//     name: 'Rahul',
//     city: 'Bangalore'
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e82'),
//   order_id: 1003,
//   customer_id: 1,
//   product_id: 105,
//   quantity: 2,
//   order_date: '2024-03-03',
//   customer: {
//     _id: ObjectId('69dcc3d7c6144e953bfd5e76'),
//     customer_id: 1,
//     name: 'Arjun',
//     city: 'Hyderabad'
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e83'),
//   order_id: 1004,
//   customer_id: 3,
//   product_id: 103,
//   quantity: 1,
//   order_date: '2024-03-05',
//   customer: {
//     _id: ObjectId('69dcc3d7c6144e953bfd5e78'),
//     customer_id: 3,
//     name: 'Sneha',
//     city: 'Mumbai'
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e84'),
//   order_id: 1005,
//   customer_id: 5,
//   product_id: 102,
//   quantity: 3,
//   order_date: '2024-03-07',
//   customer: {
//     _id: ObjectId('69dcc3d7c6144e953bfd5e7a'),
//     customer_id: 5,
//     name: 'Priya',
//     city: 'Hyderabad'
//   }
// }
db.orders.aggregate([{$lookup:{from:"products",localField:"product_id",foreignField:"product_id",as:"product"}},{$unwind:"$product"}])
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e80'),
//   order_id: 1001,
//   customer_id: 1,
//   product_id: 101,
//   quantity: 1,
//   order_date: '2024-03-01',
//   product: {
//     _id: ObjectId('69dcc3e5c6144e953bfd5e7b'),
//     product_id: 101,
//     name: 'Laptop',
//     category: 'Electronics',
//     price: 75000
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e81'),
//   order_id: 1002,
//   customer_id: 2,
//   product_id: 102,
//   quantity: 1,
//   order_date: '2024-03-02',
//   product: {
//     _id: ObjectId('69dcc3e5c6144e953bfd5e7c'),
//     product_id: 102,
//     name: 'Phone',
//     category: 'Electronics',
//     price: 50000
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e82'),
//   order_id: 1003,
//   customer_id: 1,
//   product_id: 105,
//   quantity: 2,
//   order_date: '2024-03-03',
//   product: {
//     _id: ObjectId('69dcc3e5c6144e953bfd5e7f'),
//     product_id: 105,
//     name: 'Tablet',
//     category: 'Electronics',
//     price: 30000
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e83'),
//   order_id: 1004,
//   customer_id: 3,
//   product_id: 103,
//   quantity: 1,
//   order_date: '2024-03-05',
//   product: {
//     _id: ObjectId('69dcc3e5c6144e953bfd5e7d'),
//     product_id: 103,
//     name: 'Desk',
//     category: 'Furniture',
//     price: 15000
//   }
// }
// {
//   _id: ObjectId('69dcc3f8c6144e953bfd5e84'),
//   order_id: 1005,
//   customer_id: 5,
//   product_id: 102,
//   quantity: 3,
//   order_date: '2024-03-07',
//   product: {
//     _id: ObjectId('69dcc3e5c6144e953bfd5e7c'),
//     product_id: 102,
//     name: 'Phone',
//     category: 'Electronics',
//     price: 50000
//   }
// }
db.orders.aggregate([{$lookup:{from:"customers",localField:"customer_id",foreignField:"customer_id",as:"customer"}},{$lookup:{from:"products",localField:"product_id",foreignField:"product_id",as:"product"}},{$unwind:"$customer"},{$unwind:"$product"},{$project:{_id:0,customer_name:"$customer.name",product_name:"$product.name"}}])
// {
//   customer_name: 'Arjun',
//   product_name: 'Laptop'
// }
// {
//   customer_name: 'Rahul',
//   product_name: 'Phone'
// }
// {
//   customer_name: 'Arjun',
//   product_name: 'Tablet'
// }
// {
//   customer_name: 'Sneha',
//   product_name: 'Desk'
// }
// {
//   customer_name: 'Priya',
//   product_name: 'Phone'
// }
db.orders.aggregate([{$lookup:{from:"products",localField:"product_id",foreignField:"product_id",as:"product"}},{$unwind:"$product"},{$group:{_id:"$product.name",totalSold:{$sum:"$quantity"}}}])
// {
//   _id: 'Tablet',
//   totalSold: 2
// }
// {
//   _id: 'Laptop',
//   totalSold: 1
// }
// {
//   _id: 'Phone',
//   totalSold: 4
// }
// {
//   _id: 'Desk',
//   totalSold: 1
// }
db.orders.aggregate([{$lookup:{from:"products",localField:"product_id",foreignField:"product_id",as:"product"}},{$unwind:"$product"},{$group:{_id:"$product.name",revenue:{$sum:{$multiply:["$quantity","$product.price"]}}}}])
// {
//   _id: 'Tablet',
//   revenue: 60000
// }
// {
//   _id: 'Laptop',
//   revenue: 75000
// }
// {
//   _id: 'Phone',
//   revenue: 200000
// }
// {
//   _id: 'Desk',
//   revenue: 15000
// }
db.orders.aggregate([{$lookup:{from:"products",localField:"product_id",foreignField:"product_id",as:"product"}},{$lookup:{from:"customers",localField:"customer_id",foreignField:"customer_id",as:"customer"}},{$unwind:"$product"},{$unwind:"$customer"},{$group:{_id:"$customer.name",revenue:{$sum:{$multiply:["$quantity","$product.price"]}}}}])
// {
//   _id: 'Priya',
//   revenue: 150000
// }
// {
//   _id: 'Rahul',
//   revenue: 50000
// }
// {
//   _id: 'Arjun',
//   revenue: 135000
// }
// {
//   _id: 'Sneha',
//   revenue: 15000
// }
db.orders.aggregate([{$group:{_id:"$product_id",totalSold:{$sum:"$quantity"}}},{$sort:{totalSold:-1}},{$limit:1}])
// {
//   _id: 102,
//   totalSold: 4
// }