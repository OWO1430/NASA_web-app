import pandas as pd


def convert(path):
    df = pd.read_csv(path)
    df.drop(['n_del_obs_used', 'n_dop_obs_used'], axis=1, inplace=True)
    df.fillna(-1, inplace=True)
    df.to_csv(path, index=False)


convert('./comet_with_pha.csv')
convert('./asteroid_with_pha.csv')
