import React, { useState } from "react";
import GraficoPizza from "./components/GraficoPizza";
import GraficoBarras from "./components/GraficoBarras";

function App() {
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [turnoSelecionado, setTurnoSelecionado] = useState("");

  return (
    <div className="App">
      <h1>Dashboard Simoldes</h1>

      <form style={{ textAlign: "center", marginBottom: "20px" }}>
        <label>Data: </label>
        <input
          type="date"
          value={dataSelecionada}
          onChange={(e) => setDataSelecionada(e.target.value)}
        />
        <label style={{ marginLeft: "20px" }}>Turno: </label>
        <select
          value={turnoSelecionado}
          onChange={(e) => setTurnoSelecionado(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="1">Turno 1</option>
          <option value="2">Turno 2</option>
          <option value="3">Turno 3</option>
        </select>
      </form>

      <GraficoPizza dataSelecionada={dataSelecionada} turnoSelecionado={turnoSelecionado} />
      <GraficoBarras dataSelecionada={dataSelecionada} turnoSelecionado={turnoSelecionado} />
    </div>
  );
}

export default App;
