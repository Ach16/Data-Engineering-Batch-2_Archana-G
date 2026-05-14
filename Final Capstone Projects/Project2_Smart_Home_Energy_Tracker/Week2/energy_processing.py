import pandas as pd
import numpy as np

df=pd.read_csv("energy_usage.csv")
print("Original Dataset")
print(df)

print("Checking Missing Values")
print(df.isnull().sum())

df['timestamp']=pd.to_datetime(df['timestamp'])
df['energy_kwh']=df['energy_kwh'].astype(float)
df=df.dropna()

print("Cleaned Dataset")
print(df)

total_energy=np.sum(df['energy_kwh'])
average_energy=np.mean(df['energy_kwh'])

print("Total Energy Usage")
print(total_energy)

print("Average Energy Usage")
print(average_energy)

device_summary=df.groupby(['device_id','device_name'])['energy_kwh'].agg(['sum','mean'])
print("Device Level Summary")
print(device_summary)

room_summary=df.groupby('room_name')['energy_kwh'].sum()
print("Room Level Summary")
print(room_summary)

high_usage_devices=df[df['energy_kwh']>4]
print("High Usage Devices")
print(high_usage_devices)

df.to_csv("cleaned_energy_usage.csv",index=False)
print("Cleaned dataset exported successfully")