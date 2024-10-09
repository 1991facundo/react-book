import { useState } from "react";

const CnToFh = () => {
  const [fah, setFah] = useState(0);

  const convert = (cent) => {
    setFah(cent * 1.8 + 32);
  };

  return (
    <div>
      <input type="number" onChange={(e) => convert(e.target.value)} />
      <h2>{fah}</h2>
    </div>
  );
};

export default CnToFh;