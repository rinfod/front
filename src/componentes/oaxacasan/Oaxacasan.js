import { useState } from 'react';
import './oaxacasan.css'
function Oaxacasan() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTexto = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>

            <hr className="featurette-divider" />
            <div className="featurette">
                <div className="featurette-left">
                    <h2 className="featurette-heading">
                        Con<span className="text-muted">texto</span>
                    </h2>
                    <p className="lead text-ad">
                        Oaxaca, reconocido como uno de los estados con mayor diversidad cultural y geográfica de México, está dividido en <b>ocho regiones</b>: Valles Centrales, Sierra Norte, Sierra Sur, Mixteca, Costa, Cañada, Papaloapan e Istmo de Tehuantepec.

                        {isExpanded && (
                            <span>
                                Estas regiones reflejan una amplia gama de condiciones socioeconómicas y ambientales, que inciden directamente en la Seguridad Alimentaria y Nutricional (SAN).
                                El estado enfrenta altos índices de pobreza y marginación, particularmente en comunidades rurales e indígenas, donde el acceso a alimentos suficientes, inocuos y nutritivos es limitado. Estas características hacen de Oaxaca un caso de estudio emblemático para entender las complejas relaciones entre desarrollo social, recursos naturales y políticas públicas enfocadas en la SAN.
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
                        src="img/foto3.png"
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

                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="featurette-heading">
                                Con<span className="text-muted">ceptos</span>
                            </h2>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col col-lg-4 col-sm-4">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Seguridad Alimentaria y Nutricional (SAN)</text></svg>

                                <div class="card-body">
                                    <p class="card-text">La SAN se define como el estado en el que todas las personas tienen acceso físico, social y económico a alimentos suficientes, inocuos y nutritivos que satisfagan sus necesidades dietéticas para llevar una vida activa y saludable. Este concepto integra aspectos de disponibilidad, acceso, utilización y estabilidad de los alimentos.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-4 col-sm-4">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Análisis Espacial y SIG</text></svg>

                                <div class="card-body">
                                    <p class="card-text">El análisis espacial es una metodología que permite examinar la distribución geográfica de variables relacionadas con la SAN, identificando patrones, tendencias y áreas de vulnerabilidad. Los Sistemas de Información Geográfica (SIG) son herramientas clave que integran datos geográficos y estadísticos, facilitando la toma de decisiones informadas mediante la visualización y el monitoreo de las condiciones de SAN en Oaxaca.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-4 col-sm-4">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Información Geográfica (SIG):</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Información Geográfica (SIG): son herramientas clave que integran datos geográficos y estadísticos, facilitando la toma de decisiones informadas mediante la visualización y el monitoreo de las condiciones de SAN en Oaxaca.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content text-columns ">
                <div class="container padding-y">

                    <div class="row">

                        <div class="col col-lg-12 col-sm-12">
                            <h2 className="featurette-heading">
                                Dimen<span className="text-muted">siones</span>
                            </h2>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Disponibilidad</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Producción, almacenamiento y distribución de alimentos en cantidad suficiente para satisfacer la demanda local.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Acceso</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Capacidad de los individuos para adquirir alimentos, influenciada por factores económicos, sociales y físicos.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Utilización</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Uso adecuado de los alimentos, garantizando su calidad, inocuidad y valor nutricional, además de aspectos como el acceso a agua potable y servicios de salud.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Estabilidad</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Garantía de que las condiciones de SAN se mantengan a lo largo del tiempo, evitando fluctuaciones causadas por factores climáticos, económicos o políticos.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div class="content padding-y-big tertiary-bg-mapa">
                <div class="container padding-y-big">
                    <div class="row">

                        <div class="col col-lg-12 col-sm-12">
                            <div class="row">

                                    <h2 className="featurette-heading">
                                        Norma<span className="text-muted">tividad</span>
                                    </h2>
                            </div>
                            <p class="fs-mid elemento interlineado">
                                <strong>
                                    En México, la SAN está respaldada por un marco jurídico que promueve el derecho a la alimentación adecuada y establece la base legal para políticas públicas y programas. Entre las principales disposiciones se encuentran:


                                </strong>
                            </p>
                        </div>
                    </div>



                    <div class="row">

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Constitución Política de los Estados Unidos Mexicanos (Artículo 4):</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Garantiza el derecho humano a una alimentación nutritiva, suficiente y de calidad.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Ley General de Desarrollo Social:</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Enuncia lineamientos para combatir la pobreza y garantizar la SAN en comunidades vulnerables.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Ley de Desarrollo Rural Sustentable:</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Promueve el desarrollo integral del sector agroalimentario, incluyendo acciones para mejorar la disponibilidad y acceso a alimentos.</p>

                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-3 col-sm-3">
                            <div class="cardA shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Normas Oficiales Mexicanas (NOM):</text></svg>

                                <div class="card-body">
                                    <p class="card-text">Como la NOM-251-SSA1-2009, que regula las prácticas de higiene en alimentos</p>

                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>




        </div>
    );
}

export default Oaxacasan;