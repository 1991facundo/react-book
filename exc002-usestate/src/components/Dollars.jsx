import { useState } from "react";

const Dollars = () => { 
     const [dolars, setDolars] = useState(0);

  const convert = (euros) => {
    setDolars(euros * 2);
  };  

  return (
    <div>
      <input type="number" onChange={(e) => convert(e.target.value)} />
      <h2>{dolars}</h2>
    </div>
  );
}

export default Dollars;