
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
`

export const testXor = `
push true
push true
xor
output
halt
`

export const testIf1 = `
push true
push 9
JUMPI
push 12345
output
halt
push 99999
output
halt
`