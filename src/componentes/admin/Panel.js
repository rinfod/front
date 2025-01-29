import React from 'react';
import './panel.css';

const Panel = ({ onTabChange }) => {
  return (
    <div className="left-panel">
      <div className="user-avatar">
        <img src="./img/admin1.png" alt="User Avatar" />
      </div>
      <div className="buttons">
        <button onClick={() => onTabChange('tab1')}>Usuarios</button>
        <button onClick={() => onTabChange('tab2')}>Regiones</button>
        <button onClick={() => onTabChange('tab3')}>Productos</button>
      </div>
    </div>
  );
};

export default Panel;
