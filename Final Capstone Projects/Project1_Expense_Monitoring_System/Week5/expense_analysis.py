import pandas as pd

# Load datasets
expenses_df=pd.read_csv("cleaned_expenses.csv")
users_df=pd.read_csv("users.csv")

# Monthly spending per user
monthly_spend=expenses_df.groupby(['user_id','month'])['amount'].sum().reset_index()

# Merge with users dataset
final_df=pd.merge(monthly_spend,users_df,on='user_id')

# Calculate savings
final_df['savings']=(final_df['monthly_income']-final_df['amount'])

# Generate alerts
THRESHOLD=10000
final_df['alert']=final_df['savings'].apply(lambda x:'High Spending Alert'if x<THRESHOLD else 'Normal')

# Display report
print("Monthly Expense Analysis")
print(final_df)

# Print alerts
alerts=final_df[final_df['alert']=="High Spending Alert"]
if not alerts.empty:
    print("Savings Alerts")
    print(alerts[['user_name','amount','savings']])

# Save report
final_df.to_csv("monthly_summary.csv",index=False)
print("Monthly summary report generated")