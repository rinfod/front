import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'; // Importar contexto
import './form.css';

function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            login(response.data.token);
            navigate('/');
        } catch (error) {
            setError('Credenciales inválidas. Inténtalo de nuevo.');
        }
    };

    return (
      <div class="content padding-y-big tertiary-bg-mapa">
                
        <div className="form-container ">
            <h2>Iniciar Sesión</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Ingresar</button>
            </form>
        </div>
        </div>
    );
}

export default Login;
