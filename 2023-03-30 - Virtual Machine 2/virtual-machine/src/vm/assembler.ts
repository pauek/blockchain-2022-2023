import { opcodes } from "./opcode-table";

export const assemble = (code: string): Array<number> => {
  const bytecode: Array<number> = [];

  const lines = code
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((s) => s.replace(/ +/g, " ").trim());

  const labels = new Map<string, number>();
  let curr = 0;
  for (const line of lines) {
    const numBytes = line.split(" ").length;
    if (line.endsWith(":")) {
      const name = line.slice(0, line.length-1);
      labels.set(name, curr);
    } else {
      curr += numBytes;
    }
  }

  const parseValue = (val: string) => {
    if (val === "true") return 1;
    if (val === "false") return 0;
    if (labels.has(val)) return labels.get(val)!;
    return parseInt(val);
  };

  for (const line of lines) {
    if (line.endsWith(":")) {
      continue;
    }
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
