
//import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Inicio from '../componentes/Inicio/Inicio';
import Banner from './Banner';
import Acercade from '../componentes/acercade/Acercade';
import Oaxacasan from '../componentes/oaxacasan/Oaxacasan';
import Produccion from '../componentes/produccion/Produccion';
import Login from '../componentes/login/Login';
import Register from '../componentes/login/Register';
import Dashboard from '../componentes/login/Dashboard';


function Header() {
    // Custom hook para verificar la ruta actual
    const location = useLocation();

    return (
        <div>
            <header class="content">
                <div class="header header-bg">
                    <div class="container">


                        <nav>
                            <div class="logo w200">
                                <div class="col text-aligned-right">
                                    <img style={{ 'min-height': "150px" }} class="header-img sm-hide"
                                        src="img/obsano1.png"
                                        alt="Experience our platform" />
                                </div>
                            </div>

                            <div class="menu text-aligned-right sm-hide">
                                <ul>

                                    <li>
                                        <Link class="navbar-brand" aria-current="page" to="/">Inicio</Link>
                                    </li>
                                    <li>
                                        <Link class="navbar-brand" aria-current="page" to="/acercade">Acerca de</Link>
                                    </li>
                                    <li>
                                        <Link class="navbar-brand" aria-current="page" to="/oaxacasan">Oaxaca y SAN</Link>
                                    </li>

                                    <li>
                                        <Link class="navbar-brand" aria-current="page" to="/produccion">Producción Científica</Link>
                                    </li>
                                </ul>
                            </div>

                        </nav>


                        {/* Mostrar Banner solo en la página de inicio */}
                        {location.pathname === "/" && <Banner />}


                    </div>
                </div>

            </header>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/acercade" element={<Acercade />} />
                <Route path="/oaxacasan" element={<Oaxacasan />} />
                <Route path="/produccion" element={<Produccion />} />

                <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default Header;