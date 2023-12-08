import React from 'react';
import './css.css';

function Title5({ onChange }) {
  return (
    <div className="responsabilidades">
      <h2>Responsabilidades</h2>
      <textarea 
        id="responsabilidades" 
        name="responsabilidades"
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default Title5;
