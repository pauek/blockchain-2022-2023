import { useEffect, useState, useRef, ChangeEventHandler } from "react";
import { assemble } from "./vm/assembler";
import programTable, { isPrime, testLoop1 } from "./vm/programs";
import { virtualMachine } from "./vm/vm";

function VMGui() {
  const [snapshot, setSnapshot] = useState(virtualMachine.snapshot());
  const [output, setOutput] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    virtualMachine.setOutputFunc((val) => {
      setOutput((prevOutput) => prevOutput + `${val}\n`);
    });
    setSnapshot(virtualMachine.snapshot());
  }, []);

  const doAssemble = () => {
    if (textRef.current) {
      const program = textRef.current.value;
      virtualMachine.load(assemble(program));
      setSnapshot(virtualMachine.snapshot());
    }
  };

  const loadProgram : ChangeEventHandler<HTMLSelectElement> = (ev) => {
    if (textRef.current) {
      const i = programTable.findIndex(({ name }) => name === ev.target.value);
      textRef.current.value = programTable[i].prog.slice(1);
    }
  }

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
        <div className="editor-area">
          <select onChange={loadProgram}>
            {programTable.map(({ name }) => (
              <option>{name}</option>
            ))}
          </select>
          <textarea id="editor" ref={textRef}>
            Code here
          </textarea>
          <button onClick={doAssemble}>Assemble</button>
        </div>
        <div id="stack">
          {snapshot.stack.map((value: number) => (
            <div className="value">{String(value)}</div>
          ))}
        </div>
        <pre id="output">{output}</pre>
      </div>
    </div>
  );
}

export default VMGui;
