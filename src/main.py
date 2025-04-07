from leitura import ler_planilha_paradas
from graficos import grafico_motivos_parada

def main():
    caminho_planilha = "data/PARADAS.xlsx"
    saida_grafico = "output/motivos_parada.png"

    df = ler_planilha_paradas(caminho_planilha)
    grafico_motivos_parada(df, saida_grafico)
    print(f"Gráfico gerado com sucesso em: {saida_grafico}")

if __name__ == "__main__":
    main()
