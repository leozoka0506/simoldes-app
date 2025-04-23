from flask import Flask
from flask_cors import CORS

# Cria a instância do app Flask
app = Flask(__name__)
CORS(app)  # Libera acesso para o frontend React

# Importa as rotas
from api.paradas import paradas_bp
app.register_blueprint(paradas_bp, url_prefix="/api/paradas")

if __name__ == "__main__":
    app.run(debug=True)
