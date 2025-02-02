import React, { useState, useEffect } from "react";
import axios from "axios";
import './paginacion.css'

const RegionTabla = ({dato, actualizarDato}) => {
  //const [produccion, setProduccion] = useState([]); // Almacenar todos los productos
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(5); // Cantidad de elementos por página

  // Función para obtener los productos desde el servidor
  /*const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setProduccion(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };*/

  // Cargar los productos cuando el componente se monte
  /*useEffect(() => {
    fetchProductos();
  }, []);*/

  // Lógica para obtener los productos de la página actual
  const indexOfLastItem = currentPage * itemsPerPage; // Último índice del item en la página
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Primer índice del item en la página
  const currentItems = dato.slice(indexOfFirstItem, indexOfLastItem); // Productos para la página actual

  // Cambiar la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total de páginas necesarias para mostrar todos los productos
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dato.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

   // Función para manejar la eliminación
   const eliminar = async (id) => {
    console.log(id)
    try {
        await axios.delete(`http://localhost:5000/api/items/${id}`); // Llamada al backend
        //setProduccion(produccion.filter(producto => producto._id !== id)); // Actualizar el estado local
        actualizarDato();
    } catch (error) {
        console.error('Error al eliminar producto:', error);
    }
};

  return (
    <div>
      <h2 className="txt-titulo">Estado Nutricional</h2>

      {/* Tabla con los productos */}
      <table>
        <thead>
          <tr>
            <th>Región</th>
            <th>Distrito</th>
            <th>Descripción</th>
            <th>Desnutrición (%)</th>
            <th>Normopeso (%)</th>
            <th>Sobrepeso (%)</th>
            <th>Obesidad (%)</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((dato, index) => (
            <tr key={index}>
              <td>{dato.region}</td>
              <td>{dato.distrito}</td>
              <td>{dato.descripcion}</td>
              {/* Mostrar los porcentajes de estado nutricional */}
              <td>{dato.estadoNutricional?.desnutricion || "N/A"}</td>
              <td>{dato.estadoNutricional?.normopeso || "N/A"}</td>
              <td>{dato.estadoNutricional?.sobrepeso || "N/A"}</td>
              <td>{dato.estadoNutricional?.obesidad || "N/A"}</td>
              <td>
                                    <a 
                                        href="#" 
                                        className="btn-del" 
                                        onClick={() => eliminar(dato._id)}
                                    >
                                        Eliminar
                                    </a>
                                </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionTabla;
