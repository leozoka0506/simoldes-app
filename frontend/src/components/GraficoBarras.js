import React, { useEffect, useState } from "react";
import { getParadas } from "../services/api";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registro obrigatório
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const GraficoBarras = () => {
  const [dadosGrafico, setDadosGrafico] = useState({});

  useEffect(() => {
    getParadas().then((dados) => {
      const labels = Object.keys(dados);
      const values = Object.values(dados);

      setDadosGrafico({
        labels,
        datasets: [
          {
            label: "Motivos de Parada",
            data: values,
            backgroundColor: "#36A2EB",
            borderColor: "#1e88e5",
            borderWidth: 1
          }
        ]
      });
    });
  }, []);

  if (!dadosGrafico.datasets) {
    return <p>Carregando gráfico...</p>;
  }

  return (
    <div style={{ width: "60%", margin: "auto", marginTop: "50px" }}>
      <h2>Motivos de Parada (Barras)</h2>
      <Bar data={dadosGrafico} />
    </div>
  );
};

export default GraficoBarras;
