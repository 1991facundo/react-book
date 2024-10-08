import { useRef, useState } from "react";

function App() {
  //   const euros = useRef();
  //   const [dolars, setDolars] = useState(0);

  //   const convert = () => {
  //     setDolars(euros.current.value * 2);
  //   };

  //   return (
  //     <div>
  //       <input type="number" ref={euros} />
  //       <button onClick={convert}>Convert</button>
  //       <h2>{dolars}</h2>
  //     </div>
  //   );

  // EJERCICIO CENTIGRADOS A FAHRENHEIT}

  // const cent = useRef();
  // const [fah, setFah] = useState(0);

  // const convert = () => {
  //   setFah(cent.current.value * 1.8 + 32);

  // }

  //     return (
  //       <div>
  //         <input type="number" ref={cent} />
  //         <button onClick={convert}>Convert</button>
  //         <h2>{fah}</h2>
  //       </div>
  //     );

  // Select Image

  // const images = {
  //     img1: "IMAGE 1",
  //     img2: "IMAGE 2",
  //     img3: "IMAGE 3",
  // }

  // const [selectedImg, setSelectedImg] = useState();

  // return (
  //     <div>

  //         <button>
  //             <img src={images.img1} alt="img1" onClick={() => setSelectedImg(images.img1)} />
  //         </button>
  //         <button>
  //             <img src={images.img2} alt="img2" onClick={() => setSelectedImg(images.img2)} />
  //         </button>
  //         <button>
  //             <img src={images.img3} alt="img3" onClick={() => setSelectedImg(images.img3)} />
  //         </button>
  //         <img src={selectedImg} alt="img" />
  //     </div>
  // )

  // SET AREA

  // const base = useRef();
  // const height = useRef();
  // const [area, setArea] = useState(0);

  // const calculate = () => {
  //     setArea(base.current.value * height.current.value);
  // }

  // return (
  //     <div>
  //         <input type="number" ref={base} />
  //         <input type="number" ref={height} />
  //         <button onClick={calculate}>Calculate</button>
  //         <h2>{area}</h2>
  //     </div>
  // )

  // CALCULATOR

  const num1 = useRef();
  const num2 = useRef();
  const [result, setResult] = useState(0);

  const calculateAdd = () => {
    setResult(parseInt(num1.current.value) + parseInt(num2.current.value));
  };

  const calculateSub = () => {
    setResult(parseInt(num1.current.value) - parseInt(num2.current.value));
  };

  const calculateMul = () => {
    setResult(parseInt(num1.current.value) * parseInt(num2.current.value));
  };

  const calculateDiv = () => {
    setResult(parseInt(num1.current.value) / parseInt(num2.current.value));
  };

  return (
    <div>
      <input type="number" ref={num1} />
      <input type="number" ref={num2} />
      <button onClick={calculateAdd}>+</button>
      <button onClick={calculateSub}>-</button>
      <button onClick={calculateMul}>*</button>
      <button onClick={calculateDiv}>/</button>
      <h2>{result}</h2>
    </div>
  );

  
}
export default App;
