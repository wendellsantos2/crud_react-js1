import React from 'react';
import './css.css';

function RowContainer1({ onChange }) {
  return (
    <div className="row-container1">
      <div className="column">
        <div className="coluna1">
          <input 
            type="text" 
            id="empresa" 
            name="empresa" 
            placeholder="empresa" 
            required 
            onChange={onChange} 
          />
        </div>
        <div className="coluna1">
          <input 
            type="email" 
            id="email"  // Corrigido de 'e-mail' para 'email'
            name="email"  // Corrigido de 'e-mail' para 'email'
            placeholder="e-mail" 
            required 
            onChange={onChange} 
          />
        </div>
      </div>
      <div className="column">
        <div className="coluna2">
          <input 
            type="text" 
            id="cnpj" 
            name="cnpj" 
            placeholder="cnpj" 
            required 
            onChange={onChange} 
          />
        </div>
        <div className="coluna2">
          <input 
            type="text" 
            id="fone" 
            name="fone" 
            placeholder="fone Solicitante" 
            required 
            onChange={onChange} 
          />
        </div>
      </div>
      <div className="column">
        <div className="coluna3">
          <input 
            type="text" 
            id="nome-solicitante" 
            name="nomeSolicitante"  // Corrigido para camelCase
            placeholder="nome solicitante" 
            required 
            onChange={onChange} 
          />
        </div>
      </div>
    </div>
  );
}

export default RowContainer1;
