import React from 'react';
import './css.css';

function Title3({ onChange }) {
  return (
    <div id="requisitos_Tecnicos2">
      <h2>
        Requisitos Técnicos (Obrigatórios e Desejáveis)
      </h2>
      <textarea 
        id="requisitos" 
        name="requisitosTecnicos" // Certifique-se de que o nome corresponde à chave no objeto do estado do componente pai
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default Title3;
