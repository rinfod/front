import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormProd from "./FormProd";


import './producto.css'; // Archivo CSS para estilos

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


    return (
        <div>

            <div class="content padding-y-big tertiary-bg-mapa">
                <div class="container padding-y-big">
                    <div class="row">

                        <div class="col col-lg-12 col-sm-12">
                            <FormProd onProductoActualizado={fetchProductos} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="ccontent sub-footer header-bg md-hide">
                <div class="container padding-y">

                    <div class="row">
                        <div class="col col-lg-12 col-sm-12 text-col">
                            ¡Productos <span class="secondary-color"></span> Científicos!
                        </div>

                    </div>
                </div>
            </div>

            <div class="content padding-y-big tertiary-bg-mapa">
                <div class="container padding-y-big">
                    <div class="row">
                        <div class="col col-lg-12 col-sm-12">


                            <div className="productos-container">
                                {produccion.map(producto => (
                                    <div key={producto._id} className="card">
                                        <h3 >{producto.tipo}</h3>
                                        <hr className='thin-gray'/>
                                        <p>{producto.nombre}</p>
                                        <hr className='thin-gray'/>
                                        <p>{producto.resumen}</p>
                                        <hr className='thin-gray'/>
                                        <p><strong>Autor:</strong> {producto.autor}</p>
                                    </div>
                                ))}
                            </div>



                        </div>
                    </div>
                </div>
            </div>



            

            {/*
            <div class="content">
                <div class="container padding-y-big">
                    <div class="row">
                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="fw500 tertiary-color no-margin" >Artículos</h2>
                            <p class="fs-mid">
                                <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="content padding-y-big tertiary-bg-mapa">
                <div class="container padding-y-big">
                    <div class="row">

                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="fw500 white-color no-margin" >Libros y Capítulos</h2>
                            <p class="fs-mid">
                                <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container padding-y-big">
                    <div class="row">
                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="fw500 tertiary-color no-margin" >Infografías</h2>
                            <p class="fs-mid">
                                <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="content padding-y-big tertiary-bg-mapa">
                <div class="container padding-y-big">
                    <div class="row">

                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="fw500 white-color no-margin" >Informes</h2>
                            <p class="fs-mid">
                                <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="content">
                <div class="container padding-y-big">
                    <div class="row">
                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="fw500 tertiary-color no-margin" >Reportes de Caso</h2>
                            <p class="fs-mid">
                                <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="content padding-y-big tertiary-bg-mapa">
                <div class="container padding-y-big">
                    <div class="row">

                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="fw500 white-color no-margin" >Cartogramas</h2>
                            <p class="fs-mid">
                                <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

*/}



        </div>
    );
}

export default Produccion;