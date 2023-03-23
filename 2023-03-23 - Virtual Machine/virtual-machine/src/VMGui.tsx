import { useState } from "react"
import { virtualMachine } from "./vm/vm"

function VMGui() {
  const [result, setResult] = useState(null);
  const [snapshot, setSnapshot] = useState(virtualMachine.snapshot());

  const run = () => {
    virtualMachine.load([0]);
    const res = virtualMachine.run();
    setSnapshot(virtualMachine.snapshot());
    setResult(res);
  }

  return (
    <div className="App">
      <div>{snapshot.ip}</div>
      <div>{snapshot.status}</div>
      <button onClick={run}>Run</button>
      <div>Result: {result ?? "<none>"}</div>
    </div>
  )
}

export default VMGui
