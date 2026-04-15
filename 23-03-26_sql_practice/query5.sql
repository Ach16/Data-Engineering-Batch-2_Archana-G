CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    city VARCHAR(50)
);

INSERT INTO customers VALUES
(1, 'Aarav Sharma', 'Hyderabad'),
(2, 'Priya Reddy', 'Bangalore'),
(3, 'Rahul Verma', 'Mumbai'),
(4, 'Sneha Kapoor', 'Delhi'),
(5, 'Vikram Singh', 'Chennai');

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2)
);

INSERT INTO orders VALUES
(101, 1, 'Laptop', 1, 55000),
(102, 1, 'Mouse', 2, 800),
(103, 2, 'Tablet', 1, 22000),
(104, 3, 'Chair', 1, 7000),
(105, 3, 'Desk', 1, 15000),
(106, 6, 'Printer', 1, 12000);

SET FOREIGN_KEY_CHECKS = 0;
 
TRUNCATE TABLE orders;
TRUNCATE TABLE customers;
 
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO customers VALUES
(1, 'Aarav Sharma', 'Hyderabad'),
(2, 'Priya Reddy', 'Bangalore'),
(3, 'Rahul Verma', 'Mumbai'),
(4, 'Sneha Kapoor', NULL),     -- NULL city
(5, 'Vikram Singh', 'Chennai'),
(6, NULL, 'Delhi');            -- NULL customer name
 
INSERT INTO orders VALUES
(101, 1, 'Laptop', 1, 55000),
(102, 1, 'Mouse', 2, 800),
(103, 2, 'Tablet', 1, 22000),
(104, 3, 'Chair', 1, 7000),
(105, NULL, 'Printer', 1, 12000),   -- NULL customer
(106, 8, 'Desk', 1, 15000);         -- No matching customer

select c.customer_name,o.product
from customers c 
inner join orders o 
on c.customer_id=o.customer_id;

select c.customer_name,o.product
from customers c 
left join orders o 
on c.customer_id=o.customer_id;

select c.customer_name,o.product
from customers c 
right join orders o 
on c.customer_id=o.customer_id;