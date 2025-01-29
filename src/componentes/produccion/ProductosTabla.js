import React, { useState, useEffect } from "react";
import axios from "axios";
import "./paginacion.css";

const ProductosTabla = () => {
  const [produccion, setProduccion] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/prod/produccion");
        setProduccion(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchProductos();
  }, []);

  const filteredItems = produccion.filter(producto =>
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

  return (
    <div className="container">
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
          </tr>
        </thead>
        <tbody>
          {currentItems.map((producto, index) => (
            <tr key={index}>
              <td>{producto.tipo}</td>
              <td>{producto.nombre}</td>
              <td>{producto.resumen}</td>
              <td>{producto.autor}</td>
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