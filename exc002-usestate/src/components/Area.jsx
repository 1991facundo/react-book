import React, { useState } from 'react';

const Base = () => { const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);

  const handleBaseChange = (e) => {
    setBase(Number(e.target.value));
    setArea(Number(e.target.value) * height); 
  };

  const handleHeightChange = (e) => {
    setHeight(Number(e.target.value));
    setArea(base * Number(e.target.value)); 
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="Base" 
        onChange={handleBaseChange} 
      />
      <input 
        type="number" 
        placeholder="Height" 
        onChange={handleHeightChange} 
      />
      <h2>Área: {area}</h2>
    </div>
  );}

  export default Base;
 