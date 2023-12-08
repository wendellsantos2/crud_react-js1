import React from 'react';
import './css.css';

function RowContainer2({ onChange }) {
  return (
    <div className="row-container">
      <div className="column">
        <div className="coluna4">
          <input
            type="text"
            id="tituloContratacao" // Corrigido para camelCase
            name="tituloContratacao" // Corrigido para camelCase
            placeholder="Modelo de contratação"
            required
            onChange={onChange}
          />
          {/* ícone omitido para simplificar */}
        </div>
        <div className="coluna4">
          <input
            type="text"
            id="modalidadeContratacao" // Corrigido para camelCase
            name="modalidadeContratacao" // Corrigido para camelCase
            placeholder="Tipo de contratação"
            required
            onChange={onChange}
          />
          {/* ícone omitido para simplificar */}
        </div>
        <div className="coluna4">
          <input
            type="text"
            id="periodoContratacao" // Corrigido para camelCase
            name="periodoContratacao" // Corrigido para camelCase
            placeholder="Local de contratação"
            required
            onChange={onChange}
          />
          {/* ícone omitido para simplificar */}
        </div>
      </div>
      <div className="column">
        <div className="coluna5">
          <input
            type="text"
            id="posicao"
            name="posicao"
            placeholder="Cargo"
            required
            onChange={onChange}
          />
          {/* ícone omitido para simplificar */}
        </div>
        <div className="coluna5">
          <input
            type="text"
            id="horarioTrabalho" // Corrigido para camelCase
            name="horarioTrabalho" // Corrigido para camelCase
            placeholder="Horário de trabalho"
            required
            onChange={onChange}
          />
          {/* ícone omitido para simplificar */}
        </div>
        <div className="coluna5">
          <input
            type="text"
            id="prioridadeContratacao" // Corrigido para camelCase
            name="prioridadeContratacao" // Corrigido para camelCase
            placeholder="Prioridade de contratação"
            required
            onChange={onChange}
          />
          {/* ícone omitido para simplificar */}
        </div>
      </div>
      <div className="column">
        <div className="coluna6">
          <input
            type="text"
            id="senioridade"
            name="senioridade"
            placeholder="Senioridade"
            required
            onChange={onChange}
          />
          {/* ícone omitido para simplificar */}
        </div>
        <div className="coluna6">
          <input
            type="text"
            id="regimeTrabalho" // Corrigido para camelCase
            name="regimeTrabalho" // Corrigido para camelCase
            placeholder="Regime de trabalho"
            required
            onChange={onChange}
          />
           
        </div>
        <div className="coluna6">
          <input
            type="text"
            id="budgetMaximo" // Corrigido para camelCase
            name="budgetMaximo" // Corrigido para camelCase
            placeholder="Budget máximo"
            required
            onChange={onChange}
          />
     
        </div>
      </div>
    </div>
  );
}

export default RowContainer2;
