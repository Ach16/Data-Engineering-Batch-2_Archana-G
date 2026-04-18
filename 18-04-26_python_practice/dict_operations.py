# Dictionary
student={
    "name":"Archana",
    "Age":20,
    "Course":"Python"
}
print(student)

# Printing dictionary values in 2 ways
# Using []
print(student["name"])
print(student["Age"])
print(student["Course"])
# Using get()
print(student.get("name"))
print(student.get("Age"))
print(student.get("Course"))

# Insert a key-value pair
student["City"]="Chennai"
print(student)