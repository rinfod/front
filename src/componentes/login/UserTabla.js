import React, { useState, useEffect } from "react";
import './paginacion.css';
import axios from "axios";

const UserTabla = ({ users, actualizarUsuarios }) => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(5); // Cantidad de elementos por página

  // Lógica para obtener los usuarios de la página actual
  const indexOfLastItem = currentPage * itemsPerPage; // Último índice del item en la página
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Primer índice del item en la página
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem); // Usuarios para la página actual

  // Cambiar la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total de páginas necesarias para mostrar todos los usuarios
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  


  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/user/${id}`);
      actualizarUsuarios(); // Actualiza la lista de usuarios después de la eliminación, si es necesario
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <div>
      <h2 className="txt-titulo">Lista de usuarios</h2>

      {/* Tabla con los usuarios */}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>
                <a href="#" className="btn-del" onClick={() => eliminarUsuario(user._id)}>
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

export default UserTabla;
