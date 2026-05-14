import pandas as pd

df=pd.read_csv("cleaned_energy_usage.csv")
df['timestamp']=pd.to_datetime(df['timestamp'])
df=df.dropna()

weekly_report=df.groupby(['device_name'])['energy_kwh'].sum().reset_index()
weekly_report.rename(columns={'energy_kwh':'weekly_energy_usage'},inplace=True)

weekly_report.to_csv("weekly_energy_report.csv",index=False)

threshold=7
alert_devices=weekly_report[weekly_report['weekly_energy_usage']>threshold]

with open("alert_log.txt","w") as file:
    if len(alert_devices)>0:
        for index,row in alert_devices.iterrows():
            message=f"ALERT: {row['device_name']} exceeded {threshold}\n"
            print(message)
            file.write(message)
    else:
        message="No devices exceeded threshold\n"
        print(message)
        file.write(message)
print("Pipeline Execution Completed Successfully")