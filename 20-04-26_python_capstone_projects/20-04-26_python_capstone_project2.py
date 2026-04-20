# Python Capstone Project
# E-Commerce Order Analytics System
import json,csv

# The program should generate a sales and customer report.

# Part 1 — Website Visit Analysis (TXT)

# Task 1-Read website_visits.txt .
def load_visits():
    with open("website_visits.txt", "r") as file:
        return [line.strip() for line in file]
visitors=load_visits()

# Task 2- Print all visitors.
print("Visitors: ",visitors)

# Task 3-Find the total number of visits.
print("Total number of visitors: ",len(visitors))

# Task 4-Find unique visitors using a set.
unique_visitors=set(visitors)
print("Unique visitors: ",unique_visitors)

# Task 5-Count how many times each visitor came to the website.
visitor_freq={}
for v in visitors:
    visitor_freq[v]=visitor_freq.get(v,0)+1
print(visitor_freq)

# Task 6-Find the most frequent visitor.
max_visits=max(visitor_freq.values())
freq_visitor=[visitor for visitor,visits in visitor_freq.items() if visits==max_visits]
print("Most frequent visitor: ",freq_visitor," with ",max_visits," visits")

# Part 2 — Product Catalog Analysis (JSON)

# Task 7-Read products.json .
def load_products():
    with open("products.json", "r") as file:
        return json.load(file)
data=load_products()['products']

# Task 8-Print all product names and prices.
print("product name\tprice")
for p in data:
    print(p['name'],"\t",p['price'])

# Task 9- Store product information in a dictionary.
products={}
for p in data:
    products[p['product_id']]={"name":p['name'],"price":p['price']}
print("Products: ")
print(products)

# Task 10-Find the most expensive product.
max_price=max(products.values(),key=lambda x:x["price"])
print("Most expensive product: ",max_price['name'])

# Task 11-Find the least expensive product.
min_price =min(products.values(),key=lambda x:x["price"])
print("Least expensive product: ",min_price['name'])

# Part 3 — Orders Analysis (CSV)

# Task 12-Read orders.csv .
def load_orders():
    orders=[]
    with open("orders.csv", "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            row['quantity'] = int(row['quantity'])
            row['product_id'] = int(row['product_id'])
            orders.append(row)
    return orders
orders=load_orders()

# Task 13-Print each order.
for o in orders:
    print(o)

# Task 14-Calculate the total quantity sold per product.
qty={}
for o in orders:
    qty[o['product_id']]=qty.get(o['product_id'],0)+o['quantity']
print("Quantity sold per product: ",qty)

# Task 15-Calculate total orders per customer.
cust={}
for o in orders:
    cust[o['customer']]=cust.get(o['customer'],0)+1
print("Orders per customer: ",cust)

# Part 4 — Sales Calculation

total_rev=0
prod_rev={}
o_rev={}
for o in orders:
    p_id=o['product_id']
    qty=o['quantity']
    price=products[p_id]['price']
    name=products[p_id]['name']
    revenue=qty*price
    total_rev+=revenue
    o_rev[o['order_id']]=o_rev.get(o['order_id'],0)+revenue
    prod_rev[name]=prod_rev.get(name, 0)+revenue

# Task 16-Calculate revenue for each order.
print("Revenue for each order: ",o_rev)

# Task 17-Calculate total revenue.
print("Total revenue:", total_rev)

# Task 18-Calculate total revenue per product.
print("Total revenue per product:", prod_rev)

# Task 19-Find the highest selling product by revenue.
highest_selling_prod=max(prod_rev,key=prod_rev.get)
print("Highest selling product:", highest_selling_prod,prod_rev[highest_selling_prod])

# Part 5 — Customer Analysis

# Task 20-Calculate total spending per customer.
cust_spending={}
for o in orders:
    p_id=o['product_id']
    qty=o['quantity']
    price=products[p_id]['price']
    total_spending=qty*price
    cust_spending[o['customer']]=cust_spending.get(o['customer'],0)+total_spending
print("Customer spending: ",cust_spending)

# Task 21-Find the highest spending customer.
highest_spending_cust=max(cust_spending,key=cust_spending.get)
print("Highest spending customer: ", highest_spending_cust,cust_spending[highest_spending_cust])

# Task 22-Find customers who spent more than ₹50,000.
cust_50k=[c for c,s in cust_spending.items() if s>50000]
print("customers who spent more than 50000: ",cust_50k)

# Part 6 — Functions

# Task 23-Load visits from TXT.
# written in task 1
# def load_visits():
#     with open("website_visits.txt", "r") as file:
#         visitors=[line.strip() for line in file]
#     return visitors

# Task 24-Load product catalog from JSON.
# written in task 7
# def load_products():
#     with open("products.json", "r") as file:
#         return json.load(file)

# Task 25-Load orders from CSV.
# written in task 12
# def load_orders():
#     orders=[]
#     with open("orders.csv", "r") as file:
#         reader = csv.DictReader(file)
#         for row in reader:
#             row['quantity'] = int(row['quantity'])
#             row['product_id'] = int(row['product_id'])
#             orders.append(row)
#     return orders

# Task 26-Calculate product revenue.
# already did in task 18

# Task 27-Calculate customer spending.
# already did in task 20

# Task 28-Find top customer.
# already did in task 21

# Part 7 — Data Structures
# Use:
# list → store orders
# dictionary → store product prices
# set → store unique visitors
# tuple → represent (product_name, revenue) pairs

# Part 8 — Final Report Generation
with open("sales_report.txt","w") as file:
    file.write("E-Commerce Sales Report\n\n")
    file.write(f"Total Website Visits: {len(visitors)}\n")
    file.write(f"Unique Visitors: {len(unique_visitors)}\n\n")
    file.write(f"Total Revenue: {total_rev}\n\n")
    file.write(f"Top Customer: {highest_spending_cust}\n\n")
    file.write("Product Sales:\n")
    for p, rev in prod_rev.items():
        file.write(f"{p} -> {rev}\n")

# Final Challenge

# Task 29-Find visitors who visited but never ordered anything.
cust_ordered=set(cust_spending.keys())
never_ordered_cust=unique_visitors.difference(cust_ordered)
print("Customers who visited but never ordered:",never_ordered_cust)

# Task 30-Find customers who ordered but never visited the website more than once.
less_visited_cust=[c for c in cust_ordered if visitor_freq.get(c,0)<=1]
print("Customers who visited <=1:",less_visited_cust)