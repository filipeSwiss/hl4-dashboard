import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graficos = () => {
  // Dados dos roteadores e número de pessoas conectadas
  const dados = [
    { mes: 'Janeiro', roteador: 'HL3', pessoasConectadas: 20 },
    { mes: 'Fevereiro', roteador: 'HL3', pessoasConectadas: 30 },
    { mes: 'Janeiro', roteador: 'HL4', pessoasConectadas: 25 },
    { mes: 'Fevereiro', roteador: 'HL4', pessoasConectadas: 35 },
  ];
                       
  // Organizando os dados para o gráfico
  const meses = [...new Set(dados.map((item) => item.mes))]; // Obtém os meses únicos
  const roteadores = [...new Set(dados.map((item) => item.roteador))]; // Obtém os roteadores únicos

  // Mapeando os dados para preencher as labels e os datasets
  const datasets = roteadores.map((roteador) => {
    const dadosRoteador = meses.map((mes) => {
      // Filtra os dados para o roteador e mês específicos
      const item = dados.find((d) => d.roteador === roteador && d.mes === mes);
      return item ? item.pessoasConectadas : 0; // Retorna o número de pessoas conectadas ou 0 se não houver dados
    });

    return {
      label: `Roteador ${roteador}`,
      data: dadosRoteador,
      backgroundColor: roteador === 'HL3' ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)', // Cor diferente para cada roteador
      borderColor: roteador === 'HL3' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)', // Cor diferente para cada roteador
      borderWidth: 1,
    };
  });

  const data = {
    labels: meses, // Meses no eixo X
    datasets: datasets, // Os datasets para cada roteador
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Conectividade dos Roteadores ao Longo dos Meses',
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };

  return (
    <div>
      <h2>Gráfico de Conectividade dos Roteadores</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graficos;
