import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (usuario === "admin" && senha === "1234") {
      localStorage.setItem("auth", "true");
      window.location.href = "/dashboard";
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Entrar
          </button>
          {erro && <p className="login-error">{erro}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
