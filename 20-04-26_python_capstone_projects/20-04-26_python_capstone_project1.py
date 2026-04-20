# Python Capstone Project
# Student Performance and Activity Analyzer
import json,csv

# Part 1 — Basics and File Handling

# Task 1-Read students.txt and print all names.
def read_names():
    with open("students.txt", "r") as file:
        names=[line.strip() for line in file]
    return names
names=read_names()
print(names)

# Task 2-Count the total number of entries in students.txt .
print("Total number of entries: ",len(names))

# Task 3-Find the unique student names using a set.
unique_students=set(names)
print("Unique students: ",unique_students)

# Task 4-Count how many times each student name appears using a dictionary.
freq={}
for name in names:
    freq[name]=freq.get(name,0)+1
print("Count of student's name: ",freq)

# Task 5-Write the unique student names into a new file called unique_students.txt .
with open("unique_students.txt","w") as file:
    for name in unique_students:
        file.write(name+"\n")
    print("Written successfully")

# Part 2 — JSON Handling

# Task 6-Read marks.json .
def load_marks():
    with open("marks.json", "r") as file:
        return json.load(file)
data=load_marks()
print(data)

# Task 7-Print all student names and marks.
print("Student names and marks:")
students=data['students']
for s in students:
    print(s['name'],"-",s['marks'])

# Task 8-Find the student with the highest marks.
def topper(students):
    top_student=max(students,key=lambda s:s['marks'])
    return top_student
top_student=topper(students)
print("Student with highest marks:",top_student['name'],top_student['marks'])

# Task 9-Find the student with the lowest marks.
min_student=min(students,key=lambda s:s['marks'])
print("Student with lowest marks:",min_student['name'],min_student['marks'])

# Task 10-Calculate the average marks.
def calc_avg(students):
    return sum(s['marks'] for s in students)/len(students)
avg_mark=calc_avg(students)
print("Average marks: ",avg_mark)

# Task 11-Print only students enrolled in the Python course.
py_students=[s['name'] for s in students if s['course']=='Python']
print("PYthon students: ",py_students)

# Task 12-Count how many students are there in each course using a dictionary.
freq_student={}
for s in students:
    freq_student[s['course']]=freq_student.get(s['course'],0)+1
print("Count of students per course: ",freq_student)

# Part 3 — CSV Handling

