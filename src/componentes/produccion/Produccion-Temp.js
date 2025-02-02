import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormProd from "./FormProd";


import './producto.css'; // Archivo CSS para estilos
import './cardProd.css';

const ProduccionTemp = () => {
    const [produccion, setProduccion] = useState([]);
    const [isAccordionOpenArticulo, setAccordionOpenArticulo] = useState(false);
    const [isAccordionOpenLibro, setAccordionOpenLibro] = useState(false);
    const [isAccordionOpenCapitulo, setAccordionOpenCapitulo] = useState(false);
    const [isAccordionOpenPresentacion, setAccordionOpenPresentacion] = useState(false);
    const [isAccordionOpenPoster, setAccordionOpenPoster] = useState(false);
    const [isAccordionOpenTesis, setAccordionOpenTesis] = useState(false);

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


    // Función para manejar la apertura/cierre del acordeón
    const toggleAccordionArticulo = () => {
        setAccordionOpenArticulo(!isAccordionOpenArticulo);
    };

    // Función para manejar la apertura/cierre del acordeón
    const toggleAccordionLibro = () => {
        setAccordionOpenLibro(!isAccordionOpenLibro);
    };

    // Función para manejar la apertura/cierre del acordeón
    const toggleAccordionCapitulo = () => {
        setAccordionOpenCapitulo(!isAccordionOpenCapitulo);
    };

    // Función para manejar la apertura/cierre del acordeón
    const toggleAccordionPresentacion = () => {
        setAccordionOpenPresentacion(!isAccordionOpenPresentacion);
    };

    // Función para manejar la apertura/cierre del acordeón
    const toggleAccordionPoster = () => {
        setAccordionOpenPoster(!isAccordionOpenPoster);
    };

    // Función para manejar la apertura/cierre del acordeón
    const toggleAccordionTesis = () => {
        setAccordionOpenTesis(!isAccordionOpenTesis);
    };



    return (
        <div>

     



            <div className="content">
                <div onClick={toggleAccordionArticulo} >
                    <h2 className="fw500 tertiary-color no-margin toggle-prod">Artículos</h2>
                    {isAccordionOpenArticulo && ( // Renderiza las tarjetas solo si el acordeón está abierto
                        <div className="productos-container">
                            {produccion
                                .filter((producto) => producto.tipo === "Artículo") // Filtra solo los artículos
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
                                                        className="btn-del"
                                                        onClick={() => eliminarProducto(producto._id)}
                                                    >Eliminar</a>

                                                    <a href="#"
                                                        className="btn-p"
                                                        onClick={() => eliminarProducto(producto._id)}
                                                    >Leer</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>



            <div className="content tertiary-bg-mapa">
                <div className="content">
                    <div onClick={toggleAccordionLibro} >
                        <h2 className="fw500 tertiary-color no-margin toggle-prod">Libros</h2>
                        {isAccordionOpenLibro && ( // Renderiza las tarjetas solo si el acordeón está abierto
                            <div className="productos-container">
                                {produccion
                                    .filter((producto) => producto.tipo === "Libro") // Filtra solo los artículos
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
                                                            className="btn-del"
                                                            onClick={() => eliminarProducto(producto._id)}
                                                        >Eliminar</a>
                                                        <a href="#"
                                                            className="btn-p"
                                                            onClick={() => eliminarProducto(producto._id)}
                                                        >Leer</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <div className="content">
                <div onClick={toggleAccordionCapitulo} >
                    <h2 className="fw500 tertiary-color no-margin toggle-prod">Capítulos</h2>
                    {isAccordionOpenCapitulo && ( // Renderiza las tarjetas solo si el acordeón está abierto
                        <div className="productos-container">
                            {produccion
                                .filter((producto) => producto.tipo === "Capítulo") // Filtra solo los artículos
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
                                                        className="btn-del"
                                                        onClick={() => eliminarProducto(producto._id)}
                                                    >Eliminar</a>

                                                    <a href="#"
                                                        className="btn-p"
                                                        onClick={() => eliminarProducto(producto._id)}
                                                    >Leer</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>



            <div className="content tertiary-bg-mapa">
                <div className="content">
                    <div onClick={toggleAccordionPresentacion} >
                        <h2 className="fw500 tertiary-color no-margin toggle-prod">Presentaciones</h2>
                        {isAccordionOpenPresentacion && ( // Renderiza las tarjetas solo si el acordeón está abierto
                            <div className="productos-container">
                                {produccion
                                    .filter((producto) => producto.tipo === "Presentación") // Filtra solo los artículos
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
                                                            className="btn-del"
                                                            onClick={() => eliminarProducto(producto._id)}
                                                        >Eliminar</a>
                                                        <a href="#"
                                                            className="btn-p"
                                                            onClick={() => eliminarProducto(producto._id)}
                                                        >Leer</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <div className="content">
                <div onClick={toggleAccordionPoster} >
                    <h2 className="fw500 tertiary-color no-margin toggle-prod">Posters</h2>
                    {isAccordionOpenPoster && ( // Renderiza las tarjetas solo si el acordeón está abierto
                        <div className="productos-container">
                            {produccion
                                .filter((producto) => producto.tipo === "Poster") // Filtra solo los artículos
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
                                                        className="btn-del"
                                                        onClick={() => eliminarProducto(producto._id)}
                                                    >Eliminar</a>

                                                    <a href="#"
                                                        className="btn-p"
                                                        onClick={() => eliminarProducto(producto._id)}
                                                    >Leer</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>



            <div className="content tertiary-bg-mapa">
                <div className="content">
                    <div onClick={toggleAccordionTesis} >
                        <h2 className="fw500 tertiary-color no-margin toggle-prod">Tesis</h2>
                        {isAccordionOpenTesis && ( // Renderiza las tarjetas solo si el acordeón está abierto
                            <div className="productos-container">
                                {produccion
                                    .filter((producto) => producto.tipo === "Tesis") // Filtra solo los artículos
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
                                                            className="btn-del"
                                                            onClick={() => eliminarProducto(producto._id)}
                                                        >Eliminar</a>
                                                        <a href="#"
                                                            className="btn-p"
                                                            onClick={() => eliminarProducto(producto._id)}
                                                        >Leer</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            



        </div>
    );
}

export default ProduccionTemp;