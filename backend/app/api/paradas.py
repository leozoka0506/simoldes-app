from flask import Blueprint, request, jsonify
from services.leitura import carregar_paradas
import pandas as pd

paradas_bp = Blueprint("paradas", __name__)

@paradas_bp.route("/", methods=["GET"])
def listar_motivos_de_parada():
    df = carregar_paradas()

    data = request.args.get("data")
    turno = request.args.get("turno")  # Ainda recebemos, mas ignoramos por enquanto

    try:
        # Verifica e filtra por data
        if data and "DT INICIAL" in df.columns:
            df["DT INICIAL"] = pd.to_datetime(df["DT INICIAL"]).dt.date
            df = df[df["DT INICIAL"] == pd.to_datetime(data).date()]

        # Verificação da coluna "TURNO"
        if turno and "TURNO" in df.columns:
            df["TURNO"] = df["TURNO"].astype(str)
            df = df[df["TURNO"] == turno]

        motivos = df["MOTIVO PARADA"].value_counts().to_dict()
        return jsonify(motivos)

    except Exception as e:
        return jsonify({"erro": str(e)}), 500
