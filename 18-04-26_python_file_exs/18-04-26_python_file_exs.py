import json,csv

# Exercise 1 — TXT File (Login Logs)

# 1. Read the file and print all names.
with open("logins.txt", "r") as file:
    for line in file:
        print(line.strip())

# 2. Count the total number of login records.
with open("logins.txt", "r") as file:
    logins=file.readlines()
print("Total number of login records: ",len(logins))

# 3. Find how many times each user logged in.
freq={}
with open("logins.txt","r") as file:
    for line in file:
        user=line.strip()
        freq[user]=freq.get(user,0)+1
print(freq)

# 4. Find the user who logged in the most.
max_user=None
max_count=0
for user,count in freq.items():
    if count>max_count:
        max_count=count
        max_user=user
print("Most logged in user:",max_user,"-",max_count)

# 5. Print the unique users.
unique_users=set(freq.keys())
print("Unique users: ",unique_users)

# Exercise 2 — TXT File (Numbers Dataset)

# 1. Read all numbers from the file.

with open("numbers.txt", "r") as file:
    a=int(next(file).strip())
    nos_sum=a
    min_num=a
    max_num=a
    count=1 if a>50 else 0
    for line in file:
        num=int(line.strip())
        # 2. Calculate the sum of all numbers.
        nos_sum+=num
        # 3. Find the maximum number.
        if num>max_num:
            max_num=num
        # 4. Find the minimum number.
        if num<min_num:
            min_num=num
        # 5. Count how many numbers are greater than 50.
        if num>50:
            count+=1
print("Sum of numbers: ",nos_sum)
print("Minimum number: ",min_num)
print("Maximum number: ",max_num)
print("Count of numbers greater than 50: ",count)

# Exercise 3 — JSON File (Student Dataset)
# 1. Print all student names.
with open("students.json", "r") as file:
    data=json.load(file)
for s in data['students']:
    print(s['name'])

# 2. Print students enrolled in Python course.
print("Students enrolled in python: ")
for s in data['students']:
    if s["course"]=="Python":
        print(s["name"])

# 3. Find the student with highest marks.
max_num=0
for s in data['students']:
    if s['marks']>max_num:
        max_num=s['marks']
        name=s['name']
print("Students with highest marks: ",name,"-",max_num)

# 4. Calculate average marks.
marks_sum=0
for s in data['students']:
    marks_sum+=s['marks']
print("Average marks: ",marks_sum/len(data['students']))

# 5. Count how many students are enrolled in each course.
freq={}
for s in data['students']:
    course=s['course']
    freq[course]=freq.get(course,0)+1
print("Number of students enrolled in each course: ",freq)

# Exercise 4 — JSON File (E-commerce Orders)
# 1. Print all orders.
with open("orders.json", "r") as file:
    data=json.load(file)
print(data)

total=0
spending={}
freq={}
for order in data['orders']:
    # 2. Calculate total revenue
    total+=order['amount']
    # 3. Find total spending per customer.
    customer = order['customer']
    spending[customer] = spending.get(customer, 0)+order['amount']
    # 5. Count total orders per customer.
    freq[customer]=freq.get(customer,0)+1
print("Total revenue: ",total)
print("Total spending per customer: ",spending)
print("Total orders count per customer: ",freq)

# 4. Find the highest spending customer.
max_amt=0
cust=None
for customer,amt in spending.items():
    if amt>max_amt:
        max_amt=amt
        cust=customer
print("The highest spending customer is: ",cust,"-",max_amt)

# Exercise 5 — CSV File (Employee Dataset)
# 1. Print all employee names.
with open("employees.csv","r") as file:
    reader=csv.DictReader(file)
    print("employee names: ")
    for row in reader:
        print(row["name"])

# 2. Find employees working in IT department.
sal_sum=0
count=0
max_sal=0
freq={}
emp=None
print("Employees working in IT: ")
with open("employees.csv","r") as file:
    reader=csv.DictReader(file)
    for row in reader:
        count+=1
        salary=int(row["salary"])
        dept=row['department']
        if dept=="IT":
            print(row["name"])
        sal_sum+=salary
        if salary>max_sal:
            max_sal=salary
            emp=row['name']
        freq[dept]=freq.get(dept,0)+1

# 3. Calculate the average salary.
print("Average salary: ",sal_sum/count)

# 4. Find the highest salary employee.
print("Highest salary employee: ",emp,"-",max_sal)

# 5. Count how many employees belong to each department.
print("Employee count per department: ",freq)

# Exercise 6 — CSV File (Sales Dataset)
total=0
qty={}
rev={}
with open("sales.csv","r") as file:
    reader=csv.DictReader(file)
    for row in reader:
        # 1. Calculate total sales revenue.
        revenue=int(row['price'])*int(row['quantity'])
        total+=revenue
        # 2. Find total quantity sold per product.
        prod=row['product']
        qty[prod]=qty.get(prod,0)+int(row['quantity'])
        # 4. Calculate total revenue per product.
        rev[prod]=rev.get(prod,0)+revenue
print("Total revenue: ",total)
print("Total quantity sold per product: ",qty)
print("Total revenue per product: ",rev)

# 3. Find the product with highest sales.
max_sales=0
pd=None
for prod,qt in qty.items():
    if qt>max_sales:
        max_sales=qt
        pd=prod
print("Product with highest sales: ",pd,"-",max_sales)

# 5. Print products with sales above 50,000.
print("Products with revenue above 50000: ")
for prod,revenue in rev.items():
    if revenue>50000:
        print(prod,revenue)

# Bonus Challenge
print("Product Sales Summary:")
for prod in qty:
    print(f"{prod} → Qty: {qty[prod]} Revenue: {rev[prod]}")