import { useState } from "react";
import "./App.css";
import Beer from "./components/Beer";

// Los componentes son funciones *puras*

function App() {
  const [count, setCount] = useState(0);
  const [encendido, setEncendido] = useState(false);

  const incrementaContador = () => {
    setCount(c => c + 1);
  }

  const alterna = () => {
    setEncendido(prev => !prev);
  }

  return (
    <div>
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={incrementaContador}>+1</button>
      </div>
      <div className="bombilla">
        {encendido ? "Encendido" : "Apagado"}
        <button onClick={alterna}>
          {encendido ? "Apagar" : "Encender"}
        </button>
      </div>
      <Beer name="Blanquita" price={2.7} />
      <Beer name="Negrita" price={2.9} />
    </div>
  );
}

export default App;
