import React from "react";

const Botao = ({ onClick, text,  }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        borderColor: "red",
        border: "2px solid red",
        backgroundColor: "#007bff",
        margin: '5px',
        color: "#fff",
      }}
      onClick={onClick}
    >
      
      {text}
    </button>
  );
};

export default Botao;
