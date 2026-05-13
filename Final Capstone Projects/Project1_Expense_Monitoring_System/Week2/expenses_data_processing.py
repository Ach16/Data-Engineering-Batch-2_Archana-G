import pandas as pd
import numpy as np

# Load dataset
df=pd.read_csv('expenses.csv')

# Display dataset
print(df)

# Remove dollar symbol and convert amount to float
df['amount']=df['amount'].replace('[\\$,]','',regex=True).astype(float)

# Convert expense_date to datetime
df['expense_date']=pd.to_datetime(df['expense_date'])

# Create month column
df['month']=df['expense_date'].dt.to_period('M')

# Handle missing values
df=df.fillna("Unknown")

# Display cleaned dataset
print("Cleaned Dataset")
print(df)

# Monthly total and average using numpy
total_expense=np.sum(df['amount'])
average_expense=np.mean(df['amount'])
print("Total Expense:",total_expense)
print("Average Expense:",average_expense)

# Category wise monthly expense breakdown using pandas
monthly_expense = df.groupby(['month', 'category'])['amount'].sum().unstack().fillna(0)
print("Monthly expense summary")
print(monthly_expense)

# Save cleaned dataset
df.to_csv('cleaned_expenses.csv',index=False)
print("Cleaned dataset saved successfully")

# Save monthly summary
monthly_expense.to_csv('monthly_summary.csv')
print("Monthly summary saved successfully")