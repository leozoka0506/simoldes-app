import pandas as pd

def ler_planilha_paradas(caminho_arquivo):
    # Lê a planilha "APONTAMENTOS" da planilha de paradas
    df = pd.read_excel(caminho_arquivo, sheet_name="APONTAMENTOS", header=1)
    
    # Renomeando as colunas pra facilitar
    df.columns = [
        "CODIGO", "CENTRO_TRABALHO", "COD_OPER", "OPERADOR", "COD_PAR", "MOTIVO_PARADA",
        "SEP1", "DT_INICIAL", "HR_INI", "DT_FINAL", "HR_FIM", "TEMPO", "SEP2",
        "DT_APONT", "HR_FINAL", "ID_INICIO", "ID_FINAL", "APONTADOR"
    ]

    # Removendo colunas inúteis (ex: separadores como "|---|")
    df = df.drop(columns=["SEP1", "SEP2"])

    return df
