import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Botao from './components/button';
import Form from './form';
import Graficos from './components/grafico';
import Sidemenu from './components/sidemenu';
import BaseField from './components/basefield'







const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);}
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm); 
  };
  const[showGraf,setShowGraf] = useState(false)

  const handleGraficoClick = () => {
    setShowGraf(!showGraf);
  };

  return (
    <React.StrictMode>
      <BaseField>
      <h1>Grafico de conexões HL4</h1>
      <Botao onClick={handleButtonClick} text={"formulário"} />
      {showForm && <Form />} 
      <Botao onClick={handleGraficoClick} text={"grafico"} />
      {showGraf && <Graficos/>}
      <Sidemenu isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </BaseField>
    </React.StrictMode>
  );
};

root.render(<Index />);

reportWebVitals();
