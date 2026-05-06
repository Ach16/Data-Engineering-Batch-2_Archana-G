import dlt
from pyspark.sql.functions import *

#88 

@dlt.table(
    name="bronze_patient_visits"
)

def bronze_patient_visits():
    data=[
        (1,1001,"Aarav Khan","Hyderabad","Cardiology",201,"2024-03-01","Completed",2,5200,"UPI","Paid"),
        (2,1002,"Priya Reddy","Bengaluru","Dermatology",202,"2024-03-01","Completed",1,2800,"Credit Card","Paid"),
        (3,1003,"Rahul Mehta","Mumbai","Orthopedics",203,"2024-03-02","Completed",3,7500,"Cash","Paid"),
        (4,1004,"Sneha Kapoor","Delhi","Pediatrics",204,"2024-03-02","Pending",1,2900,"UPI","Pending"),
        (5,1005,"Kiran Patel","Ahmedabad","Cardiology",206,"2024-03-03","Completed",2,5300,"Debit Card","Paid"),
        (6,1006,"Ananya Das","Kolkata","Neurology",205,"2024-03-03","Completed",4,10000,"Credit Card","Paid"),
        (7,1007,"Vikram Singh","Chennai","Dermatology",207,"2024-03-04","Cancelled",1,-2850,"Cash","Cancelled"),
        (8,1008,"Meera Nair","Kochi","Orthopedics",208,"2024-03-04","Completed",2,5400,"UPI","Paid"),
        (9,1009,"Farhan Ali","Hyderabad","Cardiology",201,"2024-03-05","Completed",1,3200,"UPI","Paid"),
        (10,1010,"Divya Menon","Bengaluru","Dermatology",202,"2024-03-05","Completed",2,4800,"Credit Card","Paid"),
        (11,1011,"Arjun Iyer","Chennai","Neurology",205,"2024-03-06","Pending",3,8000,"UPI","Pending"),
        (12,1012,"Neha Gupta","Delhi","Pediatrics",204,"2024-03-06","Completed",1,2900,"Cash","Paid"),
        (13,1013,"Sanjay Rao","Mumbai","Orthopedics",203,"2024-03-07","Completed",2,5500,"Credit Card","Paid"),
        (14,1014,"Kavya Sharma","Hyderabad","Cardiology",201,"2024-03-07","Completed",3,7200,"UPI","Paid"),
        (15,1015,"Nikhil Verma","Pune","General Medicine",210,"2024-03-08","Completed",1,2700,"Debit Card","Paid"),
        (16,1016,"Ayesha Khan","Kolkata","Dermatology",207,"2024-03-08","Cancelled",2,-4850,"Cash","Cancelled"),
        (17,1017,"Manish Yadav","Lucknow","Neurology",209,"2024-03-09","Completed",4,9900,"Credit Card","Paid"),
        (18,1018,"Pooja Shah","Ahmedabad","Cardiology",206,"2024-03-09","Completed",2,5300,"UPI","Paid"),
        (19,1019,"Rohan Nair","Kochi","Neurology",209,"2024-03-10","Completed",3,7900,"Debit Card","Paid"),
        (20,1020,"Lakshmi Rao","Chennai","Cardiology",206,"2024-03-10","Pending",2,5300,"UPI","Pending"),
        (21,1001,"Aarav Khan","Hyderabad","Neurology",205,"2024-03-11","Completed",3,8000,"UPI","Paid"),
        (22,1003,"Rahul Mehta","Mumbai","Orthopedics",208,"2024-03-11","Completed",2,5400,"Credit Card","Paid"),
        (23,1006,"Ananya Das","Kolkata","Cardiology",201,"2024-03-12","Completed",1,3200,"Cash","Paid"),
        (24,1009,"Farhan Ali","Hyderabad","General Medicine",210,"2024-03-12","Completed",2,4700,"UPI","Paid"),
        (25,1014,"Kavya Sharma","Hyderabad","Dermatology",202,"2024-03-13","Completed",1,2800,"UPI","Paid")
    ]

    columns=["visit_id","patient_id","patient_name","city","specialization","doctor_id","visit_date","visit_status","tests_count","bill_amount","payment_mode","payment_status"]
    return spark.createDataFrame(data,columns)


#89 90 91 Silver Table

@dlt.table(
    name="silver_patient_visits"
)
@dlt.expect("valid_bill_amount","bill_amount>0")

def silver_patient_visits():
    return(
        dlt.read("bronze_patient_visits").withColumn(
            "visit_date",
            to_date(col("visit_date"))
        ).withColumn("total_bill",col("bill_amount")+col("tests_count")*500
        ).filter(col("bill_amount")>0)
    )
    
#92

@dlt.table(
    name="gold_city_revenue"
)
def gold_city_revenue():
    return(
        dlt.read("silver_patient_visits").groupBy("city").agg(
            sum("total_bill").alias("city_revenue")
        )
    )

#93

@dlt.table(
    name="gold_specialization_revenue"
)

def gold_specialization_revenue():
    return(
        dlt.read("silver_patient_visits").groupBy("specialization").agg(
            sum("total_bill").alias("specialization_revenue")
        )
    )