import { opcodes } from "./opcode-table";

const parseValue = (val: string) => {
  if (val === "true") return 1;
  if (val === "false") return 0;
  return parseInt(val);
};

export const assemble = (code: string): Array<number> => {
  const bytecode: Array<number> = [];

  const lines = code
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((s) => s.replace(/ +/g, " ").trim());
    
  for (const line of lines) {
    const [op, arg] = line.split(" "); // "push 5" --> ["push", "5"]
    const OP = op.toUpperCase();
    if (OP in opcodes) {
      bytecode.push(opcodes[OP]);
    } else {
      throw new Error(`Undefined instruction "${op}"`);
    }
    if (arg) {
      bytecode.push(parseValue(arg));
    }
  }
  return bytecode;
};
