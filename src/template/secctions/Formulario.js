import React, { useState } from 'react';
import axios from 'axios';

import './card.css'
import RegionTabla from '../../componentes/region/RegionTabla';

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

  return (
    <div class="row">
      <div class="col col-lg-5 col-sm-4 ">

        <div class="card">
          <h2>Registro de datos</h2>
          <form onSubmit={handleSubmit}>



            <div className="form-group">
              <label htmlFor="tipo">Región</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una región</option>
                <option value="Costa">Costa</option>
                <option value="Itsmo">Itsmo</option>
                <option value="Mixteca">Mixteca</option>
                <option value="Cañada">Cañada</option>
                <option value="Valles Centrales">Valles Centrales</option>
                <option value="Sierra Sur">Sierra Sur</option>
                <option value="Papaloapan">Papaloapan</option>
                <option value="Sierra Norte">Sierra Norte</option>
              </select>
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
      </div>
      <div class="col col-lg-5 col-sm-4 ">
        <RegionTabla />
      </div>
    </div>

  );
};

export default Formulario;