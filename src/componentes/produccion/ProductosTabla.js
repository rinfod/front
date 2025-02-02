import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./paginacion.css";
import { AuthContext } from "../../context/AuthContext";

const ProductosTabla = ({ productos, actualizarProductos }) => {
  const { isAuthenticated } = useContext(AuthContext); 
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [productos]);

  const filteredItems = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/prod/producciones/${id}`);
      actualizarProductos(); // Llamar para actualizar la lista tras eliminar
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <div className="container tertiary-bg-map">
      <h2 className="txt-titulo">Productos Académicos</h2>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Título</th>
            <th>Resumen</th>
            <th>Autor</th>
            <th>Leer</th>
            {isAuthenticated && <th>Eliminar</th>}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((producto, index) => (
            <tr key={index}>
              <td>{producto.tipo}</td>
              <td>{producto.nombre}</td>
              <td>{producto.resumen}</td>
              <td>{producto.autor}</td>
              <td><a href="#" className="enlace-elegante">Leer</a></td>
              {isAuthenticated && (
                <td>
                  <a href="#" className="btn-del" onClick={() => eliminarProducto(producto._id)}>Eliminar</a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      
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

export default ProductosTabla;
