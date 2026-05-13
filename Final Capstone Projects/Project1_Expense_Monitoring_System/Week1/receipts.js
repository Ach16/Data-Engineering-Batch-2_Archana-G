use expense_monitoring_system

db.createCollection("receipts")

db.receipts.insertMany([

{
receipt_id:1,user_id:1,user_name:"Priyanka Sharma",store_name:"Swiggy",purchase_date:new Date("2026-03-25"),payment_method:"UPI",category:"Food",total_amount:450,
items:[
{item_name:"Burger Combo",quantity:1,price:250},
{item_name:"French Fries",quantity:1,price:200}
],
notes:"Dinner order with online payment"
},

{
receipt_id:2,user_id:1,user_name:"Priyanka Sharma",store_name:"RedBus",purchase_date:new Date("2026-03-29"),payment_method:"Card",category:"Travel",total_amount:1200,
items:[
{item_name:"Bus Ticket",quantity:1,price:1200}
],
notes:"Travel booking to Chennai"
},

{
receipt_id:3,user_id:2,user_name:"Ankit Sharma",store_name:"Amazon",purchase_date:new Date("2026-04-02"),payment_method:"Card",category:"Shopping",total_amount:5000,
items:[
{item_name:"Wireless Headphones",quantity:1,price:5000}
],
notes:"Electronics purchase"
},

{
receipt_id:4,user_id:3,user_name:"Sonakshi Sharma",store_name:"TNEB",purchase_date:new Date("2026-04-15"),payment_method:"UPI",category:"Bills",total_amount:2500,
items:[
{item_name:"Electricity Bill",quantity:1,price:2500}
],
notes:"Monthly EB payment"
},

{receipt_id:5,user_id:2,user_name:"Ankit Sharma",store_name:"Myntra",purchase_date:new Date("2026-04-23"),payment_method:"Card",category:"Shopping",total_amount:3000,
items:[
{item_name:"Shirts",quantity:2,price:1800},
{item_name:"Jeans",quantity:1,price:1200}
],
notes:"Fashion shopping"
},

{
receipt_id:6,user_id:3,user_name:"Sonakshi Sharma",store_name:"House rent",purchase_date:new Date("2026-05-05"),payment_method:"Cash",category:"Bills",total_amount:10000,
items:[
{item_name:"Monthly House Rent",quantity:1,price:10000}
],
notes:"May month rent payment"
},

{
receipt_id:7,user_id:2,user_name:"Ankit Sharma",store_name:"Netflix",purchase_date:new Date("2026-05-07"),payment_method:"UPI",category:"Entertainment",total_amount:199,
items:[
{
item_name:"Netflix Subscription",quantity:1,price:199}
],
notes:"Monthly OTT subscription"
},

{
receipt_id:8,user_id:4,user_name:"Karan Sharma",store_name:"Hotel",purchase_date:new Date("2026-05-10"),payment_method:"Card",category:"Travel",total_amount:5000,
items:[
{item_name:"Hotel Room Booking",quantity:1,price:5000}
],
notes:"Travel accommodation booking"
}

])

db.receipts.find()

db.receipts.createIndex(
{
user_id:1
}
)

db.receipts.createIndex(
{
receipt_id:1
}
)

db.receipts.createIndex(
{
store_name:1
}
)

db.receipts.getIndexes()