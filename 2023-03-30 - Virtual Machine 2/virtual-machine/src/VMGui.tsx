import { useEffect, useState } from "react";
import { assemble } from "./vm/assembler";
import { testIf1, testMayor, testXor } from "./vm/programs";
import { virtualMachine } from "./vm/vm";

function VMGui() {
  const [snapshot, setSnapshot] = useState(virtualMachine.snapshot());
  const [output, setOutput] = useState("");

  useEffect(() => {
    virtualMachine.load(assemble(testIf1));
    virtualMachine.setOutputFunc((val) => {
      setOutput(prevOutput => prevOutput + `${val}\n`);
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
      <div>{snapshot.ip}</div>
      <div>{snapshot.status}</div>
      <div>
        code: <code>{JSON.stringify(snapshot.code)}</code>
      </div>
      <div>
        stack: <code>{JSON.stringify(snapshot.stack)}</code>
      </div>
      <button onClick={step}>Step</button>
      <button onClick={run}>Run</button>
      <button onClick={reset}>Reset</button>
      <pre className="output">{output}</pre>
    </div>
  );
}

export default VMGui;
