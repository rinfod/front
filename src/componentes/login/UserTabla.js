import React, { useState, useEffect } from "react";
import axios from "axios";
import './paginacion.css'

const UserTabla = () => {
  const [produccion, setProduccion] = useState([]); // Almacenar todos los productos
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(5); // Cantidad de elementos por página

  // Función para obtener los productos desde el servidor
  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/users');
      setProduccion(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  // Cargar los productos cuando el componente se monte
  useEffect(() => {
    fetchProductos();
  }, []);

  // Lógica para obtener los productos de la página actual
  const indexOfLastItem = currentPage * itemsPerPage; // Último índice del item en la página
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Primer índice del item en la página
  const currentItems = produccion.slice(indexOfFirstItem, indexOfLastItem); // Productos para la página actual

  // Cambiar la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total de páginas necesarias para mostrar todos los productos
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(produccion.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h2 className="txt-titulo">Lista de usuarios</h2>

      {/* Tabla con los productos */}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((producto, index) => (
            <tr key={index}>
              <td>{producto.email}</td>
              <td>{producto.password}</td>
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

export default UserTabla;
