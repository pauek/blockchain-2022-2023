
import { virtualMachine, VM } from './vm';

virtualMachine.load([0]);
const res = virtualMachine.run();
console.log(res, virtualMachine.status);

const vm2 = new VM();
vm2.load([0, 1]);
vm2.run();