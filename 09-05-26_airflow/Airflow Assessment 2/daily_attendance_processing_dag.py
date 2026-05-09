from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def create_attendance_file():
    with open("/tmp/attendance.txt", "w") as file:
        file.write(
            "Aarav,Present\n"
            "Priya,Present\n"
            "Rahul,Absent\n"
            "Sneha,Present\n"
            "Kiran,Absent\n"
            "Ananya,Present\n"
            "Vikram,Present\n"
            "Meera,Absent\n"
            "Farhan,Present\n"
            "Divya,Present\n"
        )
        print("File created")

def read_attendance_file():
    with open("/tmp/attendance.txt","r") as file:
        data=file.readlines()
    for line in data:
        print(line.strip())

def count_total_students():
    stud_count=0
    with open("/tmp/attendance.txt","r") as file:
        for line in file:
            stud_count+=1
    print(f"Total Students = {stud_count}")

def count_present_students():
    present_students=0
    with open("/tmp/attendance.txt","r") as file:
        for line in file:
            name,status=line.strip().split(",")
            if status=="Present":
                present_students+=1
    print(f"Present Students = {present_students}")

def count_absent_students():
    absent_students=0
    with open("/tmp/attendance.txt","r") as file:
        for line in file:
            name,status=line.strip().split(",")
            if status=="Absent":
                absent_students+=1
    print(f"Absent Students = {absent_students}")

def calculate_attendance_percentage():
    total_students=0
    present_students=0
    with open("/tmp/attendance.txt","r") as file:
        for line in file:
            total_students+=1
            name,status=line.strip().split(",")
            if status=="Present":
                present_students+=1
    perc=(present_students/total_students)*100
    print(f"Attendance Percentage = {perc}")

def list_absent_students():
    with open("/tmp/attendance.txt","r") as file:
        for line in file:
            name,status=line.strip().split(",")
            if status=="Absent":
                print(name)

def generate_attendance_report():
    total_students=0
    present_students=0
    absent_students=0
    with open("/tmp/attendance.txt","r") as file:
        for line in file:
            total_students+=1
            name,status=line.strip().split(",")
            if status=="Present":
                present_students+=1
            else:
                absent_students+=1
    perc=(present_students/total_students)*100
    if perc>=75:
        status="Good"
    else:
        status="Needs Improvement"
    with open("/tmp/attendance_report.txt","w") as file:
        file.write(
            "Daily Attendance Report\n"
            f"Total Students = {total_students}\n"
            f"Present Students = {present_students}\n"
            f"Absent Students = {absent_students}\n"
            f"Attendance Percentage = {perc}%\n"
            f"Status = {status}"
        )

with DAG(
    dag_id="daily_attendance_processing_dag",
    start_date=datetime(2025,1,1),
    schedule="@daily",
    catchup=False
) as dag:

    create_attendance_file_task=PythonOperator(
        task_id="create_attendance_file",
        python_callable=create_attendance_file
    )

    read_attendance_file_task=PythonOperator(
        task_id="read_attendance_file",
        python_callable=read_attendance_file
    )

    count_total_students_task=PythonOperator(
        task_id="count_total_students",
        python_callable=count_total_students
    )

    count_present_students_task=PythonOperator(
        task_id="count_present_students",
        python_callable=count_present_students
    )

    count_absent_students_task=PythonOperator(
        task_id="count_absent_students",
        python_callable=count_absent_students
    )

    calculate_attendance_percentage_task=PythonOperator(
        task_id="calculate_attendance_percentage",
        python_callable=calculate_attendance_percentage
    )

    list_absent_students_task=PythonOperator(
        task_id="list_absent_students",
        python_callable=list_absent_students
    )

    generate_attendance_report_task=PythonOperator(
        task_id="generate_attendance_report",
        python_callable=generate_attendance_report
    )

    create_attendance_file_task>>read_attendance_file_task>>count_total_students_task>>count_present_students_task>>count_absent_students_task>>calculate_attendance_percentage_task>>list_absent_students_task>>generate_attendance_report_task