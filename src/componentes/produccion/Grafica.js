import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Grafica = ({ productos }) => {
  const [data, setData] = useState({
    labels: ["Artículos", "Libros", "Capítulos", "Presentaciones", "Póster", "Tesis"],
    datasets: [
      {
        label: "Conteo",
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(72, 191, 145, 0.8)",
        borderColor: "rgba(72, 191, 145, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  });

  useEffect(() => {
    if (productos.length > 0) {
      const conteos = { articulo: 0, libro: 0, capitulo: 0, presentaciones: 0, poster: 0, tesis: 0 };

      productos.forEach((producto) => {
        const tipo = producto.tipo.toLowerCase();
        if (conteos[tipo] !== undefined) {
          conteos[tipo] += 1;
        }
      });

      setData((prevState) => ({
        ...prevState,
        datasets: [{ ...prevState.datasets[0], data: Object.values(conteos) }],
      }));
    }
  }, [productos]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { font: { size: 14, family: "Poppins, sans-serif" } },
      },
      title: {
        display: true,
        text: "Conteo de Producción Académica",
        font: { size: 18, family: "Poppins, sans-serif" },
        color: "#4CAF50",
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { color: "rgba(200, 200, 200, 0.3)" },
        ticks: { stepSize: 1, color: "#333", font: { size: 12, family: "Poppins, sans-serif" } },
      },
    },
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Grafica;
