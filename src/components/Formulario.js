import React, { useState } from 'react';
 
import './css.css';
import RowContainer1 from './row-container1';
import RowContainer2 from './row-container2';
import H2 from './h2';
import Button from './button';
import Title2 from './title2';
import Title3 from './title3';
import Title4 from './title4';
import Title5 from './title5';
 
function Formulario() {
  const [formData, setFormData] = useState({
    empresa: '',
    email: '',
    cnpj: '',
    fone: '',
    nomeSolicitante: '',
    tituloContratacao: '',
    modalidadeContratacao: '',
    periodoContratacao: '',
    posicao: '',
    horarioTrabalho: '',
    prioridadeContratacao: '',
    senioridade: '',
    regimeTrabalho: '',
    budgetMaximo: '',
    requisitosComportamentais:'',
    descricaoBeneficios:'',
    responsabilidades  :'',
    requisitosTecnicos :'',
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Configura o objeto a ser enviado
    const dataToSend = {
      empresa: formData.empresa,
      email: formData.email,
      cnpj: formData.cnpj,
      foneSolicitante: formData.fone,
      nomeSolicitante: formData.nomeSolicitante,
      modeloContratacao: formData.tituloContratacao,
      tipoContratacao: formData.modalidadeContratacao,
      localContratacao: formData.periodoContratacao,
      cargo: formData.posicao,
      horarioTrabalho: formData.horarioTrabalho,
      prioridadeContratacao: formData.prioridadeContratacao,
      senioridade: formData.senioridade,
      regimeTrabalho: formData.regimeTrabalho,
      budgetMaximo: formData.budgetMaximo,
      descricaoBeneficios:formData.descricaoBeneficios,
      responsabilidades  :formData.responsabilidades,
      requisitosTecnicos :formData.requisitosTecnicos,
      requisitosComportamentais:formData.requisitosComportamentais,
 
    };
  
   
  // Faz a requisição POST
  fetch('https://localhost:7199/api/Vagas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('A resposta da rede não foi ok.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Sucesso:', data);
    alert('Cadastrado com Sucesso: ');
    window.location.reload();
    // Limpa o formulário
    setFormData({
      empresa: '',
      email: '',
      cnpj: '',
      fone: '',
      nomeSolicitante: '',
      tituloContratacao: '',
      modalidadeContratacao: '',
      periodoContratacao: '',
      posicao: '',
      horarioTrabalho: '',
      prioridadeContratacao: '',
      senioridade: '',
      regimeTrabalho: '',
      budgetMaximo: '',
      descricaoBeneficios: '',
      responsabilidades: '',
      requisitosTecnicos: '',
      requisitosComportamentais: '',
    });
  })
  .catch((error) => {
    console.error('Erro:', error);
    alert('Erro: ' + error.message);
  });
};

  return (
    <form onSubmit={handleSubmit}>
    <RowContainer1 onChange={handleChange} />
    <H2 />
    <RowContainer2 onChange={handleChange} />
   <Title2 onChange={handleChange} />
   <Title3 onChange={handleChange} />
   <Title4 onChange={handleChange} />
   <Title5 onChange={handleChange} />
  <Button />

  </form>
  );
}

export default Formulario;
