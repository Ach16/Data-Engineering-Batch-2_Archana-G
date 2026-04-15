CREATE TABLE sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    city VARCHAR(50),
    product VARCHAR(100),
    category VARCHAR(50),
    quantity INT,
    price DECIMAL(10,2),
    sale_date DATE,
    sales_rep VARCHAR(100)
);


INSERT INTO sales (customer_name, city, product, category, quantity, price, sale_date, sales_rep)
VALUES
('Aarav Sharma', 'Hyderabad', 'Laptop', 'Electronics', 2, 55000, '2026-03-01', 'Rohan'),
('Priya Reddy', 'Bangalore', 'Mouse', 'Electronics', 5, 800, '2026-03-02', 'Sneha'),
('Rahul Verma', 'Mumbai', 'Chair', 'Furniture', 1, 7000, '2026-03-03', 'Kiran'),
('Sneha Kapoor', 'Delhi', 'Notebook', 'Stationery', 10, 120, '2026-03-04', 'Rohan'),
('Vikram Singh', 'Chennai', 'Tablet', 'Electronics', 3, 22000, '2026-03-05', 'Sneha'),
('Meera Nair', 'Hyderabad', 'Desk', 'Furniture', 2, 15000, '2026-03-06', 'Kiran'),
('Kunal Joshi', 'Pune', 'Printer', 'Electronics', 1, 12000, '2026-03-07', 'Rohan'),
('Ananya Das', 'Kolkata', 'Pen', 'Stationery', 20, 50, '2026-03-08', 'Sneha'),
('Suresh Kumar', 'Hyderabad', 'Bookshelf', 'Furniture', 1, 9000, '2026-03-09', 'Kiran'),
('Pooja Shah', 'Ahmedabad', 'Monitor', 'Electronics', 2, 18000, '2026-03-10', 'Rohan');

select * from sales;

select customer_name,product,price from sales;

select distinct city from sales;

select *
from sales
where city='Hyderabad';

select *
from sales
where category = 'Electronics';

select *
from sales
where price > 10000;

select *
from sales
where quantity >= 2;

select upper(customer_name) as customer_name
from sales;

select lower(product) as product
from sales;

select concat(customer_name,' - ',city) as customer_info
from sales;

select substring(product,1,3) as short_product
from sales;

select 
    sale_date,
    YEAR(sale_date) as sales_year
from sales;

select MONTH(sale_date) as sales_month
from sales;

select dayname(sale_date) as day_name
from sales;

select quantity * price as total_sales
from sales;

-- 2. Round the price
select round(price) as rounded_price
from sales;

-- 3. Display price / 2
select price/2 as updated_price
from sales;

-- Exercise 6 — Aggregate Functions
-- 1. Total number of sales
select count(*) as total_sales
from sales;

-- 2. Total quantity sold
select sum(quantity) as total_qty
from sales;

-- 3. Average price
select avg(price) as avg_price
from sales;

-- 4. Maximum price
select max(price) as max_price
from sales;

-- 5. Minimum price
select min(price) as min_price
from sales;

-- Exercise 7 — GROUP BY
-- 1. Show total quantity sold per city
select city,sum(quantity) as total_qty
from sales
group by city;

-- 2. Show total quantity sold per category
select category,sum(quantity) as total_qty
from sales
group by category;

-- 3. Show total sales per sales_rep
select sales_rep,sum(quantity*price) as total_sales
from sales
group by sales_rep;

-- Exercise 8 — HAVING
-- 1. Show cities where total quantity > 3
select city,sum(quantity)
from sales
group by city
having sum(quantity)>3;

-- 2. Show categories where total sales > 20000
select category,sum(quantity*price) as total_sales
from sales
group by category
having total_sales>20000;

-- Exercise 9 — ORDER BY
-- 1. Show records sorted by price
select *
from sales
order by price;

-- 2. Show records sorted by sale_date
select *
from sales
order by sale_date;

-- 3. Show records sorted by quantity (descending)
select *
from sales
order by quantity desc;

-- Exercise 10 — Mixed
-- 1. Show Electronics sales sorted by price
select *
from sales
where category='Electronics'
order by price ;

-- 2. Show total sales per city
select city,sum(quantity*price) as total_sales
from sales
group by city;

-- 3. Show cities where total sales > 30000
select city,sum(quantity*price) as total_sales
from sales
group by city;

-- One Final Practice Query
-- Students combine everything:
SELECT city,
SUM(quantity * price) AS total_sales
FROM sales
GROUP BY city
HAVING total_sales > 20000
ORDER BY total_sales DESC;
