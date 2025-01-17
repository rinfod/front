import React, { useState } from 'react';
import axios from 'axios';

import './card.css'

const Formulario = () => {

    const [formData, setFormData] = useState({
        region: '',
        distrito: '',
        descripcion: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:5000/api/items', formData);
          alert('Registrado con éxito');
          setFormData({
            region: '',
            distrito: '',
            descripcion: ''
          })
        } catch (error) {
          console.error(error.response?.data || 'An error occurred');
          alert('Error registering user');
        }
      };

    return(
        <div class="card">
    <h2>Registro de datos</h2>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="region">Región</label>
        <input type="text" id="region" name="region" placeholder="Ingresa la región" value={formData.region}
            onChange={handleChange}
            required />
      </div>
      <div class="form-group">
        <label for="distrito">Distrito</label>
        <input type="text" id="distrito" name="distrito" placeholder="Ingresa el distrito" value={formData.distrito}
            onChange={handleChange} required />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción</label>
        <input type="descripcion" id="descripcion" name="descripcion" placeholder="Ingresa datos" value={formData.descripcion}
            onChange={handleChange} required />
      </div>
      <button type="submit" class="btn">Enviar</button>
    </form>
  </div>
    );
};

export default Formulario;