# Task 13-Read attendance.csv .
def load_attendance():
    attendance=[]
    with open("attendance.csv", "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            row["days_present"]=int(row["days_present"])
            row["total_days"]=int(row["total_days"])
            attendance.append(row)
    return attendance

# Task 14-Print each student’s attendance details.
attendance=load_attendance()
print(attendance)

# Task 15-Calculate attendance percentage for each student.
def calc_attendance(days_present, total_days):
    return days_present / total_days * 100

max_attendance=0
best_attendance_stud=None
list_lt80=[]
print("Name\tDays present\tTotal days\tAttendance percentage")
for a in attendance:
    perc=calc_attendance(a['days_present'],a['total_days'])
    if perc>max_attendance:
        max_attendance=perc
        best_attendance_stud=a['name']
    if perc<80:
        list_lt80.append(a['name'])
    print(f"{a['name']}\t{a['days_present']}\t{a['total_days']}\t{perc}%")

# Task 16-Print students whose attendance is below 80%.
print("Students with attendance below 80: ",list_lt80)

# Task 17-Find the student with the best attendance.
print("Student with best attendance: ",best_attendance_stud,max_attendance,"%")

# Part 4 — Data Structures Practice

# Task 18-Store all marks in a list and print:
# highest marks
# lowest marks
# sum of marks
marks_list=[s['marks'] for s in students]
print("Highest marks:",max(marks_list))
print("Lowest marks:",min(marks_list))
print("Sum:",sum(marks_list))

# Task 19-Create a tuple of all courses and print it.
course_tuple=tuple(s['course'] for s in students)
print("Courses: ",course_tuple)

# Task 20- Create a set of all courses to show unique courses.
unique_courses=set(course_tuple)
print("Unique courses: ",unique_courses)

# Task 21-Create a dictionary where:
# key = student name
# value = marks
dict1={}
for s in students:
    dict1[s['name']]=s['marks']
print("Student dictionary with marks: ",dict1)

# Task 22-Create a second dictionary where:
# key = student name
# value = attendance percentage
dict2={}
for a in attendance:
    dict2[a['name']]=calc_attendance(a['days_present'],a['total_days'])
print("Student dictionary with attendance: ",dict2)

# Part 5 — Conditions and Loops

# Task 23- Using a loop, print whether each student is:
# "Pass" if marks >= 50
# "Fail" otherwise
print("Student's results:")
for s in students:
    if s['marks']>=50:
        res="Pass"
    else:
        res="Fail"
    print(f"{s['name']}-{res}")

# Task 24-Using conditions, assign grades:
# 90 and above → A
# 75 to 89 → B
# 50 to 74 → C
# below 50 → Fail
print("Students grade: ")
def generate_grade(mark):
    if mark>=90:
        grade="A"
    elif mark>=75:
        grade="B"
    elif mark>=50:
        grade ="C"
    else:
        grade="Fail"
    return grade

for s in students:
    grade=generate_grade(s['marks'])
    print(f"{s['name']}-{grade}")

# Task 25-Print all students who have:
# marks above 80
# attendance above 85%
print("Students with mark above 80 and attendance above 85:")
for s in students:
    if s['marks']>=80 and dict2[s['name']]>85:
        print(s['name'])

# Part 6 — Functions

# Task 26- A function to read names from students.txt .
# Written in task 1
# def read_names():
#     with open("students.txt", "r") as file:
#         names=[line.strip() for line in file]
#     return names
# print(read_names())

# Task 27-A function to load student marks from marks.json .
# Written in task 6
# def load_marks():
#     with open("marks.json", "r") as file:
#         return json.load(file)
# print(load_marks())

# Task 28-A function to load attendance from attendance.csv .
# Written in task 13
# def load_attendance():
#     attendance=[]
#     with open("attendance.csv", "r") as file:
#         reader = csv.DictReader(file)
#         for row in reader:
#             row["days_present"]=int(row["days_present"])
#             row["total_days"]=int(row["total_days"])
#             attendance.append(row)
#     return attendance
# print(load_attendance())

# Task 29-A function to calculate average marks.
# written in task 10
# def calc_avg(students):
#     return sum(s['marks'] for s in students)/len(students)
# print(calc_avg(load_marks()))

# Task 30-A function to calculate attendance percentage.
# written in task 15
# def calc_attendance(days_present,total_days):
#         return days_present/total_days*100

# Task 31-A function to return the topper.
# written in task 8
# def topper(students):
#     top_student=max(students,key=lambda s:s['marks'])
#     return top_student

# Task 32-A function to generate grade for a mark.
# written in task 24
# def generate_grade(mark):
#     if mark >= 90:
#         grade = "A"
#     elif mark >= 75:
#         grade = "B"
#     elif mark >= 50:
#         grade = "C"
#     else:
#         grade = "Fail"
#     return grade

# Part 7 — Final Combined Analysis

# Task 33-Combine marks and attendance data and create a final structure like this:
combined_data={}
for s in students:
    name=s["name"]
    combined_data[name] = {
        "marks":s["marks"],
        "course": s["course"],
        "attendance":dict2[name],
        "grade":generate_grade(s["marks"])
    }

# Task 34-From this combined structure, print:
# name
# marks
# attendance
# course
# grade
for name,data in combined_data.items():
    print(name,data)

# Task 35-Find students who are eligible for certification.
# Condition:
# marks >= 75
# attendance >= 80
eligible_stud=[name for name,data in combined_data.items() if data['marks']>=75 and data['attendance']>=80]
print("Students eligible for certification: ",eligible_stud)

# Task 36-Find students who need improvement.
# Condition:
# marks < 75 or attendance < 80
stud_who_need_imp=[name for name,data in combined_data.items() if data['marks']<75 or data['attendance']<80]
print("Students who need improvement: ",stud_who_need_imp)

# Part 8 — Output File Generation

# Task 37-Write the final student summary to a text file called report.txt .
with open("report.txt", "w") as file:
    file.write("Student Report\n")
    for name,data in combined_data.items():
        line = f"{name} - Marks: {data['marks']} - Attendance: {data['attendance']}% - Grade: {data['grade']}\n"
        file.write(line)

# Task 38-Write only eligible students to eligible_students.txt .
with open("eligible_students.txt", "w") as file:
    for name in eligible_stud:
        file.write(name + "\n")

# Final Challenge
# Task 39-Generate this final console output:
print("Topper:", topper(students)['name'])
print("Best Attendance:",best_attendance_stud)
print("Average Marks:",avg_mark)
print("Eligible Students:", ", ".join(eligible_stud))
print("Students Needing Improvement:", ", ".join(stud_who_need_imp))

# Task 40-Make the program modular using functions and keep the code clean.