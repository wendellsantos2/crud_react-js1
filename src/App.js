import React, { useState } from 'react';
import "./components/css.css";
import Header from './components/header'; // Importe o componente Header

 
import H2 from './components/h2';
 
import Title2 from './components/title2'; // Importe o componente Title2
import Title3 from './components/title3'; // Importe o componente Title3
import Title4 from './components/title4'; // Importe o componente Title4
import Title5 from './components/title5'; // Importe o componente Title5
import Button from './components/button';
import Formulario from './components/Formulario';

function App() {
 

  return (
    <div className="App">
      <Header />
        <H2 />
        <Formulario/>
    </div>
  );
}

export default App;
