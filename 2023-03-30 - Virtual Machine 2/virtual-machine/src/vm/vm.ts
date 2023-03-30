import { opcodes } from "./opcode-table";

type ArithFunction = (a: number, b: number) => number;

export type OutputFunction = (value: any) => void;
export class VM {
  #ip: number;
  #code: Array<number>;
  #stack: Array<any>;
  #status: "halted" | "running" | "error";
  #outputFunc?: OutputFunction;

  constructor() {
    this.#ip = 0;
    this.#code = [];
    this.#stack = [];
    this.#status = "halted";
  }

  setOutputFunc(f: OutputFunction) {
    this.#outputFunc = f;
  }

  snapshot() {
    return {
      ip: this.#ip,
      code: this.#code,
      stack: structuredClone(this.#stack),
      status: this.#status,
    };
  }

  get status() {
    return this.#status;
  }

  load(code: Array<number>) {
    this.#code = code;
    this.#ip = 0;
    this.#status = "running";
  }

  reset() {
    this.#ip = 0;
    this.#status = "running";
  }

  step() {
    const next = () => this.#ip++;

    const arithmetic = (fn: ArithFunction) => {
      const a = this.#stack.pop();
      const b = this.#stack.pop();
      this.#stack.push(fn(a, b));
      next();
    };

    if (this.#status !== "running") {
      return;
    }
    const opcode = this.#code[this.#ip];
    switch (opcode) {
      case opcodes.HALT: {
        // HALT
        this.#status = "halted";
        next();
        break;
      }
      case opcodes.PUSH: {
        // PUSH
        next();
        const value = this.#code[this.#ip];
        next();
        this.#stack.push(value);
        break;
      }
      case opcodes.POP: {
        next();
        this.#stack.pop();
        break;
      }

      case opcodes.ADD:
        arithmetic((a, b) => a + b);
        break;
      case opcodes.MUL:
        arithmetic((a, b) => a * b);
        break;
      case opcodes.SUB:
        arithmetic((a, b) => a - b);
        break;
      case opcodes.DIV:
        arithmetic((a, b) => a / b);
        break;
      case opcodes.MOD:
        arithmetic((a, b) => a % b);
        break;


      case opcodes.OUTPUT: {
        const top = this.#stack.pop();
        if (this.#outputFunc) {
          this.#outputFunc(top);
        }
        next();
        break;
      }

        
      default: {
        this.#status = "error";
        console.error(`UNIMPLEMENTED OPCODE (${opcode})`);
      }
    }
  }

  run() {
    while (this.#ip < this.#code.length && this.#status === "running") {
      this.step();
    }
    if (this.#stack.length > 0) {
      const result = this.#stack.slice(-1)[0];
      return result;
    } else {
      return null;
    }
  }
}

export const virtualMachine = new VM();
