import { opcodes } from "./opcode-table";

type BinaryFunction = (a: number, b: number) => number | boolean;

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
    this.#stack = [];
  }

  step() {
    const next = () => this.#ip++;

    const binop = (fn: BinaryFunction) => {
      const a = this.#stack.pop();
      const b = this.#stack.pop();
      this.#stack.push(fn(a, b));
      next();
    };

    const jump = (dest: number) => {
      if (dest < 0 || dest >= this.#code.length) {
        this.#status = "error";
      } else {
        this.#ip = dest;
      }
    };

    const dup = (n: number) => {
      const pos = this.#stack.length - n;
      const value = this.#stack[pos];
      this.#stack.push(value);
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
        binop((a, b) => a + b);
        break;
      case opcodes.MUL:
        binop((a, b) => a * b);
        break;
      case opcodes.SUB:
        binop((a, b) => a - b);
        break;
      case opcodes.DIV:
        binop((a, b) => a / b);
        break;
      case opcodes.MOD:
        binop((a, b) => a % b);
        break;

      case opcodes.LT:
        binop((a, b) => a < b);
        break;
      case opcodes.GT:
        binop((a, b) => a > b);
        break;
      case opcodes.EQ:
        binop((a, b) => a === b);
        break;
      case opcodes.AND:
        binop((a, b) => a && b);
        break;
      case opcodes.OR:
        binop((a, b) => a || b);
        break;
      case opcodes.XOR:
        binop((a, b) => (a || b) && !(a && b));
        break;
      case opcodes.NOT: {
        const a = this.#stack.pop();
        this.#stack.push(!a);
        next();
        break;
      }

      case opcodes.JUMP: {
        const dest = this.#stack.pop();
        jump(dest);
        break;
      }
      case opcodes.JUMPI: {
        const dest = this.#stack.pop();
        const cond = this.#stack.pop();
        if (cond) {
          jump(dest);
        } else {
          next();
        }
        break;
      }

      case opcodes.DUP1:
        dup(1);
        break;
      case opcodes.DUP2:
        dup(2);
        break;
      case opcodes.DUP3:
        dup(3);
        break;
      case opcodes.DUP4:
        dup(4);
        break;
      case opcodes.DUP5:
        dup(5);
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
