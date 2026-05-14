CREATE DATABASE energy_usage_tracker;
USE energy_usage_tracker;

CREATE TABLE rooms(
room_id INT PRIMARY KEY AUTO_INCREMENT,
room_name VARCHAR(100),
floor_number INT
);

CREATE TABLE devices(
device_id INT PRIMARY KEY AUTO_INCREMENT,
device_name VARCHAR(100),
device_type VARCHAR(50),
room_id INT,
status ENUM('ON','OFF','MAINTENANCE') DEFAULT 'OFF',
FOREIGN KEY(room_id) REFERENCES rooms(room_id)
);

CREATE TABLE energy_logs(
log_id INT PRIMARY KEY AUTO_INCREMENT,
device_id INT,
energy_kwh DECIMAL(10,2),
usage_duration_minutes INT,
timestamp DATETIME,
FOREIGN KEY(device_id) REFERENCES devices(device_id)
);

INSERT INTO rooms(room_name,floor_number)
VALUES
('Living Room',1),
('Bedroom',1),
('Kitchen',1),
('Study Room',2),
('Dining Hall',1),
('Home Theater',2),
('Guest Room',2),
('Bathroom',1);

INSERT INTO devices(device_name,device_type,room_id,status)
VALUES
('Air Conditioner','Cooling',1,'ON'),
('Ceiling Fan','Fan',2,'ON'),
('Refrigerator','Appliance',3,'ON'),
('Smart TV','Entertainment',1,'OFF'),
('Speaker System','Entertainment',6,'ON'),
('Water Heater','Heating',8,'OFF'),
('Dining Light','Lighting',5,'ON'),
('Washing Machine','Appliance',7,'ON'),
('Desktop Computer','Electronics',4,'ON'),
('Projector','Entertainment',6,'MAINTENANCE');

INSERT INTO energy_logs(device_id,energy_kwh,usage_duration_minutes,timestamp)
VALUES
(1,5.60,240,'2026-05-01 08:00:00'),
(2,0.85,360,'2026-05-03 09:00:00'),
(3,2.30,1440,'2026-05-08 10:00:00'),
(4,1.20,180,'2026-05-12 19:00:00'),
(5,1.95,210,'2026-05-12 20:00:00'),
(6,7.50,300,'2026-05-18 06:00:00'),
(7,0.35,480,'2026-05-22 18:00:00'),
(8,4.80,95,'2026-05-25 17:00:00'),
(9,2.10,300,'2026-05-29 22:00:00'),
(10,3.40,200,'2026-06-02 16:00:00');

SELECT * FROM rooms;
SELECT * FROM devices;
SELECT * FROM energy_logs;

INSERT INTO devices(device_name,device_type,room_id,status)
VALUES
('Microwave Oven','Kitchen Appliance',3,'OFF');

UPDATE devices
SET status='OFF'
WHERE device_id=1;

UPDATE energy_logs
SET energy_kwh=2.50
WHERE log_id=9;

DELETE FROM energy_logs
WHERE log_id=10;

DELIMITER //

CREATE PROCEDURE GetRoomEnergyUsage()
BEGIN
SELECT
r.room_name,
DATE(e.timestamp) AS usage_date,
SUM(e.energy_kwh) AS total_energy
FROM energy_logs e
JOIN devices d
ON e.device_id=d.device_id
JOIN rooms r
ON d.room_id=r.room_id
GROUP BY
r.room_name,
DATE(e.timestamp);
END //

DELIMITER ;

CALL GetRoomEnergyUsage();