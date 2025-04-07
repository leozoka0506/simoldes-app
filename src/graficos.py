import matplotlib.pyplot as plt
import seaborn as sns
import os

def grafico_motivos_parada(df, caminho_saida):
    plt.figure(figsize=(12, 6))
    contagem = df["MOTIVO_PARADA"].value_counts().head(10)
    
    sns.barplot(x=contagem.values, y=contagem.index, palette="flare")
    plt.title("Top 10 Motivos de Parada")
    plt.xlabel("Quantidade de Ocorrências")
    plt.ylabel("Motivo da Parada")
    
    os.makedirs(os.path.dirname(caminho_saida), exist_ok=True)
    plt.tight_layout()
    plt.savefig(caminho_saida)
    plt.close()
