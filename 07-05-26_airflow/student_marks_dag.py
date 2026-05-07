from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def create_marks_file():
    with open("/tmp/student_marks.txt","w") as file:
        file.write(
            "Math,80\n"
            "Science,75\n"
            "English,90\n"
            "Python,95\n"
        )
    print("student_marks.txt created")

def read_marks_file():
    with open("/tmp/student_marks.txt","r") as file:
        data=file.readlines()
    for line in data:
        print(line.strip())

def calculate_total():
    total=0
    with open("/tmp/student_marks.txt", "r") as file:
        data=file.readlines()
    for line in data:
        subject,marks=line.strip().split(",")
        total+=int(marks)
    print(f"Total Marks = {total}")

def percentage_calculation():
    total=340
    percentage=total/4
    print(f"Percentage = {percentage}")

def generate_result():
    total=340
    with open("/tmp/result.txt","w") as file:
        file.write(
            "Student Result Summary\n"
            f"Total Marks = {total}\n"
            "Result = PASS"
        )
    print("result.txt created")

with DAG(
    dag_id="student_marks_dag",
    start_date=datetime(2025,1,1),
    schedule="@daily",
    catchup=False
) as dag:

    create_marks_file_task=PythonOperator(
        task_id="create_marks_file_task",
        python_callable=create_marks_file
    )

    read_marks_file_task=PythonOperator(
        task_id="read_marks_file_task",
        python_callable=read_marks_file
    )

    calculate_total_task=PythonOperator(
        task_id="calculate_total_task",
        python_callable=calculate_total
    )

    percentage_calculation_task=PythonOperator(
        task_id="percentage_calculation_task",
        python_callable=percentage_calculation
    )

    generate_result_task=PythonOperator(
        task_id="generate_result_task",
        python_callable=generate_result
    )

    create_marks_file_task >> read_marks_file_task >> calculate_total_task >> percentage_calculation_task >> generate_result_task