
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
import Logout from '../componentes/login/Logout';
import PrivateRoute from './PrivateRoute';
import Panel from '../componentes/admin/AppPanel';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

//import './menu.css'

function Header() {
    const location = useLocation();
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div>
            <header className="content">
                <div className="header header-bg">
                    <div className="container">
                        <nav>
                            <div className="logo w200">
                                <div className="col text-aligned-right">
                                    <img style={{ minHeight: "150px" }} className="header-img sm-hide"
                                        src="img/obsano1.png" alt="Experience our platform" />
                                </div>
                            </div>
                            <div className="menu text-aligned-right sm-hide">
                                <ul>
                                    <li><Link className="navbar-brand" to="/">Inicio</Link></li>
                                    <li><Link className="navbar-brand" to="/acercade">Acerca de</Link></li>
                                    <li><Link className="navbar-brand" to="/oaxacasan">Oaxaca y SAN</Link></li>
                                    <li><Link className="navbar-brand" to="/produccion">Producción Científica</Link></li>
                                    {isAuthenticated && (
                                        <li><Link className="navbar-brand" to="/panel">Registro</Link></li>
                                    )}
                                    {!isAuthenticated ? (
                                        <li><Link className="navbar-brand" to="/login">Login</Link></li>
                                    ) : (
                                        <li><Logout /></li>
                                    )}
                                </ul>
                            </div>
                        </nav>
                        {location.pathname === "/" && <Banner />}
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/acercade" element={<Acercade />} />
                <Route path="/oaxacasan" element={<Oaxacasan />} />
                <Route path="/produccion" element={<Produccion />} />
                <Route path="/panel" element={<Panel />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default Header;