CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price > 0),
    discount_percent DECIMAL(5,2) DEFAULT 0 CHECK (discount_percent >= 0 AND discount_percent <= 50),
    order_date DATE NOT NULL,
    payment_mode VARCHAR(30) NOT NULL,
    sales_rep VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'Completed',
    CONSTRAINT chk_status CHECK (status IN ('Completed', 'Pending', 'Cancelled'))
);


INSERT INTO orders
(customer_name, city, product_name, category, quantity, unit_price, discount_percent, order_date, payment_mode, sales_rep, status)
VALUES
('Aarav Sharma',   'Hyderabad', 'Laptop',        'Electronics', 2, 55000.00, 10, '2026-03-01', 'Credit Card', 'Rohan Mehta', 'Completed'),
('Priya Reddy',    'Bengaluru', 'Mouse',         'Electronics', 5,   800.00,  5, '2026-03-02', 'UPI',         'Sneha Iyer',  'Completed'),
('Rahul Verma',    'Mumbai',    'Desk Chair',    'Furniture',   1,  7000.00, 15, '2026-03-03', 'Cash',        'Kiran Patel', 'Pending'),
('Sneha Kapoor',   'Delhi',     'Notebook Pack', 'Stationery', 10,   120.00,  0, '2026-03-04', 'UPI',         'Rohan Mehta', 'Completed'),
('Vikram Singh',   'Chennai',   'Tablet',        'Electronics', 3, 22000.00,  8, '2026-03-05', 'Debit Card',  'Sneha Iyer',  'Completed'),
('Meera Nair',     'Hyderabad', 'Office Desk',   'Furniture',   2, 15000.00, 12, '2026-03-06', 'Credit Card', 'Kiran Patel', 'Cancelled'),
('Kunal Joshi',    'Pune',      'Printer',       'Electronics', 1, 12000.00,  7, '2026-03-07', 'Cash',        'Rohan Mehta', 'Completed'),
('Ananya Das',     'Kolkata',   'Pen Set',       'Stationery', 20,    50.00,  0, '2026-03-08', 'UPI',         'Sneha Iyer',  'Completed'),
('Suresh Kumar',   'Hyderabad', 'Bookshelf',     'Furniture',   1,  9000.00, 10, '2026-03-09', 'Credit Card', 'Kiran Patel', 'Pending'),
('Pooja Shah',     'Ahmedabad', 'Monitor',       'Electronics', 2, 18000.00,  6, '2026-03-10', 'Debit Card',  'Rohan Mehta', 'Completed'),
('Imran Ali',      'Bengaluru', 'Keyboard',      'Electronics', 4,  1500.00,  5, '2026-03-11', 'UPI',         'Sneha Iyer',  'Completed'),
('Neha Gupta',     'Delhi',     'Whiteboard',    'Stationery',  3,  2500.00,  4, '2026-03-12', 'Cash',        'Kiran Patel', 'Completed'),
('Farhan Ahmed',   'Chennai',   'Smartphone',    'Electronics', 2, 30000.00,  9, '2026-03-13', 'Credit Card', 'Rohan Mehta', 'Completed'),
('Lakshmi Iyer',   'Pune',      'Study Table',   'Furniture',   1, 11000.00, 11, '2026-03-14', 'UPI',         'Sneha Iyer',  'Cancelled'),
('Aditya Rao',     'Mumbai',    'Marker Box',    'Stationery', 15,   200.00,  0, '2026-03-15', 'Debit Card',  'Kiran Patel', 'Completed');

select * from orders;

select 
    order_id,
    customer_name,
    product_name,
    quantity,
    unit_price,
    quantity* unit_price as gross_amount,
    (quantity* unit_price) *discount_percent/100 as discount_amount,
    (quantity* unit_price) - ((quantity* unit_price)*discount_percent/100) as net_amount
from orders;

select
    customer_name,
    UPPER(customer_name) as upper_name,
    LOWER(city) as lower_city,
    CONCAT(customer_name,' - ',city) as customer_info,
    LENGTH(product_name) as product_length,
    SUBSTRING(product_name,1,4) as short_product
from orders;
     
select
    order_id,
    order_date,
    YEAR(order_date) as order_year,
    MONTH(order_date) as order_month,
    DAY(order_date) as order_day,
    MONTHNAME(order_date) as month_name,
    DAYNAME(order_date) as day_name
from orders;

SELECT TIMESTAMPDIFF(YEAR, '2005-05-16', CURDATE()) AS age;

SELECT
    COUNT(*) as total_orders,
    SUM(quantity) as total_quantity,
    AVG(unit_price) as avg_unit_price,
    MIN(unit_price) as min_price,
    MAX(unit_price) as max_price
from orders;

select
    category,
    count(*) as total_orders,
    sum(quantity) as total_qty,
    avg(unit_price) as avg_price
from orders
group by category;

select 
     city,
     COUNT(*) AS number_of_orders,
     SUM(quantity*unit_price) as gross_sales
from orders
group by city;

select *
from orders
where category='Electronics';

select *
from orders
where city='Hyderabad' and status='Completed';

select * 
from orders
where unit_price>10000;

select *
from orders
where city in ('Hyderabad','Mumbai','Delhi');

select *
from orders
where customer_name like 'A%';