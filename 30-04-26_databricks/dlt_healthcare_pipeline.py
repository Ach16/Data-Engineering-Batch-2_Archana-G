# Step 1 — Bronze Table
import dlt
from pyspark.sql.functions import *
@dlt.table(
    name="bronze_patient_visits"
)
def bronze_patient_visits():
    data = [
        (1001,"Arjun Reddy","Hyderabad","Cardiology",5000,1),
        (1002,"Sneha Kapoor","Delhi","Orthopedics",3000,2),
        (1003,"Rahul Sharma","Mumbai","Dermatology",1500,1),
        (1004,"Priya Nair","Bangalore","Cardiology",5000,2),
        (1005,"Vikram Singh","Chennai","Neurology",7000,1),
        (1006,"Ananya Das","Kolkata","Orthopedics",3000,3),
        (1007,"Karan Patel","Ahmedabad","Cardiology",5000,1),
        (1008,"Meera Iyer","Bangalore","Dermatology",1500,2),
        (1009,"Farhan Ali","Hyderabad","Neurology",7000,1),
        (1010,"Divya Menon","Kochi","Cardiology",5000,1)
    ]
    columns = ["visit_id","patient_name","city","department","consultation_fee","number_of_tests"]
    return spark.createDataFrame(data, columns)

# Step 2 — Silver Table (Students Build)
@dlt.table(
    name="silver_patient_visits"
)
def silver_patient_visits():
    df=dlt.read("bronze_patient_visits")
    return df.select(
        col("visit_id"),
        col("patient_name"),
        col("city"),
        upper(col("department")).alias("department"),
        col("consultation_fee"),
        col("number_of_tests")
    ).withColumn(
        "test_cost",col("number_of_tests")*2000
    ).withColumn(
        "total_bill",col("consultation_fee")+col("test_cost")
    ).filter(
        col("consultation_fee")>0
    )

# Step 3 — Gold Table (Students Build)
@dlt.table(
    name="gold_hospital_summary"
)
def gold_hospital_summary():
    df = dlt.read("silver_patient_visits")
    return df.groupBy("city","department").agg(
        count("*").alias("total_patients"),
        sum("number_of_tests").alias("total_tests"),
        sum("total_bill").alias("total_revenue")
    )