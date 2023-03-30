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

  _op(0x10, "LT"),
  _op(0x11, "GT"),
  _op(0x14, "EQ"),
  _op(0x16, "AND"),
  _op(0x17, "OR"),
  _op(0x18, "XOR"),
  _op(0x19, "NOT"),

  _op(0x56, "JUMP"),
  _op(0x57, "JUMPI"),

  _op(0x80, "DUP1"),
  _op(0x81, "DUP2"),
  _op(0x82, "DUP3"),
  _op(0x83, "DUP4"),
  _op(0x84, "DUP5"),

  _op(0xFF, "OUTPUT"),
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
