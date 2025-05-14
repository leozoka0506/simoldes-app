import React, { useEffect, useState } from "react";
import { getParadas } from "../services/api";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoPizza = ({ dataSelecionada, turnoSelecionado }) => {
  const [dadosGrafico, setDadosGrafico] = useState(null);

  useEffect(() => {
    getParadas(dataSelecionada, turnoSelecionado).then((dados) => {
      const labels = Object.keys(dados);
      const values = Object.values(dados);

      setDadosGrafico({
        labels,
        datasets: [
          {
            label: "Motivos de Parada",
            data: values,
            backgroundColor: [
              "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
              "#9966FF", "#FF9F40", "#2ecc71", "#f39c12",
              "#e74c3c", "#8e44ad", "#3498db", "#1abc9c",
              "#27ae60", "#f39c12", "#d35400", "#c0392b",
              "#7f8c8d", "#2c3e50", "#bdc3c7", "#34495e"
            ]
          }
        ]
      });
    });
  }, [dataSelecionada, turnoSelecionado]);

  if (!dadosGrafico) return <p>Carregando gráfico...</p>;

  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "#333",
        font: {
          size: 14,
          family: "'Segoe UI', sans-serif"
        },
        padding: 20
      }
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || "";
          const value = context.raw || 0;
          return `${label}: ${value}`;
        }
      }
    },
    title: {
      display: false
    }
  }
};

  return (
    <div className="grafico-container">
      <h2>Motivos de Parada</h2>
      <Pie data={dadosGrafico} options={options} />
    </div>
  );
};

export default GraficoPizza;
