# Python Data Structures

# Exercise 1 – Remove Duplicates from a List
customers = [101,102,103,101,104,102,105]

# Tasks
# 1. Remove duplicate IDs
unique_ids=set(customers)

# 2. Print unique customers
print("Unique customers: ",unique_ids)

# 3. Print total number of unique customers
print("Total no. of unique customers: ",len(unique_ids))

# Exercise 2 – Frequency Counter
numbers = [10,20,10,30,20,10,40]
# Tasks
# 1. Count how many times each number appears
# 2. Store the result in a dictionary
freq={}
for num in  numbers:
    freq[num]=freq.get(num,0)+1
print("Frequency counter",freq)
# Expected structure
# {10:3, 20:2, 30:1, 40:1}

# Exercise 3 – Student Marks Analyzer
students = {
"Rahul":85,
"Sneha":92,
"Arjun":78,
"Priya":88
}
# Tasks
# 1. Print the topper
topper=max(students,key=students.get)
print("Topper: ",topper)

# 2. Print average marks
avg_mark=sum(students.values())/len(students)
print("Average mark: ",avg_mark)

# 3. Print students scoring above 85
flt=[name for name,mark in students.items() if mark>85]
print("Students who scored above 85: ",flt)

# Exercise 4 – Inventory Management
inventory = {
"laptop":10,
"mouse":25,
"keyboard":15
}

# Tasks
# 1. Add "monitor":8
inventory["monitor"]=8
print("After adding monitor: ",inventory)

# 2. Reduce laptop stock by 2
inventory["laptop"]-=2
print("After updating stocks of laptop: ",inventory)

# 3. Print items with stock less than 10
items=[name for name,stock in inventory.items() if stock<10]
print("Items with stock less than 10: ",items)

# Exercise 5 – Email Domain Extractor
emails = [
"user1@gmail.com",
"user2@yahoo.com",
"user3@gmail.com",
"user4@outlook.com"
]

# Tasks
# 1. Extract domains
domains=[]
domain_count={}
for email in emails:
    domain=email.split("@")[1]
    domains.append(domain)
    domain_count[domain]=domain_count.get(domain,0)+1
print("Domains: ",domains)

# 2. Count how many users per domain
print("Domain count: ",domain_count)

# Expected output
# {
# "gmail.com":2,
# "yahoo.com":1,
# "outlook.com":1
# }

# Exercise 6 – Common Students in Two
# Classes
classA = {"Rahul","Sneha","Amit","Neha"}
classB = {"Sneha","Amit","Karan","Riya"}

# Tasks
# 1. Students in both classes
print("Students in both classes: ",classA.intersection(classB))

# 2. Students only in Class A
print("Students only in classA: ",classA.difference(classB))

# 3. All unique students
print("All unique students: ",classA.union(classB))

# Exercise 7 – Product Price Update
products = {
"Laptop":75000,
"Mobile":30000,
"Tablet":25000
}

# Tasks
# 1. Increase all prices by 10%
for p in products:
    products[p]*=1.10

# 2. Print updated prices
print("Updated products: ",products)

# Exercise 8 – Word Counter
sentence = "python is easy and python is powerful"

# Tasks
# 1. Count frequency of each word
# 2. Store results in dictionary
words=sentence.split()
freq={}
for word in words:
    freq[word]=freq.get(word,0)+1
print("Frequency of each word: ",freq)

# Expected output
# {
# "python":2,
# "is":2,
# "easy":1,
# "and":1,
# "powerful":1
# }

# Exercise 9 – Highest Selling Product
sales = [
{"product":"Laptop","qty":5},
{"product":"Mouse","qty":20},
{"product":"Laptop","qty":3},
{"product":"Keyboard","qty":10}
]

# Tasks
# 1. Calculate total sales per product
total_sales = {}
for s in sales:
    prod=s["product"]
    qty=s["qty"]
    total_sales[prod]=total_sales.get(prod,0)+qty
print("Total sales:",total_sales)

# 2. Find highest selling product
highest_selling_prod=max(total_sales,key=total_sales.get)
print("Highest selling:",highest_selling_prod)

# Exercise 10 – User Login Tracker
logins = [
("Rahul","10:00"),
("Sneha","10:10"),
("Rahul","11:00"),
("Arjun","11:15"),
("Sneha","11:30")
]
# Tasks
# 1. Count how many times each user logged in
# 2. Store results in dictionary
freq={}
for user,time in logins:
    freq[user]=freq.get(user,0)+1
print("User login count: ",freq)

# Expected output
# {
# "Rahul":2,
# "Sneha":2,
# "Arjun":1
# }

# Final Challenge
# Exercise 11 – E-commerce Order Analysis
orders = [
{"order_id":1,"customer":"Rahul","amount":2500},
{"order_id":2,"customer":"Sneha","amount":1800},
{"order_id":3,"customer":"Rahul","amount":3200},
{"order_id":4,"customer":"Amit","amount":1500}
]
# Tasks
# 1. Calculate total spending per customer
spending={}
order_count={}
for o in orders:
    cust=o["customer"]
    amt=o["amount"]
    spending[cust]=spending.get(cust,0)+amt
    order_count[cust]=order_count.get(cust,0)+1
print("Total Spending:", spending)

# 2. Find highest spending customer
highest_spending_cust=max(spending, key=spending.get)
print("Top customer:",highest_spending_cust)

# 3. Count total orders per customer
print("Order count:",order_count)
