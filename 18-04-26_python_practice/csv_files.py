import csv

with open("data.csv","r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Read as dictionary
with open("data.csv","r") as file:
    reader=csv.DictReader(file)
    for row in reader:
        print(row["name"],row["marks"])

# Write in a csv file
data=[
    ["name","marks"],
    ["Priya",88],
    ["Karan",75]
]
with open("output.csv","w",newline="") as file:
    writer=csv.writer(file)
    writer.writerows(data)