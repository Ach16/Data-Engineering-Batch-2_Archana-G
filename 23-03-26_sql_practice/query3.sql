create database HexaDB;
USE HexaDB;

CREATE TABLE Employee(
    EmpId int primary key auto_increment,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    PhNumber VARCHAR(10) unique,
    Address VARCHAR(200)
);
insert into Employee(FirstName, LastName, PhNumber, Address)
values
('Priyanka','Sharma','9323920032','New Street, Delhi'),
('Swati','V','9533209841','Cross Street, Chennai'),
('Avantika','Reddy','9800243218','Park Road, Hyderabad');

select * from Employee;

select EmpId, FirstName, LastName from Employee;

update Employee
set PhNumber='9876543210'
where EmpId=2;

delete from Employee
where EmpId=3;