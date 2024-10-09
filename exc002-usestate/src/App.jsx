import Dollars from "./components/Dollars";
import CnToFh from "./components/CnToFh";
import Area from "./components/Area";

const App = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      <h3>Cent to Fh</h3>
      <CnToFh />
      <h3>Dollars to Euros</h3>
      <Dollars />
      <h3>Area</h3>
      <Area />
    </div>
  );
}

export default App;