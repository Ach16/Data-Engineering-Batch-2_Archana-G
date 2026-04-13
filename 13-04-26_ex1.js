use retail_db
// switched to db retail_db
db.products.insertMany([
  { _id: 1, name: "Laptop", category: "Electronics", price: 75000, stock: 10, city: "Hyderabad" },
  { _id: 2, name: "Phone", category: "Electronics", price: 50000, stock: 15, city: "Bangalore" },
  { _id: 3, name: "Chair", category: "Furniture", price: 7000, stock: 20, city: "Mumbai" },
  { _id: 4, name: "Desk", category: "Furniture", price: 15000, stock: 8, city: "Delhi" },
  { _id: 5, name: "Tablet", category: "Electronics", price: 30000, stock: 12, city: "Chennai" },
  { _id: 6, name: "Printer", category: "Electronics", price: 12000, stock: 5, city: "Hyderabad" }
])
//Basic Queries
//1. Display all documents from the **products** collection.
db.products.find()
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//2. Display all products that belong to the **Electronics** category.
db.products.find({category:'Electronics'})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//3. Display all products that are available in **Hyderabad**.
db.products.find({city:'Hyderabad'})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//4. Display products whose **price is greater than 30000**.
db.products.find({price:{$gt:30000}})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }

//5. Display products whose **price is less than 20000**.
db.products.find({price:{$lt:20000}})
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//6. Display products whose **price is between 10000 and 50000**.
db.products.find({price:{$gte:10000,$lte:50000}})
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//7. Display all products that belong to the **Furniture** category.
db.products.find({category:'Furniture'})
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }

//8. Display products that belong to the **Electronics category and are located in Hyderabad**.
db.products.find({category:'Electronics',city:'Hyderabad'})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//9. Display products that belong to **Hyderabad or Bangalore**.
db.products.find({city:{$in:['Hyderabad','Bangalore']}})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//10. Display products that **do not belong to the Furniture category**.
db.products.find({category:{$ne:'Furniture'}})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//11. Display **only the name and price** of all products.
db.products.find({},{name:1,price:1,_id:0})
// {
//   name: 'Laptop',
//   price: 75000
// }
// {
//   name: 'Phone',
//   price: 50000
// }
// {
//   name: 'Chair',
//   price: 7000
// }
// {
//   name: 'Desk',
//   price: 15000
// }
// {
//   name: 'Tablet',
//   price: 30000
// }
// {
//   name: 'Printer',
//   price: 12000
// }

//12. Display **name, category, and city** for all products.
db.products.find({},{name:1,category:1,city:1,_id:0})
// {
//   name: 'Laptop',
//   category: 'Electronics',
//   city: 'Hyderabad'
// }
// {
//   name: 'Phone',
//   category: 'Electronics',
//   city: 'Bangalore'
// }
// {
//   name: 'Chair',
//   category: 'Furniture',
//   city: 'Mumbai'
// }
// {
//   name: 'Desk',
//   category: 'Furniture',
//   city: 'Delhi'
// }
// {
//   name: 'Tablet',
//   category: 'Electronics',
//   city: 'Chennai'
// }
// {
//   name: 'Printer',
//   category: 'Electronics',
//   city: 'Hyderabad'
// }

//13. Display all products **sorted by price in ascending order**.
db.products.find().sort({price:1})
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }

//14. Display all products **sorted by price in descending order**.
db.products.find().sort({price:-1})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }

//15. Display the **top 3 most expensive products**.
db.products.find().sort({price:-1}).limit(3)
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }

//16. Display the **2 cheapest products**.
db.products.find().sort({price:1}).limit(2)
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//17. Display all products **skipping the first two documents**.
db.products.find().skip(2)
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//18. Display products whose **stock is greater than 10**.
db.products.find({stock:{$gt:10}})
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }

//19. Display products whose **stock is less than or equal to 10**.
db.products.find({stock:{$lte:10}})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//20. Display **Electronics products with price greater than 40000**.
db.products.find({category:'Electronics',price:{$gt:40000}})
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 75000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }

//21. Update the **price of the product named "Laptop"**.
db.products.updateOne({name:'Laptop'},{$set:{price:60000}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
db.products.find()
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 60000,
//   stock: 10,
//   city: 'Hyderabad'
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore'
// }
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai'
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad'
// }

//22. Add a new field called **discount = 10** for all **Electronics products**.
db.products.updateMany({category:'Electronics'},{$set:{discount:10}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 4,
//   modifiedCount: 4,
//   upsertedCount: 0
// }
db.products.find()
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 60000,
//   stock: 10,
//   city: 'Hyderabad',
//   discount: 10
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore',
//   discount: 10
// }
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai',
//   discount: 10
// }
// {
//   _id: 6,
//   name: 'Printer',
//   category: 'Electronics',
//   price: 12000,
//   stock: 5,
//   city: 'Hyderabad',
//   discount: 10
// }

//23. Delete the product whose **name is "Printer"**.
db.products.deleteOne({name:'Printer'})
// {
//   acknowledged: true,
//   deletedCount: 1
// }
db.products.find()
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 60000,
//   stock: 10,
//   city: 'Hyderabad',
//   discount: 10
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore',
//   discount: 10
// }
// {
//   _id: 3,
//   name: 'Chair',
//   category: 'Furniture',
//   price: 7000,
//   stock: 20,
//   city: 'Mumbai'
// }
// {
//   _id: 4,
//   name: 'Desk',
//   category: 'Furniture',
//   price: 15000,
//   stock: 8,
//   city: 'Delhi'
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai',
//   discount: 10
// }

//24. Delete all products belonging to the **Furniture category**.
db.products.deleteMany({category:'Furniture' })
// {
//   acknowledged: true,
//   deletedCount: 2
// }
db.products.find()
// {
//   _id: 1,
//   name: 'Laptop',
//   category: 'Electronics',
//   price: 60000,
//   stock: 10,
//   city: 'Hyderabad',
//   discount: 10
// }
// {
//   _id: 2,
//   name: 'Phone',
//   category: 'Electronics',
//   price: 50000,
//   stock: 15,
//   city: 'Bangalore',
//   discount: 10
// }
// {
//   _id: 5,
//   name: 'Tablet',
//   category: 'Electronics',
//   price: 30000,
//   stock: 12,
//   city: 'Chennai',
//   discount: 10
// }

//25. Count the **total number of products**.
db.products.countDocuments()
// 3

//26. Count the number of products belonging to the **Electronics category**.a
db.products.countDocuments({category:'Electronics'})
// 3               

//27. Calculate the **total stock available for each category**.                                              ^
db.products.aggregate([{$group: {_id: "$category",totalStock:{$sum:"$stock"}}}])
// {
//   _id: 'Electronics',
//   totalStock: 37
// }

//28. Calculate the **average price of products for each category**.
db.products.aggregate([{$group: {_id: "$category",AvgPrice:{$avg:"$price"}}}])
// {
//   _id: 'Electronics',
//   AvgPrice: 46666.666666666664
// }

//29. Find the **maximum product price**.
db.products.aggregate([{$group: {_id:null,MaxPrice:{$max:"$price"}}}])
// {
//   _id: null,
//   MaxPrice: 60000
// }

//30. Calculate the **total inventory value** (price × stock of all products).
db.products.aggregate([{$group: {_id:null,total:{$sum:{$multiply:["$price","$stock"]}}}}])
// {
//   _id: null,
//   total: 1710000
// }