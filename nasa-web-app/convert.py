import pandas as pd
import json


def convert(file_name):
    df = pd.read_csv(file_name+".csv")
    df['size'].fillna(3000)
    df.drop(['H'], axis=1, errors='ignore')
    df.dropna()

    df_json = df.to_json(orient='records')
    df_json = json.loads(df_json)

    print(df_json)

    with open(file_name+".json", 'w') as f:
        json.dump(df_json, f, indent=2)


convert('./planet')
convert('./WISE_202')
