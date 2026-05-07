-- Step 1 — Create Database
CREATE DATABASE capstone_sql;
USE capstone_sql;

-- Step 2 — Create Tables
-- Table 1 — Students
CREATE TABLE students (
student_id INT PRIMARY KEY,
student_name VARCHAR(100),
city VARCHAR(50),
age INT
);

-- Table 2 — Enrollments
CREATE TABLE enrollments (
enrollment_id INT PRIMARY KEY,
student_id INT,
course_name VARCHAR(100),
trainer VARCHAR(100),
fee DECIMAL(10,2)
);

-- Step 3 — Insert Data
-- Students
INSERT INTO students VALUES
(1,'Aarav Sharma','Hyderabad',22),
(2,'Priya Reddy','Bangalore',23),
(3,'Rahul Verma','Mumbai',24),
(4,'Sneha Kapoor',NULL,21),
(5,'Vikram Singh','Chennai',25),
(6,NULL,'Delhi',22);

-- Enrollments
INSERT INTO enrollments VALUES
(101,1,'MySQL','Abdullah Khan',5000),
(102,1,'Python','Abdullah Khan',7000),
(103,2,'Power BI','Kiran',6000),
(104,3,'Azure Data Factory','Sneha',8000),
(105,NULL,'Excel','Rohan',3000),
(106,8,'Databricks','Ananya',9000);

-- Capstone Exercises
-- Exercise 1
-- Display student name and course name using INNER JOIN.
select s.student_name,e.course_name
from students s
inner join enrollments e
on s.student_id=e.student_id;

-- Exercise 2
-- Display all students and their courses using LEFT JOIN.
select s.student_name,e.course_name
from students s
left join enrollments e
on s.student_id=e.student_id;

-- Exercise 3
-- Display all courses even if no student exists using RIGHT JOIN.
select s.student_name,e.course_name
from students s
right join enrollments e
on s.student_id=e.student_id;

-- Exercise 4
-- Simulate a FULL OUTER JOIN.
select s.student_name,e.course_name
from students s
left join enrollments e
on s.student_id=e.student_id
union
select s.student_name,e.course_name
from students s
right join enrollments e
on s.student_id=e.student_id;

-- Exercise 5
-- Display all possible combinations of students and courses using CROSS JOIN.
select s.student_name,e.course_name
from students s
cross join enrollments e;

-- Exercise 6
-- Display students from Hyderabad and the courses they enrolled in.
select s.student_name,s.city,e.course_name
from students s
left join enrollments e
on s.student_id=e.student_id
where s.city='Hyderabad';

-- Exercise 7
-- Display courses where the fee is greater than 6000.
select course_name,trainer,fee
from enrollments
where fee>6000;

-- Exercise 8
-- Find the total number of courses per student.
select s.student_name,count(e.enrollment_id) as total_courses
from students s
left join enrollments e
on s.student_id=e.student_id
group by s.student_id,s.student_name;

-- Exercise 9
-- Find the total fee paid by each student.
select s.student_name,sum(e.fee) as total_fee
from students s
left join enrollments e
on s.student_id=e.student_id
group by s.student_id,s.student_name;

-- Exercise 10
-- Display students who enrolled in more than one course.
select s.student_name,count(e.enrollment_id) as total_courses
from students s
join enrollments e
on s.student_id=e.student_id
group by s.student_id,s.student_name
having count(e.enrollment_id)>1;

-- Exercise 11
-- Find trainers whose total collected fee is greater than 10000.
select e.trainer,sum(e.fee) as total_fee
from enrollments e
group by e.trainer
having sum(e.fee)>10000;

-- Exercise 12
-- Display cities having more than one student.
select city,count(*) as total_students
from students
group by city
having count(*)>1;

-- Final Capstone Query
select s.student_name,s.city,sum(e.fee) as total_fee_paid
from students s
join enrollments e
on s.student_id=e.student_id
group by s.student_id,s.student_name,s.city
having sum(e.fee)>5000
order by total_fee_paid desc;
