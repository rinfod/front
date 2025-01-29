// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import UserTabla from './UserTabla';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log('ingresando datos')
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div class="row">
      <div class="col col-lg-6 col-sm-4 ">
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    <div class="col col-lg-6 col-sm-4 ">
      <UserTabla />
    </div>
    </div>
  );
}

export default Register;
