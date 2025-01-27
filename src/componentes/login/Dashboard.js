// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { 'x-auth-token': token },
        });
        setUser(response.data);
      } catch (error) {
        window.location.href = '/login';
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
