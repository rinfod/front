import React, { useState } from 'react';
import './apppanel.css';
import Panel from './Panel';
import Register from '../login/Register';
import Formulario from '../../template/secctions/Formulario';
import FormProd from '../produccion/FormProd';
import Grafica from './Grafica';

function AppPanel() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app-container">
      <Panel onTabChange={handleTabChange} />
      <div className="right-panel">
      
        <div className="tab-content">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
  
const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'tab1':
      return <div><Register /></div>;
    case 'tab2':
      return <div><Formulario /></div>;
    case 'tab3':
      return <div><FormProd /> </div>;
    default:
      return <div>Selecciona un Tab</div>;
  }
};

export default AppPanel;
