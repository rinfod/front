
import { useState } from 'react';
import './acercade.css'



function Acercade() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);

    const toggleTexto = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleTexto1 = () => {
        setIsExpanded1(!isExpanded1);
    };

    const toggleTexto2 = () => {
        setIsExpanded2(!isExpanded2);
    };


    return (
        <div>

            <hr className="featurette-divider" />
            <div className="featurette">
                <div className="featurette-left">
                    <h2 className="featurette-heading">
                        Intro<span className="text-muted">ducción.</span>
                    </h2>
                    <p className="lead text-ad">
                        El Observatorio en Seguridad Alimentaria y Nutricional de Oaxaca
                        (OBSANO) es una plataforma digital innovadora que integra
                        tecnologías avanzadas y análisis de datos para monitorear y
                        visibilizar la situación de la seguridad alimentaria en el estado.

                        {isExpanded && (
                            <span>
                                Este esfuerzo responde a los persistentes desafíos en el acceso y
                                disponibilidad de alimentos en comunidades vulnerables, especialmente
                                en zonas rurales y marginadas.
                                Con un enfoque basado en evidencia
                                científica, OBSANO se posiciona como una herramienta clave para
                                fortalecer la toma de decisiones de autoridades, académicos y actores
                                sociales.
                                Además de recopilar y procesar datos, el Observatorio fomenta la
                                transparencia y la participación social al emplear tecnologías
                                como sistemas de información geográfica (SIG) y análisis
                                estadísticos avanzados. Este modelo, vinculado al marco del
                                Gobierno Electrónico, busca transformar la administración pública
                                mediante la innovación tecnológica, facilitando el acceso a
                                información clave para promover políticas alimentarias sostenibles
                                y garantizar el derecho a la alimentación adecuada.
                            </span>
                        )}
                    </p>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleTexto();
                        }}
                        className="leer-mas"
                    >
                        {isExpanded ? 'Leer menos' : 'Leer más'}
                    </a>
                </div>
                <div className="featurette-right">
                    <img
                        className="featurette-image"
                        src="img/img-1.jpg"
                        alt="Descripción de la imagen"
                        width="500"
                        height="500"
                    />
                </div>
            </div>
            <hr className="featurette-divider" />





            <div className="featurette">
                <div className="featurette-right">
                    <img
                        className="featurette-image"
                        src="img/img-2.jpg"
                        alt="Descripción de la imagen"
                        width="500"
                        height="500"
                    />
                </div>
                <div className="featurette-left">
                    <h2 className="featurette-heading">
                        Ante<span className="text-muted">cedentes.</span>
                    </h2>
                    <p className="lead text-ad">
                        La seguridad alimentaria en Oaxaca enfrenta múltiples retos debido a factores estructurales como la pobreza, la desigualdad y la vulnerabilidad climática, que afectan de manera desproporcionada a comunidades rurales e indígenas.
                        {isExpanded1 && (
                            <span>
                                Diversos estudios han señalado la importancia de contar con sistemas de monitoreo y evaluación efectivos para diseñar políticas públicas basadas en evidencia.
                                En este contexto, el Observatorio en Seguridad Alimentaria y Nutricional de Oaxaca (OBSANO) surge como una iniciativa estratégica que combina innovación tecnológica y análisis de datos para contribuir a la resolución de esta problemática y fortalecer la gestión pública en el marco del Gobierno Electrónico.
                            </span>
                        )}
                    </p>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleTexto1();
                        }}
                        className="leer-mas"
                    >
                        {isExpanded1 ? 'Leer menos' : 'Leer más'}
                    </a>
                </div>

            </div>
            <hr className="featurette-divider" />



            <div className="featurette">

                <div className="featurette-left">
                    <h2 className="featurette-heading">
                        Justifi<span className="text-muted">cación.</span>
                    </h2>
                    <p className="lead text-ad">
                        La limitada disponibilidad de datos confiables y accesibles sobre la seguridad alimentaria dificulta la formulación de políticas públicas efectivas en Oaxaca.

                        {isExpanded2 && (
                            <span>
                                OBSANO responde a esta necesidad al proporcionar un espacio digital que integra tecnologías avanzadas para:
                                <ul>
                                    <li>
                                        Identificar patrones y tendencias de inseguridad alimentaria.
                                    </li>
                                    <li>
                                        Evaluar la eficacia de políticas y programas sociales.
                                    </li>
                                    <li>
                                        Fomentar la transparencia y participación ciudadana en la gestión pública.
                                    </li>
                                </ul>
                                Esta plataforma no solo mejora el acceso a información clave, sino que también promueve la adopción de herramientas de Gobierno Electrónico para fortalecer la toma de decisiones informadas y la implementación de políticas sostenibles.
                            </span>
                        )}
                    </p>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleTexto2();
                        }}
                        className="leer-mas"
                    >
                        {isExpanded2 ? 'Leer menos' : 'Leer más'}
                    </a>
                </div>

                <div className="featurette-right">
                    <img
                        className="featurette-image"
                        src="img/img-3.jpg"
                        alt="Descripción de la imagen"
                        width="500"
                        height="500"
                    />
                </div>

            </div>
            <hr className="featurette-divider" />



            <div class="content text-columns tertiary-bg-mapa">
                <div class="container padding-y">
                    <div class="row">

                        <div class="col col-lg-4 col-sm-4">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Objetivo</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Desarrollar y consolidar una plataforma digital que facilite el acceso a datos confiables y análisis integrales sobre seguridad alimentaria en Oaxaca, promoviendo la transparencia, la innovación tecnológica y el uso de herramientas de Gobierno Electrónico para empoderar a los tomadores de decisiones, investigadores y ciudadanos.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-4 col-sm-4">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Misión</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Contribuir a la mejora de la seguridad alimentaria en Oaxaca mediante el análisis y visualización de datos clave, integrando herramientas de Gobierno Electrónico para garantizar la transparencia, la accesibilidad y la efectividad en la toma de decisiones públicas.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-4 col-sm-4">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Visión</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Convertirse en una plataforma líder a nivel regional en el análisis de datos sobre seguridad alimentaria y nutricional, destacando como un modelo de referencia en el uso de tecnologías avanzadas para la innovación gubernamental y el desarrollo sostenible, con un enfoque en la equidad y el derecho a la alimentación adecuada.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="content text-columns ">
                <div class="container padding-y">
                    <div class="row content">
                        <h2 className="fw500 white-color no-margin" >Colaboradores</h2>
                        <div class="col col-lg-3 col-sm-12">
                            <div class="img-container">
                                <img width="200" alt="SSD storage for features" data-src="/static_content/vpsserver_com_frontend/img/technology.svg" loading="lazy" class=" lazyload" src="img/hombre1.png" />
                            </div>
                            <h3 class="tertiary-color">Edú Ortega Ibarra</h3>

                            <p className=" elemento interlineado">Nutriólogo Posgraduado con enfoque en Seguridad Alimentaria y Nutricional, Doctorando en Gobierno Electrónico. Ha participado en investigaciones interinstitucionales en instituciones de prestigio y cuenta con amplia experiencia en la dirección de tesis y publicaciones científicas.</p>

                        </div>
                        <div class="col col-lg-3 col-sm-12">
                            <div class="img-container">
                                <img width="200" loading="lazy" data-src="/static_content/vpsserver_com_frontend/img/rapid-fast.svg" alt="Fast processing power deployment for our VPS Hosting plans" src="img/mujer2.png" />
                            </div>
                            <h3 class="tertiary-color">Norma Martínez</h3>
                            <p className=" elemento interlineado">Especialista en Diseño Gráfico y Mercadotecnia, con una Maestría y Doctorado en Gobierno Electrónico. Su trabajo se enfoca en gobernanza digital y gobierno abierto, con participación en congresos nacionales e internacionales.</p>

                        </div>

                        <div class="col col-lg-3 col-sm-12">
                            <div class="img-container">
                                <img width="200" loading="lazy" data-src="/static_content/vpsserver_com_frontend/img/secure-hosting.svg" alt="Affordable plans" src="img/mujer.png" />
                            </div>
                            <h3 class="tertiary-color">Galdina Fortis Saldaña</h3>
                            <p className=" elemento interlineado">Ingeniera en Computación con estudios avanzados en antropología y tecnologías inteligentes. Actualmente, cursa un Doctorado en Gobierno Electrónico con un enfoque en procesos de información y gestión pública.</p>
                        </div>
                        <div class="col col-lg-3 col-sm-12">
                            <div class="img-container">
                                <img width="200" loading="lazy" data-src="/static_content/vpsserver_com_frontend/img/fast-support.svg" alt="Quick customer support" src="img/hombre.png" />
                            </div>
                            <h3 class="tertiary-color">Rolando Pedro Gabriel</h3>
                            <p className=" elemento interlineado">Experto en Tecnologías de la Información y Comunicación, con experiencia en proyectos de modernización administrativa y análisis de datos para el desarrollo regional.</p>

                        </div>
                    </div>
                </div>
            </div>




            <div class="content tertiary-bg-mapa">
                <div class="container padding-y-big">
                    <div class="row">
                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="fw500 tertiary-color no-margin" >Líneas de investigación</h2>
                            <p class="fs-mid elemento interlineado">
                                <strong>

                                    <ol>
                                        <li><b>Gobierno Electrónico y Sociedad: Administración, Innovación y Transformación Social</b>
                                            Estudio del impacto de las tecnologías digitales en la administración pública y su capacidad para promover la innovación en políticas de seguridad alimentaria, fortaleciendo la relación entre gobierno y sociedad.</li>
                                        <li><b>Sistemas de Información para el Monitoreo de la Seguridad Alimentaria</b>
                                            Diseño y uso de herramientas tecnológicas, como SIG y plataformas interactivas, para la recopilación, análisis y visualización de datos relacionados con el acceso y disponibilidad de alimentos en Oaxaca.</li>
                                        <li><b>Evaluación de Políticas Públicas en Seguridad Alimentaria y Nutricional</b>
                                            Análisis crítico del impacto y efectividad de programas sociales y políticas públicas relacionadas con la seguridad alimentaria, identificando áreas de mejora y proponiendo estrategias basadas en evidencia</li>
                                    </ol>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Acercade;