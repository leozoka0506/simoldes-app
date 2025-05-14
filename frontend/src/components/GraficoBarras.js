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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const coresBarras = [
  "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
  "#9966FF", "#FF9F40", "#2ecc71", "#f39c12"
];

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
            backgroundColor: coresBarras,
            borderColor: coresBarras.map(cor => cor),
            borderWidth: 1
          }
        ]
      });
    });
  }, []);

  if (!dadosGrafico.datasets) {
    return <p>Carregando gráfico...</p>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "#ADADAD",
          font: {
            size: 14,
            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw || 0;
            return `Quantidade: ${value}`;
          }
        },
        backgroundColor: "rgba(60, 125, 34, 0.85)", // verde suave parecido com título
        titleColor: "#fff",
        bodyColor: "#fff",
        bodyFont: {
          size: 14,
          family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#ADADAD",
          font: {
            size: 14,
            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ADADAD",
          font: {
            size: 14,
            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }
        },
        grid: {
          color: "#e0e0e0"
        }
      }
    }
  };

  return (
    <div style={{
      width: "60%",
      margin: "25px",
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <h2 style={{
        color: "#3C7D22",
        marginBottom: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>Motivos de Parada (Barras)</h2>
      <Bar data={dadosGrafico} options={options} />
    </div>
  );
};

export default GraficoBarras;
