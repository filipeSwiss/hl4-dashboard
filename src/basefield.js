import React from "react";

const BaseField = ({ children }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100 flex gap-2">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <BaseField>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Botão 1</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Botão 2</button>
      </BaseField>
    </div>
  );
};

export default BaseField;
