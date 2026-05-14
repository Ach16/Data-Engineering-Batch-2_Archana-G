//use energy_usage_tracker

db.createCollection("sensor_logs")

db.sensor_logs.insertMany([

{sensor_log_id:1,device_id:1,device_name:"Air Conditioner",room_name:"Living Room",timestamp:new Date("2026-05-01T08:00:00"),energy_kwh:5.60,usage_duration_minutes:240,status:"ON"},
{sensor_log_id:2,device_id:2,device_name:"Ceiling Fan",room_name:"Bedroom",timestamp:new Date("2026-05-03T09:00:00"),energy_kwh:0.85,usage_duration_minutes:360,status:"ON"},
{sensor_log_id:3,device_id:3,device_name:"Refrigerator",room_name:"Kitchen",timestamp:new Date("2026-05-08T10:00:00"),energy_kwh:2.30,usage_duration_minutes:1440,status:"ON"},
{sensor_log_id:4,device_id:4,device_name:"Smart TV",room_name:"Living Room",timestamp:new Date("2026-05-12T19:00:00"),energy_kwh:1.20,usage_duration_minutes:180,status:"OFF"},
{sensor_log_id:5,device_id:5,device_name:"Speaker System",room_name:"Home Theater",timestamp:new Date("2026-05-12T20:00:00"),energy_kwh:1.95,usage_duration_minutes:210,status:"ON"},
{sensor_log_id:6,device_id:6,device_name:"Water Heater",room_name:"Bathroom",timestamp:new Date("2026-05-18T06:00:00"),energy_kwh:7.50,usage_duration_minutes:300,status:"OFF"},
{sensor_log_id:7,device_id:7,device_name:"Dining Light",room_name:"Dining Hall",timestamp:new Date("2026-05-22T18:00:00"),energy_kwh:0.35,usage_duration_minutes:480,status:"ON"},
{sensor_log_id:8,device_id:8,device_name:"Washing Machine",room_name:"Guest Room",timestamp:new Date("2026-05-25T17:00:00"),energy_kwh:4.80,usage_duration_minutes:95,status:"ON"},
{sensor_log_id:9,device_id:9,device_name:"Desktop Computer",room_name:"Study Room",timestamp:new Date("2026-05-29T22:00:00"),energy_kwh:2.10,usage_duration_minutes:300,status:"ON"}
])

db.sensor_logs.find()

db.sensor_logs.createIndex({device_id:1})
db.sensor_logs.createIndex({sensor_log_id:1})
db.sensor_logs.createIndex({room_name:1})
db.sensor_logs.getIndexes()