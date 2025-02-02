import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormProd from "./FormProd";


import './cardProd.css';import './producto.css'; // Archivo CSS para estilos

import ProductosTabla from './ProductosTabla';

const Produccion = () => {
    const [produccion, setProduccion] = useState([]);
    // Obtener los productos desde el servidor
    const fetchProductos = async () => {
        axios.get('http://localhost:5000/prod/produccion')
            .then(response => {
                setProduccion(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    };

    useEffect(() => {
        fetchProductos();
    }, []);


    // Función para manejar la eliminación
    const eliminarProducto = async (id) => {
        console.log(id)
        try {
            await axios.delete(`http://localhost:5000/prod/producciones/${id}`); // Llamada al backend
            setProduccion(produccion.filter(producto => producto._id !== id)); // Actualizar el estado local
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };



    return (
        <div>

     



            <div className="content">
                    <h2 className="fw500 tertiary-color no-margin toggle-prod">Producción Científica</h2>
                        <div className="productos-container">
                            {produccion
                                //.filter((producto) => producto.tipo === "Artículo") // Filtra solo los artículos
                                .slice(0, 3) // Toma solo los primeros tres 
                                .map((producto, index) => (
                                    <div key={producto._id}>
                                        <div class="cards-container">
                                            <div class="card">
                                                <div class="card-content">
                                                    <h3>{producto.nombre}</h3>
                                                    <hr className="thin-gray" />
                                                    <p>{producto.resumen}</p>
                                                    <hr className="thin-gray" />
                                                    <p>
                                                        <strong>Autor:</strong> {producto.autor}
                                                    </p>
                                                   

                                                    <a href="#"
                                                        className="btn-p"
                                                    >Leer</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        
            </div>


            <ProductosTabla productos={produccion} />



            



        </div>
    );
}

export default Produccion;