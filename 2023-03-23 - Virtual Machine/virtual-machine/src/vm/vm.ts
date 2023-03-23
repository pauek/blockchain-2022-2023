
export class VM {
  #ip: number;
  #code: Array<number>;
  #stack: Array<any>;
  #status: "halted" | "running";

  constructor() {
    this.#ip = 0;
    this.#code = [];
    this.#stack = [];
    this.#status = "halted";
  }

  get status() {
    return this.#status;
  }

  load(code: Array<number>) {
    this.#code = code;
    this.#ip = 0;
    this.#status = "running";
  }

  step() {
    const opcode = this.#code[this.#ip];
    switch (opcode) {
      case 0: { // HALT
        this.#status = "halted";
        this.#ip++;
        break;
      }
    }
  }

  run() {
    while (this.#ip < this.#code.length && this.#status === "running") {
      this.step();
    }
    if (this.#stack.length > 0) {
      return this.#stack.pop();
    } else {
      return null;
    }
  }
}

export const virtualMachine = new VM();