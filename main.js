// yeah this sucks
// FUCK HELLO WORLD, EMBRACE SALUTATING

const maths = require("./maths");

const hi = 'hi ';

const sayHello = (name) => console.log(hi + `${name}` + ". how you doin'?");
sayHello("Goran");

maths.sum(1, 2);
maths.subtract(2, 1);
maths.multiply(2, 2);
maths.divide(4, 2);
maths.divide(4, 0);
maths.raise(2, 3);