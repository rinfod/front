import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Grafica = () => {
  const [data, setData] = useState({
    labels: ["Artículos", "Libros", "Capítulos", "Presentaciones", "Póster", "Tesis"],
    datasets: [
      {
        label: "Conteo",
        data: [0, 0, 0, 0, 0, 0], // Valores iniciales (0 para cada tipo)
        backgroundColor: "rgba(72, 191, 145, 0.8)", // Verde suave
        borderColor: "rgba(72, 191, 145, 1)", // Borde verde más intenso
        borderWidth: 1,
        borderRadius: 5, // Bordes redondeados en las barras
      },
    ],
  });

  // Función para obtener los productos y contar los tipos
  const fetchProductos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/prod/produccion"); // Cambia la URL según tu API
      const productos = response.data;

      // Contar los tipos
      const conteos = {
        articulo: 0,
        libro: 0,
        capitulo: 0,
        presentaciones: 0,
        poster: 0,
        tesis: 0,
      };

      productos.forEach((producto) => {
        const tipo = producto.tipo.toLowerCase(); // Asegurarse de que el tipo sea en minúsculas
        if (conteos[tipo] !== undefined) {
          conteos[tipo] += 1; // Incrementar el conteo del tipo correspondiente
        }
      });

      // Actualizar el estado del gráfico con los conteos
      setData((prevState) => ({
        ...prevState,
        datasets: [
          {
            ...prevState.datasets[0],
            data: [
              conteos.articulo,
              conteos.libro,
              conteos.capitulo,
              conteos.presentaciones,
              conteos.poster,
              conteos.tesis,
            ],
          },
        ],
      }));
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  // Llamar a fetchProductos al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "Poppins, sans-serif",
          },
        },
      },
      title: {
        display: true,
        text: "Conteo de Producción Académica",
        font: {
          size: 18,
          family: "Poppins, sans-serif",
        },
        color: "#4CAF50", // Verde elegante
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.3)", // Líneas sutiles
        },
        ticks: {
          stepSize: 1,
          color: "#333",
          font: {
            size: 12,
            family: "Poppins, sans-serif",
          },
        },
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
