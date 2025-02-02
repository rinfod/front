import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormProd from './FormProd';
import Grafica from '../admin/Grafica';
import ProductosTabla from './ProductosTabla';

const AdminPanel = () => {
  const [productos, setProductos] = useState([]);

  // Función para obtener los productos desde la API
  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/prod/producciones');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos', error);
    }
  };

  // Se ejecuta una vez al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div>
      <FormProd onProductoActualizado={fetchProductos} />
      <Grafica productos={productos} />
      <ProductosTabla productos={productos} />
    </div>
  );
};

export default AdminPanel;
