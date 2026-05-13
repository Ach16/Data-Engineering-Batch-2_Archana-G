CREATE DATABASE expense_monitoring_system;
USE expense_monitoring_system;

CREATE TABLE users(
user_id INT PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
phone VARCHAR(10),
gender VARCHAR(20),
monthly_income DECIMAL(10,2)
);
CREATE TABLE categories(
category_id INT PRIMARY KEY AUTO_INCREMENT,
category_name VARCHAR(100) NOT NULL,
category_type VARCHAR(50)
);

CREATE TABLE expenses(
expense_id INT PRIMARY KEY AUTO_INCREMENT,
user_id INT,
category_id INT,
amount DECIMAL(10,2) NOT NULL,
payment_method VARCHAR(50),
expense_date DATE,
merchant VARCHAR(50),
status VARCHAR(50),

FOREIGN KEY(user_id) REFERENCES users(user_id),
FOREIGN KEY(category_id) REFERENCES categories(category_id)
);

INSERT INTO users(user_name,email,phone,gender,monthly_income)
VALUES
('Priyanka Sharma','priyankasharma@gmail.com','9876543210','Female',65500),
('Ankit Sharma','ankitsharma@gmail.com','9876543211','Male',70000),
('Sonakshi Sharma','soankshisharma@gmail.com','9876543212','Female',60000),
('Karan Sharma','karansharma@gmail.com','9876293837','Male',30000);

INSERT INTO categories(category_name,category_type)
VALUES
('Food','Essential'),
('Travel','Essential'),
('Shopping','Non-Essential'),
('Bills','Essential'),
('Entertainment','Non-Essential');

INSERT INTO expenses(user_id,category_id,amount,payment_method,expense_date,merchant,status)
VALUES
(1,1,450,'UPI','2026-03-25','Swiggy','Completed'),
(1,2,1200,'Card','2026-03-29','RedBus','Completed'),
(2,3,5000,'Card','2026-04-02','Amazon','Completed'),
(3,4,2500,'UPI','2026-04-15','TNEB','Completed'),
(2,3,3000,'Card','2026-04-23','Myntra','Completed'),
(1,5,1500,'UPI','2026-05-01','PVR','Pending'),
(3,4,10000,'Cash','2026-05-05','House rent','Completed'),
(2,5,199,'UPI','2026-05-07','Netflix','Completed'),
(4,2,5000,'Card','2026-05-10','Hotel','Completed');

SELECT * FROM users;
SELECT * FROM expenses;
SELECT * FROM categories;

INSERT INTO expenses(user_id,category_id,amount,payment_method,expense_date,merchant,status)
VALUES
(2,1,800,'UPI','2026-05-06','Zomato','Completed');

UPDATE expenses
SET amount=12000
WHERE expense_id=7;

DELETE FROM expenses
WHERE expense_id=6;

SELECT *
FROM expenses
WHERE amount>3000;

DELIMITER //

CREATE PROCEDURE MonthlyCategoryExpense()
BEGIN
SELECT
YEAR(e.expense_date) AS year,
MONTH(e.expense_date) AS month,
c.category_name,
SUM(e.amount) AS total_expense
FROM expenses e
JOIN categories c
ON e.category_id=c.category_id
GROUP BY YEAR(e.expense_date),MONTH(e.expense_date),c.category_name
ORDER BY year,month,total_expense DESC;
END //

DELIMITER ;

CALL MonthlyCategoryExpense();