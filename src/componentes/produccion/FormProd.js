import React, { useState } from 'react';
import axios from 'axios';

import '../../template/secctions/card.css'

const FormProd = ({ onProductoActualizado }) => {

  const [formData, setFormData] = useState({
    tipo: '',
    nombre: '',
    resumen: '',
    autor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/prod/producciones', formData);
      alert('Registrado con éxito');
      setFormData({
        tipo: '',
        nombre: '',
        resumen: '',
        autor: '',
      })
      // Notifica al padre que debe actualizar los productos
      onProductoActualizado();
    } catch (error) {
      console.error(error.response?.data || 'An error occurred');
      alert('Error registering user');
    }
  };

  return (
    <div class="card-prod">
      <h1>Registro de Productos Científicos</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="region">Tipo</label>
          <input type="text" id="tipo" name="tipo" placeholder="Ingresa el Tipo" value={formData.tipo}
            onChange={handleChange}
            required />
        </div>
        <div class="form-group">
          <label for="distrito">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre" value={formData.nombre}
            onChange={handleChange} required />
        </div>
        <div class="form-group">
          <label for="descripcion">Resumen</label>
          <input type="text" id="resumen" name="resumen" placeholder="Ingresa el resumen" value={formData.resumen}
            onChange={handleChange} required />
        </div>
        <div class="form-group">
          <label for="descripcion">Autor</label>
          <input type="text" id="autor" name="autor" placeholder="Ingresa el autor" value={formData.autor}
            onChange={handleChange} required />
        </div>
        <button type="submit" class="btn">Enviar</button>
      </form>
    </div>
  );
};

export default FormProd;