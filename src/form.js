import React, { useState } from 'react';

const Form = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarregar a página
    console.log('Nome cadastrado:', nome);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px' }}>
        Cadastrar
      </button>
    </form>
  );
};

export default Form;