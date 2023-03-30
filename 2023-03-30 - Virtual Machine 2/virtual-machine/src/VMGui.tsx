import { useEffect, useState } from "react";
import { assemble } from "./vm/assembler";
import { testLoop1 } from "./vm/programs";
import { virtualMachine } from "./vm/vm";

function VMGui() {
  const [snapshot, setSnapshot] = useState(virtualMachine.snapshot());
  const [output, setOutput] = useState("");

  useEffect(() => {
    virtualMachine.load(assemble(testLoop1));
    virtualMachine.setOutputFunc((val) => {
      setOutput((prevOutput) => prevOutput + `${val}\n`);
    });
    setSnapshot(virtualMachine.snapshot());
  }, []);

  const step = () => {
    virtualMachine.step();
    setSnapshot(virtualMachine.snapshot());
  };

  const run = () => {
    const res = virtualMachine.run();
    setSnapshot(virtualMachine.snapshot());
  };

  const reset = () => {
    virtualMachine.reset();
    setOutput("");
    setSnapshot(virtualMachine.snapshot());
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={step}>Step</button>
        <button onClick={run}>Run</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="status">{snapshot.status}</div>
      <div className="code">
        {snapshot.code.map((byte, i) => (
          <span key={i} className={"byte" + (i === snapshot.ip ? " curr" : "")}>
            {byte}
          </span>
        ))}
      </div>
      <div className="row">
        <div id="stack">
          {snapshot.stack.map((value: number) => (
            <div className="value">{value}</div>
          ))}
        </div>
        <pre id="output">{output}</pre>
      </div>
    </div>
  );
}

export default VMGui;
