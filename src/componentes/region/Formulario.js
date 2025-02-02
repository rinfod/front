import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import './card.css'
import RegionTabla from './RegionTabla';


const Formulario = () => { 
const [dato, setDato] = useState([]);
  const [formData, setFormData] = useState({
    region: '',
    distrito: '',
    descripcion: '',
    estadoNutricional: {
      desnutricion: '',
      normopeso: '',
      sobrepeso: '',
      obesidad: ''
    }
  });

  const regionesConDistritos = {
    "Costa": ["Jamiltepec", "Juquila", "Pochutla"],
    "Itsmo": ["Juchitán", "Tehuantepec", "Matiasromero"],
    "Mixteca": ["Huajuapan", "Nochixtlán", "Juxtlahuaca", "Silacayoapam", "Coixtlahuaca", "Teposcolula", "Tlaxiaco"],
    "Cañada": ["Teotitlán", "Cuicatlán"],
    "Valles Centrales": ["Oaxacadejuárez", "Zimatlán", "Etla"],
    "Sierra Sur": ["Putla", "Soladevega", "Miahuatlan", "Yautepec"],
    "Papaloapan": ["Tuxtepec", "Vallenacional", "Choapan"],
    "Sierra Norte": ["Ixtlán", "Villa Alta", "Mixe"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    

    if (name === "region") {
      // Al cambiar la región, se limpia el distrito
      setFormData({ ...formData, region: value, distrito: '' });
    } else {
      // Si es un campo de estado nutricional
    if (["desnutricion", "normopeso", "sobrepeso", "obesidad"].includes(name)) {
      setFormData({
        ...formData,
        estadoNutricional: { ...formData.estadoNutricional, [name]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    }
  };

  const validatePercentages = () => {
    const { desnutricion, normopeso, sobrepeso, obesidad } = formData.estadoNutricional;
    const total = Number(desnutricion) + Number(normopeso) + Number(sobrepeso) + Number(obesidad);
    return total === 100;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePercentages()) {
      alert("Los porcentajes deben sumar 100%");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/items', formData);
      alert('Registrado con éxito');
      setFormData({
        region: '',
        distrito: '',
        descripcion: '',
        estadoNutricional: {
          desnutricion: '',
          normopeso: '',
          sobrepeso: '',
          obesidad: ''
        }        
      });
      actualizarDato();
    } catch (error) {
      console.error(error.response?.data || 'Error al registrar');
      alert('Error en el registro');
    }
  };


  const actualizarDato = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setDato(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    actualizarDato(); // Cargar los productos al inicio
      }, []);

  return (
    <div class="row">
      <div class="col col-lg-4 col-sm-4 ">

        <div class="card">
        <h2 className="txt-titulo">Registro de datos por región</h2>
          <form onSubmit={handleSubmit}>


            {/* Región */}
            <div className="form-group">
              <label htmlFor="region">Región</label>
              <select name="region" value={formData.region} onChange={handleChange} required>
                <option value="">Selecciona una región</option>
                {Object.keys(regionesConDistritos).map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>


            {/* Distrito dinámico */}
            <div className="form-group">
              <label htmlFor="distrito">Distrito</label>
              <select name="distrito" value={formData.distrito} onChange={handleChange} required disabled={!formData.region}>
                <option value="">Selecciona un distrito</option>
                {formData.region && regionesConDistritos[formData.region].map((distrito) => (
                  <option key={distrito} value={distrito}>{distrito}</option>
                ))}
              </select>
            </div>

            {/* Descripción */}
            <div className="form-group">
              <label htmlFor="descripcion">Descripción</label>
              <textarea name="descripcion" placeholder="Ingresa datos" value={formData.descripcion} onChange={handleChange} required />
            </div>

            {/* Estado Nutricional */}
            <fieldset className="fieldset">
              <legend>Estado Nutricional (%)</legend>
              <div className="form-group">
                <label>Desnutrición</label>
                <input type="number" name="desnutricion" value={formData.estadoNutricional.desnutricion} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Normopeso</label>
                <input type="number" name="normopeso" value={formData.estadoNutricional.normopeso} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Sobrepeso</label>
                <input type="number" name="sobrepeso" value={formData.estadoNutricional.sobrepeso} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Obesidad</label>
                <input type="number" name="obesidad" value={formData.estadoNutricional.obesidad} onChange={handleChange} required />
              </div>
            </fieldset>

            <button type="submit" class="btn">Enviar</button>
          </form>
        </div>
      </div>
      <div class="col col-lg-8 col-sm-4 ">
        <RegionTabla dato={dato} actualizarDato={actualizarDato} />
      </div>
    </div>

  );
};

export default Formulario;