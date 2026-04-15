CREATE DATABASE training_sql_db;

USE training_sql_db;

CREATE TABLE students (
    student_id INT PRIMARY KEY auto_increment,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    course_name VARCHAR(100),
    age INT,
    city VARCHAR(50)
);

INSERT INTO students (full_name, email, course_name, age, city)
VALUES
('Aarav Sharma','aarav.sharma@gmail.com','Data Engineering','21','Mumbai'),
('Priya Reddy','priya.reddy@gmail.com','Full Stack- Java','21','Hyderabad'),
('Swetha M','swetha.m@gmail.com','UI','20','Chennai');

select * from students;

select full_name,email from students;

select * from students
where city='Mumbai';

update students
set city='Kolkata'
where student_id=2;

delete from students 
where student_id=3;
