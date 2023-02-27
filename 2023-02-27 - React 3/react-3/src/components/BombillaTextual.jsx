import React, { useState } from "react";

const BombillaTextual = () => {
  const [encendido, setEncendido] = useState(false);

  const alterna = () => {
    setEncendido((prev) => !prev);
  };

  return (
    <div className="bombilla">
      {encendido ? "Encendido" : "Apagado"}
      <button onClick={alterna}>
        {encendido ? "Apagar" : "Encender"}
      </button>
    </div>
  );
};

export default BombillaTextual;
