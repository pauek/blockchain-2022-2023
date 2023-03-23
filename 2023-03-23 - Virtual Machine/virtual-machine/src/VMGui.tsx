import { useEffect, useState } from "react";
import { opcodes } from "./vm/opcode-table";
import { virtualMachine } from "./vm/vm";

function VMGui() {
  const [result, setResult] = useState(null);
  const [snapshot, setSnapshot] = useState(virtualMachine.snapshot());

  useEffect(() => {
    virtualMachine.load([
      opcodes.PUSH,
      5,
      opcodes.PUSH,
      17,
      opcodes.MOD,
      opcodes.POP,
      opcodes.HALT,
    ]);
    setSnapshot(virtualMachine.snapshot());
  }, []);

  const step = () => {
    virtualMachine.step();
    setSnapshot(virtualMachine.snapshot());
  };

  const run = () => {
    const res = virtualMachine.run();
    setSnapshot(virtualMachine.snapshot());
    setResult(res);
  };

  const reset = () => {
    virtualMachine.reset();
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
      <div>Result: {result ?? "<none>"}</div>
    </div>
  );
}

export default VMGui;
