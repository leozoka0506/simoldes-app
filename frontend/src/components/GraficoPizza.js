import React, { useEffect, useState } from "react";
import { getParadas } from "../services/api";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoPizza = () => {
  const [dataGrafico, setDataGrafico] = useState(null);

  useEffect(() => {
    getParadas().then((dados) => {
      const labels = Object.keys(dados);
      const values = Object.values(dados);
      setDataGrafico({
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
              "#9966FF", "#FF9F40", "#2ecc71", "#f39c12"
            ]
          }
        ]
      });
    });
  }, []);

  if (!dataGrafico) return <p>Carregando gráfico...</p>;

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h2>Motivos de Parada</h2>
      <Pie data={dataGrafico} />
    </div>
  );
};

export default GraficoPizza;
