import React, { useState } from "react";
import './Counter.css';

const Counter = ({ incr }) => {
  const [count, setCount] = useState(0);

  const incrementaContador = () => {
    setCount((c) => c + incr);
  };

  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button onClick={incrementaContador}>+{incr}</button>
    </div>
  );
};

export default Counter;
