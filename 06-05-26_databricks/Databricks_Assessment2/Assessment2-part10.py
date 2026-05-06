import dlt
from pyspark.sql.functions import *

@dlt.table(
    name="bronze_orders"
)
def bronze_orders():
    data=[
        (301,101,"Rice Bag","Groceries","Hyderabad",1200,20,"Delivered",24000,"Paid","2024-04-01"),
        (302,102,"Wheat Flour","Groceries","Bengaluru",900,35,"Delivered",31500,"Paid","2024-04-01"),
        (303,103,"Sunflower Oil","Groceries","Mumbai",1800,10,"Delivered",18000,"Paid","2024-04-02"),(304,104,"Milk Pack","Dairy","Chennai",60,50,"Delivered",3000,"Paid","2024-04-02"),
        (305,105,"Cheese Block","Dairy","Delhi",450,18,"Cancelled",8100,"Cancelled","2024-04-03"),
        (306,106,"Soap","Personal Care","Kolkata",120,60,"Delivered",7200,"Paid","2024-04-03"),
        (307,107,"Shampoo","Personal Care","Pune",320,25,"Delivered",8000,"Paid","2024-04-04"),
        (308,108,"Toothpaste","Personal Care","Ahmedabad",90,40,"Delivered",3600,"Paid","2024-04-04"),
        (309,109,"Notebook","Stationery","Hyderabad",75,80,"Delivered",6000,"Paid","2024-04-05"),
        (310,110,"Pen Pack","Stationery","Mumbai",110,120,"Delivered",13200,"Paid","2024-04-05"),
        (311,111,"LED TV","Electronics","Delhi",45000,2,"Delivered",90000,"Paid","2024-04-06"),
        (312,112,"Refrigerator","Electronics","Chennai",38000,2,"Pending",76000,"Pending","2024-04-06"),
        (313,113,"Washing Machine","Electronics","Bengaluru",29000,4,"Delivered",116000,"Paid","2024-04-07"),
        (314,114,"Mobile Phone","Electronics","Hyderabad",25000,5,"Pending",125000,"Pending","2024-04-07"),
        (315,115,"Laptop","Electronics","Pune",62000,3,"Delivered",186000,"Paid","2024-04-08"),
        (316,116,"Air Conditioner","Electronics","Mumbai",42000,2,"Pending",84000,"Pending","2024-04-08"),
        (317,117,"Mixer Grinder","Home Appliances","Kolkata",3500,7,"Delivered",24500,"Paid","2024-04-09"),
        (318,118,"Water Purifier","Home Appliances","Delhi",12000,4,"Pending",48000,"Pending","2024-04-09"),
        (319,119,"Ceiling Fan","Home Appliances","Ahmedabad",2800,12,"Delivered",33600,"Paid","2024-04-10"),
        (320,120,"Gas Stove","Home Appliances","Chennai",5500,6,"Delivered",33000,"Paid","2024-04-10")
    ]
    columns=["order_id","product_id","product_name","category","inventory_city","price","quantity","order_status","bill_amount","payment_status","order_date"]
    return spark.createDataFrame(data,columns)

@dlt.table(
    name="silver_orders"
)
def silver_orders():
    return(
        dlt.read("bronze_orders").withColumn(
            "total_revenue",col("quantity")*col("price")
        )
        .filter(col("quantity")>0)
        .filter(col("bill_amount").isNotNull())
    )

@dlt.table(
    name="gold_city_revenue"
)
def gold_city_revenue():

    return(
        dlt.read("silver_orders").groupBy("inventory_city").agg(sum("total_revenue").alias("city_revenue"))
    )

@dlt.table(
    name="gold_category_revenue"
)
def gold_category_revenue():

    return(
        dlt.read("silver_orders").groupBy("category").agg(sum("total_revenue").alias("category_revenue"))
    )