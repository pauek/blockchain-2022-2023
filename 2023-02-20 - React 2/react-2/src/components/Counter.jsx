import React, { useState } from "react";

const Counter = ({ incr }) => {
  const [count, setCount] = useState(0);

  const incrementaContador = () => {
    setCount((c) => c + incr);
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={incrementaContador}>+{incr}</button>
    </div>
  );
};

export default Counter;
