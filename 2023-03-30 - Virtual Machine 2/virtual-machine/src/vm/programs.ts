export const testMod = `
  push 5
  push 17
  mod
  output
  halt
`;

export const testMayor = `
  push 7
  push 3
  gt
  output
  halt
`;

export const testXor = `
  push true
  push true
  xor
  output
  halt
`;

export const testIf1 = `
  push true
  push 9
  jumpi
  push 12345
  output
  halt
  push 99999
  output
  halt
`;

export const testLoop1 = `
  push 100
  push 1
START:
  dup2
  dup2
  gt
  push END
  jumpi
  dup1
  output
  push 1
  add
  push START
  jump
END:
  halt
`;

export const isPrime = `
  push 10247693
  push 2
start:
  dup1
  dup1
  mul
  dup3
  lt
  push prime
  jumpi
check-divisor:
  dup1
  dup3
  mod
  push 0
  eq
  push not-prime
  jumpi
  push 1
  add
  push start
  jump
not-prime:
  push 0
  output
  halt
prime:
  push 1
  output
  halt
`;

export default [
  { name: "Test XOR", prog: testXor },
  { name: "Text IF 1", prog: testIf1 },
  { name: "Text Loop 1", prog: testLoop1 },
  { name: "Is Prime", prog: isPrime },
];
