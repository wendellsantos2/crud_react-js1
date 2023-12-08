import React from 'react';
import './css.css';

function Title4({ onChange }) {
  return (
    <div className="beneficios">
      <h2>Descreva os benefícios</h2>
      <textarea 
        id="descricaoBeneficios" 
        name="descricaoBeneficios"
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default Title4;
