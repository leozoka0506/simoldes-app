from flask import Blueprint, jsonify
from services.leitura import carregar_paradas

paradas_bp = Blueprint("paradas", __name__)

@paradas_bp.route("/", methods=["GET"])
def listar_motivos_de_parada():
    df = carregar_paradas()
    motivos = df["MOTIVO PARADA"].value_counts().to_dict()
    return jsonify(motivos)
