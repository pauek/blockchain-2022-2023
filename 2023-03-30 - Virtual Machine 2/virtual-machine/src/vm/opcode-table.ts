const _op = (code: number, name: string, nargs: number = 0) => ({
  code,
  name,
  nargs,
});

export const operations = [
  _op(0x00, "HALT"),
  _op(0x50, "POP"),
  _op(0x60, "PUSH", 1),

  _op(0x01, "ADD"),
  _op(0x02, "MUL"),
  _op(0x03, "SUB"),
  _op(0x04, "DIV"),
  _op(0x05, "MOD"),
];


export const optable = new Array(256);
export const opcodes : { [opcode: string]: number } = {};

optable[0x00] = operations[0];
// Guardamos cada operación en la casilla que le corresponde a su opcode
// También generamos un objecto con todos los opcodes como campos (con su nombre)
for (const op of operations) {
  optable[op.code] = op;
  opcodes[op.name] = op.code;
}

console.log(optable);
console.log(opcodes);
