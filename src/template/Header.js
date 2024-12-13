

function Header() {
    return (
        <header class="content">
            <div class="header header-bg">
            <div class="container">
                <nav>
                    <div class="logo w200">
                    <div class="col text-aligned-right">
                            <img style={{'min-height': "150px"}} class="header-img sm-hide"
                                src="img/obsano1.png"
                                alt="Experience our platform"/>
                        </div>
                    </div>
                    
                    <div class="menu text-aligned-right sm-hide">
                        <ul>
                            
                            <li><a title="Server Pricing" href="#">Acerca de</a></li>
                            <li><a title="Used technology" href="#">Oaxaca y SAN</a>
                            </li>

                            <li>
                                <a href="javascript:;" id="menu-locations" class="drop-down" title="Locations">
                                    Producción Científica
                                    <span class="open arrow arrow-up"></span>
                                    <span class="closed arrow arrow-down"></span>
                                </a>
                                <div class="h-menu-dropdown-holder two-cols locations">
                                    <div class="h-menu-dropdown-item-wrapper left-col">

                                        <a data-qa="shared-web-hosting-subm" href="#"
                                            title="United States" class="h-menu-dropdown-holder__item d-flex">
                                            <img loading="lazy" data-src="/design/img/menu/us.svg" alt="USA Hosting"
                                                class="icon flagIcon"
                                                src="VPS%20Hosting_%20Unbeatable%20Price-to-Performance%20from%20$4_mo%20Archivos/us_002.svg"/>
                                            <div>
                                                <p class="fs-large fw500 tertiary-color">USA</p>
                                                <p class="fs-small">New York, Chicago, Dallas, Miami, Los Angeles,
                                                    Seattle, Atlanta and Silicon Valley</p>
                                            </div>
                                        </a>

                                        <a data-qa="shared-web-hosting-subm"
                                            href="#" title="Europe"
                                            class="h-menu-dropdown-holder__item d-flex">
                                            <img loading="lazy"
                                                data-src="/static_content/vpsserver_com_frontend/img/EU.svg"
                                                alt="Europe Cloud" class="icon flagIcon"
                                                src="VPS%20Hosting_%20Unbeatable%20Price-to-Performance%20from%20$4_mo%20Archivos/EU.svg"/>
                                            <div>
                                                <p class="fs-large fw500 tertiary-color">Europe</p>
                                                <p class="fs-small">Amsterdam, London, Frankfurt, Milan, Madrid and
                                                    Stockholm</p>
                                            </div>
                                        </a>

                                    </div>
                                    <div class="h-menu-dropdown-item-wrapper right-col">
                                        <a data-qa="shared-web-hosting-subm" href="#"
                                            title="Asia" class="h-menu-dropdown-holder__item d-flex">
                                            <img loading="lazy"
                                                data-src="/static_content/vpsserver_com_frontend/img/asia.svg"
                                                alt="Asia Hosting" class="icon flagIcon"
                                                src="VPS%20Hosting_%20Unbeatable%20Price-to-Performance%20from%20$4_mo%20Archivos/asia.svg"/>
                                            <div>
                                                <p class="fs-large fw500 tertiary-color">Asia</p>
                                                <p class="fs-small">Hong Kong, Singapore and Tokyo</p>
                                            </div>
                                        </a>

                                        <a data-qa="shared-web-hosting-subm" href="#"
                                            title="Other locations" class="h-menu-dropdown-holder__item d-flex">
                                            <img loading="lazy"
                                                data-src="/static_content/vpsserver_com_frontend/img/general-flag.svg"
                                                alt="Other locations" class="icon flagIcon"
                                                src="VPS%20Hosting_%20Unbeatable%20Price-to-Performance%20from%20$4_mo%20Archivos/general-flag.svg"/>
                                            <div>
                                                <p class="fs-large fw500 tertiary-color">All other locations</p>
                                                <p class="fs-small">Sydney, Toronto and Tel Aviv</p>
                                                <p class="fs-small">View all locations</p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" id="menu-company" class="drop-down" title="Company">
                                    Perspectivas
                                    <span class="open arrow arrow-up"></span>
                                    <span class="closed arrow arrow-down"></span>
                                </a>                              
                            </li>
                            <li><a title="Login" href="#">Recursos</a></li>
                           
                        </ul>
                    </div>
                </nav>
                <div>
                    <div class="row row-cols-lg-2 row-cols-sm-1">
                        <div class="col padding-y">
                            <h1>La inseguridad alimentaria en Oaxaca: Debido a los índices de pobreza y marginación</h1>
                            <p class="fs-mid">
                                <strong>La implementación de herramientas como SIG y visualizaciones dinámicas, el sitio busca ofrecer acceso a información confiable y actualizada para apoyar la toma de decisiones basadas en evidencia. </strong> Este esfuerzo busca contribuir a la resolución de la inseguridad alimentaria y fortalecer la coordinación interinstitucional.
                            </p>
                            <img class="header-img sm-show" style={{float:"right"}} width="180" height="180"
                                src="VPS%20Hosting_%20Unbeatable%20Price-to-Performance%20from%20$4_mo%20Archivos/server-os-templates.svg"
                                alt="Operating System Distros"/>
                            <h3>El Observatorio en Seguridad Alimentaria y Nutricional de Oaxaca</h3>
                            <p>es una plataforma digital innovadora que integra tecnologías avanzadas y análisis de datos para monitorear y visibilizar la situación de la seguridad alimentaria en el estado.</p>

                        </div>
                        <div class="col text-aligned-right">
                            <img style={{'min-height': "500px"}} class="header-img sm-hide"
                                src="img/foto7.png"
                                alt="Experience our platform"/>
                        </div>
                    </div>
                </div>



            </div>
            </div>

        </header>
    );
}

export default Header;