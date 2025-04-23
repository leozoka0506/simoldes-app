import pandas as pd
import os

def carregar_paradas():
    caminho = os.path.join(os.path.dirname(__file__), "..", "data", "PARADAS.xlsx")
    df = pd.read_excel(caminho, sheet_name="APONTAMENTOS", header=1)
    df.columns = df.columns.str.upper()
    return df
