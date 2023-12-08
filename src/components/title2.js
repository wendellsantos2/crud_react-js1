import React from 'react';
import './css.css';

function Title2({onChange}) {
  return (
    <div className="comportamento_require text-center">
      <div className="">
        <h2>
          Requisitos Comportamentais <br />(Obrigatórios e Desejáveis)
        </h2>
      </div>
        <textarea 
        id="requisitos_compoortamentais" 
        name="requisitosComportamentais"
         type="requisitos"

        onChange={onChange}
         ></textarea>
     
    </div>
  );
}

export default Title2;
