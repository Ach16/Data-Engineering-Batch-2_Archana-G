from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def create_employee_file():
    with open("/tmp/employees.txt","w") as file:
        file.write(
            "Rahul,45000\n"
            "Sneha,52000\n"
            "Amit,61000\n"
            "Priya,47000\n"
            "Kiran,39000\n"
        )
    print("Employee file created")

def read_employee_file():
    with open("/tmp/employees.txt","r") as file:
        data=file.readlines()
    for line in data:
        print(line.strip())

def calculate_salary_expense():
    total=0
    with open("/tmp/employees.txt","r") as file:
        data=file.readlines()
    for line in data:
        name,salary=line.strip().split(",")
        total+=int(salary)
    print(f"Total Salary Expense = {total}")

def find_highest_salary():
    max_sal=0
    emp_name=""
    with open("/tmp/employees.txt","r") as file:
        for line in file:
            name,salary=line.strip().split(",")
            salary=int(salary)
            if salary>max_sal:
                max_sal=salary
                emp_name=name
    print(f"Highest Salary = {max_sal}")
    print(f"Employee = {emp_name}")

def generate_salary_report():
    total=0
    emp_count=0
    with open("/tmp/employees.txt","r") as file:
        for line in file:
            name,salary=line.strip().split(",")
            total+= int(salary)
            emp_count+=1
    with open("/tmp/salary_report.txt","w") as file:
        file.write(
            "Employee Salary Report\n"
            f"Total Employees = {emp_count}\n"
            f"Total Salary Expense = {total}\n"
            "Status = Processed Successfully\n"
        )
    print("salary_report.txt created")

with DAG(
    dag_id="emp_salary_processing_dag",
    start_date=datetime(2025,1,1),
    schedule="@daily",
    catchup=False
) as dag:

    create_employee_file_task=PythonOperator(
        task_id="create_employee_file",
        python_callable=create_employee_file
    )

    read_employee_file_task=PythonOperator(
        task_id="read_employee_file",
        python_callable=read_employee_file
    )

    calculate_salary_task=PythonOperator(
        task_id="calculate_salary_expense",
        python_callable=calculate_salary_expense
    )

    find_highest_salary_task=PythonOperator(
        task_id="find_highest_salary",
        python_callable=find_highest_salary
    )

    generate_salary_report_task=PythonOperator(
        task_id="generate_salary_report",
        python_callable=generate_salary_report
    )

    create_employee_file_task>>read_employee_file_task>>calculate_salary_task>>find_highest_salary_task>>generate_salary_report_task
