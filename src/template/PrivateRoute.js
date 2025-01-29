import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente de Ruta Privada
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // Puedes verificar si el token existe en el localStorage (o desde donde gestionas la autenticación)

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
