import json

# Read a json file
with open("data.json", "r") as file:
    data=json.load(file)
print(data)

for student in data['students']:
    print(student['name'],student['marks'])

# Write in a json file
students={
    "students":[
        {"name":"Priya","marks":88},
        {"name":"Mary","marks":91},
    ]
}
with open("data.json", "w") as file:
    json.dump(students, file,indent=4)
