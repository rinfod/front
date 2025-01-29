import React, { useState } from 'react';
import axios from 'axios';

import '../../template/secctions/card.css'
import './formprod.css'
import Grafica from '../admin/Grafica';
import ProductosTabla from './ProductosTabla';

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
    <div>
    <div class="row">
      <div class="col col-lg-4 col-sm-4 ">
        <div class="card-prod">

          <h1 className='txt-titulo'>Registro de Productos Científicos</h1>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="tipo">Tipo</label>
              <select
                id="tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un tipo</option>
                <option value="articulo">Artículo</option>
                <option value="libro">Libro</option>
                <option value="capitulo">Capítulo</option>
                <option value="presentaciones">Presentación</option>
                <option value="poster">Póster</option>
                <option value="tesis">Tesis</option>
              </select>
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
      </div>
      <div class="col col-lg-1 col-sm-1">
      </div>
      <div class="col col-lg-7 col-sm-7">
        <Grafica />
      </div>

    </div>
    <ProductosTabla />
    </div>
  );
};

export default FormProd;