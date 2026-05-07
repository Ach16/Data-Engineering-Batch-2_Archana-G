-- 1. Create Database
CREATE DATABASE company_training;
USE company_training;

-- 2 — Create Tables
-- Employees Table
CREATE TABLE employees (
emp_id INT PRIMARY KEY,
emp_name VARCHAR(100),
department VARCHAR(50),
city VARCHAR(50)
);

-- Projects Table
CREATE TABLE projects (
project_id INT PRIMARY KEY,
emp_id INT,
project_name VARCHAR(100),
project_budget DECIMAL(12,2),
project_status VARCHAR(50)
);

-- 3 — Insert Data
-- Employees Data
INSERT INTO employees VALUES
(1, 'Rohan Mehta', 'IT', 'Hyderabad'),
(2, 'Sneha Iyer', 'IT', 'Bangalore'),
(3, 'Kiran Patel', 'Finance', 'Mumbai'),
(4, 'Ananya Das', 'HR', NULL),
(5, 'Rahul Sharma', 'IT', 'Delhi'),
(6, NULL, 'Marketing', 'Chennai');

-- Projects Data
INSERT INTO projects VALUES
(101, 1, 'AI Chatbot', 120000, 'Active'),
(102, 1, 'ML Prediction', 90000, 'Active'),
(103, 2, 'Data Warehouse', 150000, 'Active'),
(104, 3, 'Financial Dashboard', 80000, 'Completed'),
(105, NULL, 'Website Revamp', 60000, 'Pending'),
(106, 8, 'Mobile App', 100000, 'Active');

-- 1 — Basic Joins
-- Exercise 1
SELECT e.emp_name,p.project_name,p.project_budget
FROM employees e 
INNER JOIN projects p 
ON e.emp_id=p.emp_id;

-- Exercise 2
-- Show all employees and their projects using LEFT JOIN.
SELECT e.emp_name,p.project_name,p.project_budget
FROM employees e 
LEFT JOIN projects p 
ON e.emp_id=p.emp_id;

-- Exercise 3
-- Show all projects even if employee does not exist.
SELECT e.emp_name,p.project_name,p.project_budget
from employees e 
right join projects p 
on e.emp_id=p.emp_id;

-- Exercise 4
-- Simulate FULL OUTER JOIN.
SELECT e.emp_name,p.project_name,p.project_budget
from employees e
left join projects p on e.emp_id=p.emp_id
union
select e.emp_name,p.project_name,p.project_budget
from employees e
right join projects p on e.emp_id=p.emp_id;

-- Exercise 5
-- Display all combinations of employees and projects using CROSS JOIN.
SELECT e.emp_name,p.project_name,p.project_budget
from employees e 
cross join projects p;

-- 2 — Join with Filtering
-- Exercise 6
SELECT e.emp_id,e.department,p.project_id,p.project_name,p.project_budget,p.project_status
from employees e
join projects p
on e.emp_id=p.emp_id
where e.department='IT';

-- Exercise 7
SELECT e.emp_id,e.emp_name,p.project_id,p.project_name,p.project_budget,p.project_status
from employees e
join projects p
on e.emp_id=p.emp_id
where p.project_budget>100000;

-- Exercise 8
SELECT *
from employees e
left join projects p
on e.emp_id=p.emp_id
where e.city='Hyderabad';

-- 3 — Join with Aggregate Functions
-- Exercise 9
-- Find total number of projects per employee.
SELECT e.emp_id,e.emp_name,COUNT(p.project_id) as total_projects
from employees e
left join projects p
on e.emp_id=p.emp_id
group by e.emp_id,e.emp_name;

-- Exercise 10
-- Find total project budget handled by each employee.
SELECT e.emp_id,e.emp_name,sum(p.project_budget) as total_project_budget
from employees e
left join projects p
on e.emp_id=p.emp_id
group by e.emp_id,e.emp_name;

-- Exercise 11
-- Find average project budget per department.
SELECT e.department,avg(p.project_budget) as avg_project_budget
from employees e
left join projects p
on e.emp_id=p.emp_id
group by e.department;
 
-- 4 — GROUP BY
-- Exercise 12
-- Show total projects per department.
SELECT e.department,count(p.project_id) as total_projects
from employees e
left join projects p
on e.emp_id=p.emp_id
group by e.department;

-- Exercise 13
-- Show total budget per department.
SELECT e.department,sum(p.project_budget) as total_project_budget
from employees e
left join projects p
on e.emp_id=p.emp_id
group by e.department;

-- Exercise 14
-- Show number of employees per city.
select city,count(*) as total_employees
from employees
group by city;

-- 5 — HAVING
-- Exercise 15 - Show employees handling more than 1 project.
select e.emp_id,e.emp_name,count(p.project_id) as total_projects
from employees e
join projects p
on e.emp_id=p.emp_id
group by e.emp_id,e.emp_name
having count(p.project_id)>1;

-- Exercise 16 
-- Show departments with total budget greater than 150000.
SELECT e.department,sum(p.project_budget) as total_budget
from employees e
join projects p
on e.emp_id=p.emp_id
group by e.department
having sum(p.project_budget)>150000;

-- Exercise 17
-- Show employees whose total project budget > 100000.
SELECT e.emp_id,e.emp_name,sum(p.project_budget) as total_budget
from employees e
join projects p
on e.emp_id=p.emp_id
group by e.emp_id,e.emp_name
having sum(p.project_budget)>100000;

-- 6 — Capstone Query
SELECT e.emp_name,e.department,sum(p.project_budget) as total_budget
from employees e
join projects p
on e.emp_id=p.emp_id
group by e.emp_id,e.emp_name,e.department
having sum(p.project_budget)>100000
order by total_budget desc;
