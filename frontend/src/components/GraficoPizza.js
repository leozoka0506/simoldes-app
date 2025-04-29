import React, { useEffect, useState } from "react";
import { getParadas } from "../services/api";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// REGISTRA o ArcElement, Tooltip e Legend
ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoPizza = () => {
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
            backgroundColor: [
              "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
              "#9966FF", "#FF9F40", "#2ecc71", "#f39c12"
            ],
          },
        ],
      });
    });
  }, []);

  if (!dadosGrafico.datasets) {
    return <p>Carregando gráfico...</p>;
  }

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h2>Motivos de Parada</h2>
      <Pie data={dadosGrafico} />
    </div>
  );
};

export default GraficoPizza;
