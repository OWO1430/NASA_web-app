import pandas as pd


df = pd.read_csv('./WISE_202.csv')
df['H (mag)'].fillna(-1, inplace=True)
df.dropna(inplace=True)
print(df)
df.to_csv('./WISE_202.csv', index=False)
